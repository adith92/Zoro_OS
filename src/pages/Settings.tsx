import React, { useState, useEffect } from 'react';
import { Save, Key, Settings as SettingsIcon, Eye, EyeOff, XCircle, Cpu, User, Activity } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowButton } from '@/components/ui/GlowButton';
import { StatusPill } from '@/components/ui/StatusPill';
import { callVynaaEndpoint } from '@/api/universalVynaa';
import { VYNAA_ENDPOINTS } from '@/data/vynaaRegistry';
import { chatSumoPod } from '@/api/sumopod';
import { toast } from 'sonner';

const SUMOPOD_MODELS = [
  "gpt-3.5-turbo",
  "gpt-4",
  "gpt-4o",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
  "gemini-1.5-pro-latest"
];

export function Settings() {
  const { 
    vynaaApiKey, sumoPodApiKey, setVynaaApiKey, setSumoPodApiKey, selectedModel, setSelectedModel,
    vynaaUserProfile, setVynaaUserProfile
  } = useSettingsStore();

  const [localVynaa, setLocalVynaa] = useState(vynaaApiKey);
  const [localSumo, setLocalSumo] = useState(sumoPodApiKey);
  
  const [showVynaa, setShowVynaa] = useState(false);
  const [showSumo, setShowSumo] = useState(false);

  const [vynaaStatus, setVynaaStatus] = useState<'idle'|'checking'|'success'|'failed'>('idle');
  const [sumoStatus, setSumoStatus] = useState<'idle'|'checking'|'success'|'failed'>('idle');

  const handleSave = () => {
    setVynaaApiKey(localVynaa);
    setSumoPodApiKey(localSumo);
    toast.success("Settings saved successfully.");
  };

  const testVynaa = async () => {
    if (!localVynaa) return;
    setVynaaApiKey(localVynaa); // Must save temporarily for the universal caller
    setVynaaStatus('checking');
    try {
      const pingEndpoint = VYNAA_ENDPOINTS.find(e => e.id === 'status_ping')!;
      const res = await callVynaaEndpoint(pingEndpoint, {});
      if (res && res.status) {
        setVynaaStatus('success');
        toast.success("Vynaa API connected!");
        fetchProfile();
      } else {
        setVynaaStatus('failed');
        toast.error("Vynaa API key verification failed.");
      }
    } catch {
      setVynaaStatus('failed');
      toast.error("Network or API error while connecting to Vynaa.");
    }
  };

  const fetchProfile = async () => {
     try {
       const profileEndpoint = VYNAA_ENDPOINTS.find(e => e.id === 'status_profile')!;
       const res = await callVynaaEndpoint(profileEndpoint, {});
       if (res && res.status) {
           setVynaaUserProfile((res.data as any)?.result || res.error || (res.data as any)?.message);
       }
     } catch (e) {
         console.warn("Could not fetch profile");
     }
  };

  useEffect(() => {
      if (vynaaApiKey && !vynaaUserProfile) {
          fetchProfile();
      }
  }, []);

  const testSumo = async () => {
    if (!localSumo) return;
    setSumoStatus('checking');
    try {
      setSumoPodApiKey(localSumo);
      const res = await chatSumoPod([{ role: 'user', content: 'test' }], 'gpt-3.5-turbo');
      if (res) {
        setSumoStatus('success');
      } else {
        setSumoStatus('failed');
      }
    } catch {
      setSumoStatus('failed');
    }
  };

  return (
    <PageTransition className="flex-1 overflow-y-auto cyber-scrollbar p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <SettingsIcon className="w-8 h-8 text-space-cyan" />
            <h1 className="text-2xl sm:text-3xl font-bold font-mono text-space-starlight">System Configuration</h1>
          </div>

          <div className="mb-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
            <p className="text-xs sm:text-sm text-blue-200 font-mono leading-relaxed">
              <strong>Note:</strong> API Keys are securely saved in your browser's <code className="bg-black/30 px-1 rounded">localStorage</code>. 
              They are never sent to our servers except as a proxy pass-through. 
              Clearing browser data will delete them.
            </p>
          </div>

          <div className="space-y-8">
            {/* Vynaa Config */}
            <div className="space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <label className="flex items-center gap-2 text-space-violet font-mono font-bold">
                  <Key className="w-4 h-4" /> Vynaa API Key
                </label>
                <div className="flex items-center gap-2">
                  <StatusPill status={vynaaStatus} />
                  <GlowButton variant="ghost" size="sm" onClick={testVynaa} disabled={!localVynaa || vynaaStatus === 'checking'} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                    Test Key
                  </GlowButton>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">Dapatkan dari: <a href="https://vynaa.web.id" target="_blank" rel="noreferrer" className="text-space-cyan hover:underline">https://vynaa.web.id</a></p>
              
              <div className="relative">
                <input 
                  type={showVynaa ? "text" : "password"} 
                  value={localVynaa}
                  onChange={(e) => setLocalVynaa(e.target.value)}
                  placeholder="vynaa_..."
                  className="w-full bg-space-navy/50 border border-space-violet/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-violet focus:shadow-[0_0_15px_rgba(129,140,248,0.3)] transition-all font-mono pr-20"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400">
                  <GlowButton variant="ghost" size="icon" onClick={() => setLocalVynaa('')} className="p-1 hover:text-red-400 text-gray-400 rounded-md"><XCircle size={18} /></GlowButton>
                  <GlowButton variant="ghost" size="icon" onClick={() => setShowVynaa(!showVynaa)} className="p-1 hover:text-white text-gray-400 rounded-md">{showVynaa ? <EyeOff size={18} /> : <Eye size={18} />}</GlowButton>
                </div>
              </div>

              {vynaaUserProfile && (
                  <div className="mt-4 p-4 rounded-xl bg-space-violet/10 border border-space-violet/20 flex flex-col sm:flex-row gap-4 items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-space-dark/80 flex items-center justify-center border border-space-violet/50">
                             <User className="text-space-violet w-5 h-5" />
                         </div>
                         <div>
                             <p className="text-sm font-mono text-white break-all">{vynaaUserProfile.name || 'User'}</p>
                             <p className="text-xs font-mono text-gray-400 capitalize">{vynaaUserProfile.status || 'Active'}</p>
                         </div>
                     </div>
                     <div className="text-right flex sm:flex-col gap-4 sm:gap-1 items-center sm:items-end w-full sm:w-auto overflow-hidden">
                        <div className="flex items-center gap-1 text-xs font-mono text-space-cyan bg-space-cyan/10 px-2 py-1 rounded">
                           <Activity className="w-3 h-3" /> API Limit: {vynaaUserProfile.limit}
                        </div>
                     </div>
                  </div>
              )}
            </div>

            {/* SumoPod Config */}
            <div className="space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <label className="flex items-center gap-2 text-space-cyan font-mono font-bold">
                  <Key className="w-4 h-4" /> SumoPod API Key
                </label>
                <div className="flex items-center gap-2">
                  <StatusPill status={sumoStatus} />
                  <GlowButton variant="ghost" size="sm" onClick={testSumo} disabled={!localSumo || sumoStatus === 'checking'} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                    Test Key
                  </GlowButton>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">Dapatkan dari platform provider SumoPod AI. Pastikan format <code>sk-...</code></p>
              
              <div className="relative">
                <input 
                  type={showSumo ? "text" : "password"} 
                  value={localSumo}
                  onChange={(e) => setLocalSumo(e.target.value)}
                  placeholder="sk-..."
                  className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono pr-20"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400">
                  <GlowButton variant="ghost" size="icon" onClick={() => setLocalSumo('')} className="p-1 hover:text-red-400 text-gray-400 rounded-md"><XCircle size={18} /></GlowButton>
                  <GlowButton variant="ghost" size="icon" onClick={() => setShowSumo(!showSumo)} className="p-1 hover:text-white text-gray-400 rounded-md">{showSumo ? <EyeOff size={18} /> : <Eye size={18} />}</GlowButton>
                </div>
              </div>
            </div>

            {/* AI Model Selection */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <label className="flex items-center gap-2 text-white font-mono font-bold">
                <Cpu className="w-4 h-4" /> SumoPod Active Model
              </label>
              <div className="relative">
                <select 
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-space-navy/50 border border-white/20 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono"
                >
                  {SUMOPOD_MODELS.map(model => (
                    <option key={model} value={model} className="bg-space-dark">{model}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </div>
              </div>
            </div>

            <GlowButton 
              onClick={handleSave}
              className="w-full mt-4 !font-bold"
            >
              <Save className="w-5 h-5" /> 
              SAVE CONFIGURATION
            </GlowButton>
          </div>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
