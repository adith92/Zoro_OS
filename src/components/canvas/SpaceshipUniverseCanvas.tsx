import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

const SoftHologramShader = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color("#818cf8") }, // Soft Violet
    hoverState: { value: 0 },
    scrollY: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform float time;
    uniform float scrollY;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      vec3 pos = position;
      // Gentle Space float displacement
      pos.y += scrollY * 0.002;
      
      // Soft breathing
      float noise = sin(pos.x * 5.0 + time) * cos(pos.y * 5.0 + time) * 0.01;
      pos += normal * noise;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    uniform float hoverState;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      float scanline = sin(vPosition.y * 50.0 - time * 5.0) * 0.02;
      
      vec3 viewDirection = normalize(cameraPosition - vPosition);
      float rim = 1.0 - max(dot(viewDirection, vNormal), 0.0);
      rim = smoothstep(0.4, 1.0, rim);
      
      float pulse = (sin(time * 2.0) + 1.0) * 0.5;
      vec3 finalColor = mix(color, vec3(0.22, 0.74, 0.97), pulse * 0.5); // violet to cyan
      
      // Hover adds starlight white
      vec3 hoverColor = mix(vec3(0.97, 0.98, 1.0), vec3(0.22, 0.74, 0.97), pulse);
      finalColor = mix(finalColor, hoverColor, hoverState);
      
      float alpha = 0.5 + scanline + rim * 0.6 + hoverState * 0.2;
      
      // Soft shine
      float shine = pow(max(dot(reflect(-viewDirection, vNormal), viewDirection), 0.0), 16.0);
      finalColor += vec3(shine) * (0.3 + hoverState * 0.4);
      
      gl_FragColor = vec4(finalColor * (1.0 + rim + hoverState * 0.5), alpha);
    }
  `
};

function SpaceshipCoreLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  const mouseProxy = useRef(new THREE.Vector2(0, 0));
  const scrollProxy = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseProxy.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseProxy.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseProxy.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseProxy.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollTop !== undefined) {
        scrollProxy.current = target.scrollTop;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll, true); 
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.scrollY.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.scrollY.value,
        scrollProxy.current,
        0.05
      );
      materialRef.current.uniforms.hoverState.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.hoverState.value,
        hovered ? 1 : 0,
        0.1
      );
    }

    if (meshRef.current && ringRef.current) {
      // Soft constant rotation
      meshRef.current.rotation.y += delta * 0.15;
      ringRef.current.rotation.x += delta * 0.1;
      ringRef.current.rotation.y += delta * 0.2;
      
      // Global mouse interaction parallax
      const targetRotX = mouseProxy.current.y * Math.PI * 0.1;
      const targetRotY = meshRef.current.rotation.y + mouseProxy.current.x * Math.PI * 0.05;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
      
      // Gentle scale on hover
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Float variation based on scroll and responsive position
      const scrollYOffset = scrollProxy.current * -0.002;
      const baseX = isMobile ? 0 : 3;
      const baseY = (isMobile ? 3 : 0) + scrollYOffset;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY, 0.05);
      
      ringRef.current.position.x = meshRef.current.position.x;
      ringRef.current.position.y = meshRef.current.position.y;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Inner Core */}
        <mesh 
          ref={meshRef}
          position={[3, 0, -5]}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        >
          <sphereGeometry args={[1.2, 64, 64]} />
          <shaderMaterial
            ref={materialRef}
            attach="material"
            args={[SoftHologramShader]}
            transparent={true}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Orbiting Ring */}
        <mesh ref={ringRef} position={[3, 0, -5]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function SoftParticles() {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#818cf8"
        transparent={true}
        opacity={0.4}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="absolute inset-0 bg-space-dark" />;
    }
    return this.props.children;
  }
}

export function SpaceshipUniverseCanvas() {
  return (
    <ErrorBoundary>
      <Canvas 
        className="w-full h-full bg-space-dark"
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <color attach="background" args={['#020617']} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#818cf8" />
        
        <Stars radius={100} depth={50} count={2500} factor={3} saturation={1} fade speed={0.5} />
        <SoftParticles />
        <SpaceshipCoreLogo />

        <ContactShadows position={[3, -2.5, -5]} opacity={0.3} scale={15} blur={3} far={5} color="#818cf8" />

        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.5} 
            luminanceSmoothing={0.9} 
            intensity={1.2} 
            kernelSize={2}
          />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </ErrorBoundary>
  );
}
