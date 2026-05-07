import React, { useEffect } from 'react';
import { useSettingsStore } from '@/store/useStore';
import { hexToRgb, normalizeHex } from '@/lib/colorUtils';

export const ZoroThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeSettings = useSettingsStore(state => state.themeSettings);

  useEffect(() => {
    if (!themeSettings) return;

    const root = document.documentElement;
    
    const p = normalizeHex(themeSettings.primaryColor);
    const s = normalizeHex(themeSettings.secondaryColor);
    const a = normalizeHex(themeSettings.accentColor);

    root.style.setProperty('--zoro-primary', p);
    root.style.setProperty('--zoro-secondary', s);
    root.style.setProperty('--zoro-accent', a);
    
    root.style.setProperty('--zoro-primary-rgb', hexToRgb(p));
    root.style.setProperty('--zoro-secondary-rgb', hexToRgb(s));
    root.style.setProperty('--zoro-accent-rgb', hexToRgb(a));

    root.style.setProperty('--zoro-bloom-intensity', themeSettings.bloomIntensity.toString());
    root.style.setProperty('--zoro-glitch-intensity', themeSettings.glitchIntensity.toString());
    root.style.setProperty('--zoro-scanline-intensity', themeSettings.scanlineIntensity.toString());
    root.style.setProperty('--zoro-star-density', themeSettings.starDensity.toString());
    root.style.setProperty('--zoro-motion-intensity', themeSettings.motionIntensity.toString());
    root.style.setProperty('--zoro-glass-blur', `${themeSettings.glassBlur}px`);
    
  }, [themeSettings]);

  return <>{children}</>;
};
