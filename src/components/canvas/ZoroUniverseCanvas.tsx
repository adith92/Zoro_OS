import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

const holographicShaderMaterial = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color("#00f3ff") },
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
      // Scroll displacement logic
      pos.y += scrollY * 0.005;
      
      // Glitch / Noise displacement
      float noise = sin(pos.x * 10.0 + time) * cos(pos.y * 10.0 + time) * 0.02;
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
      float scanline = sin(vPosition.y * 80.0 - time * 15.0) * 0.04;
      
      vec3 viewDirection = normalize(cameraPosition - vPosition);
      float rim = 1.0 - max(dot(viewDirection, vNormal), 0.0);
      rim = smoothstep(0.5, 1.0, rim);
      
      float pulse = (sin(time * 3.0) + 1.0) * 0.5;
      vec3 finalColor = mix(color, vec3(0.61, 0.0, 1.0), pulse * 0.5); // cyber cyan to purple
      
      // Hover adds hot pink and gold
      vec3 hoverColor = mix(vec3(1.0, 0.0, 0.91), vec3(1.0, 0.84, 0.0), pulse);
      finalColor = mix(finalColor, hoverColor, hoverState);
      
      float alpha = 0.7 + scanline + rim * 0.5 + hoverState * 0.3;
      
      // Add metallic shine
      float shine = pow(max(dot(reflect(-viewDirection, vNormal), viewDirection), 0.0), 32.0);
      finalColor += vec3(shine) * (0.5 + hoverState * 0.5);
      
      gl_FragColor = vec4(finalColor * (1.0 + rim + hoverState * 1.5), alpha);
    }
  `
};

function ZoroInteractiveLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  // Track continuous global mouse and scroll to ensure interaction even if overlay covers it
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
    
    // Listen for scrolling in the main scrollable container
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollTop !== undefined) {
        scrollProxy.current = target.scrollTop;
      }
    };
    
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll, true); 
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.scrollY.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.scrollY.value,
        scrollProxy.current,
        0.1
      );
      materialRef.current.uniforms.hoverState.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.hoverState.value,
        hovered || clicked ? 1 : 0,
        0.1
      );
    }

    if (meshRef.current) {
      // Constant rotation
      meshRef.current.rotation.y += delta * 0.3;
      
      // Global mouse interaction parallax
      const targetRotX = mouseProxy.current.y * Math.PI * 0.2;
      const targetRotY = meshRef.current.rotation.y + mouseProxy.current.x * Math.PI * 0.1;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
      
      // Bounce effect on click
      const targetScale = clicked ? 1.5 : (hovered ? 1.2 : 1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
      
      // Float variation based on scroll and responsive position
      const scrollYOffset = scrollProxy.current * -0.005;
      const baseX = isMobile ? 0 : 3;
      const baseY = (isMobile ? 3 : 0) + scrollYOffset;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY, 0.05);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <mesh 
        ref={meshRef}
        position={[3, 0, -5]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'crosshair'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        onClick={(e) => {
          e.stopPropagation();
          setClicked(true);
          setTimeout(() => setClicked(false), 300);
        }}
      >
        <torusKnotGeometry args={[1.5, 0.5, 200, 32]} />
        <shaderMaterial
          ref={materialRef}
          attach="material"
          args={[holographicShaderMaterial]}
          transparent={true}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
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
        size={0.05}
        color="#00f3ff"
        transparent={true}
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ZoroUniverseCanvas() {
  return (
    <Canvas className="w-full h-full bg-cyber-dark">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <color attach="background" args={['#050510']} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f3ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ff00ea" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
      <Particles />
      <ZoroInteractiveLogo />

      <ContactShadows position={[3, -2.5, -5]} opacity={0.5} scale={10} blur={2} far={4} color="#ff00ea" />

      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.9} 
          intensity={1.5} 
          kernelSize={3}
        />
        <Noise opacity={0.05} />
        {/* Slightly reduced aberration for readability */}
        <ChromaticAberration 
          offset={new THREE.Vector2(0.002, 0.002)} 
          blendFunction={BlendFunction.NORMAL} 
        />
      </EffectComposer>
    </Canvas>
  );
}
