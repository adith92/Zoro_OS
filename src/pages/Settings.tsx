import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Key, Settings as SettingsIcon } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';

export function Settings() {
  const { vynaaApiKey, sumoPodApiKey, setVynaaApiKey, setSumoPodApiKey } = useSettingsStore();
  
  const [localVynaa, setLocalVynaa] = useState(vynaaApiKey);
  const [localSumo, setLocalSumo] = useState(sumoPodApiKey);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setVynaaApiKey(localVynaa);
    setSumoPodApiKey(localSumo);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto cyber-scrollbar p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-panel p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <SettingsIcon className="w-8 h-8 text-cyber-cyan" />
            <h1 className="text-3xl font-bold font-mono">System Configuration</h1>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-cyber-purple font-mono font-bold">
                <Key className="w-4 h-4" /> Vynaa API Key
              </label>
              <p className="text-xs text-gray-400 font-mono">Dapatkan dari: <a href="https://vynaa.web.id" target="_blank" rel="noreferrer" className="text-cyber-cyan hover:underline">https://vynaa.web.id</a></p>
              <input 
                type="password" 
                value={localVynaa}
                onChange={(e) => setLocalVynaa(e.target.value)}
                placeholder="vynaa_..."
                className="w-full bg-black/50 border border-cyber-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-purple focus:shadow-[0_0_15px_rgba(157,0,255,0.3)] transition-all font-mono"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2 text-cyber-pink font-mono font-bold">
                <Key className="w-4 h-4" /> SumoPod API Key
              </label>
              <p className="text-xs text-gray-400 font-mono">Dapatkan dari SumoPod AI Gateway</p>
              <input 
                type="password" 
                value={localSumo}
                onChange={(e) => setLocalSumo(e.target.value)}
                placeholder="sk-..."
                className="w-full bg-black/50 border border-cyber-pink/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-pink focus:shadow-[0_0_15px_rgba(255,0,234,0.3)] transition-all font-mono"
              />
            </div>

            <button 
              onClick={handleSave}
              className="w-full bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/40 hover:text-white hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" /> 
              {saved ? 'CONFIGURATION SAVED!' : 'SAVE CONFIGURATION'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
