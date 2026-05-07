import React, { useState, useEffect } from 'react';
import { VynaaEndpoint } from '@/types/vynaa';
import { callVynaaEndpoint } from '@/api/universalVynaa';
import { VYNAA_ENDPOINTS } from '@/data/vynaaRegistry';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';
import { EndpointForm } from '@/components/ui/EndpointForm';
import { ToolResultViewer } from '@/components/ui/ToolResultViewer';
import { Box, Code } from 'lucide-react';
import { toast } from 'sonner';

import { useSettingsStore } from '@/store/useStore';

interface UniversalToolPageProps {
  category: string;
  title: string;
  icon: any;
}

export function UniversalToolPage({ category, title, icon: Icon }: UniversalToolPageProps) {
  const [selectedTool, setSelectedTool] = useState<VynaaEndpoint | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { addEndpointHistory, addZoroAction, setCurrentToolContext, setZoroMascotState } = useSettingsStore();

  const tools = VYNAA_ENDPOINTS.filter(e => e.category === category && e.safe && e.enabledByDefault);

  useEffect(() => {
    // Whenever category changes, clear selection
    setSelectedTool(null);
    setResult(null);
    setCurrentToolContext('', '');
  }, [category]);

  const handleToolSelect = (tool: VynaaEndpoint) => {
    setSelectedTool(tool); 
    setResult(null);
    setCurrentToolContext(tool.label, tool.category);
    
    addZoroAction({
      type: "tool_open",
      toolId: tool.id,
      timestamp: new Date().toISOString()
    });
  };

  const handleSubmit = async (data: Record<string, any>) => {
    if (!selectedTool) return;
    setIsLoading(true);
    setResult(null);
    setZoroMascotState("thinking");

    addZoroAction({
      type: "tool_run",
      toolId: selectedTool.id,
      timestamp: new Date().toISOString()
    });

    try {
      const res = await callVynaaEndpoint(selectedTool, data);
      addEndpointHistory(res);
      if (res && res.ok !== false && (res as any).status !== false) {
          setResult(res);
          toast.success(`${selectedTool.label} executed successfully`);
          setZoroMascotState("excited");
          addZoroAction({
            type: "tool_success",
            toolId: selectedTool.id,
            timestamp: new Date().toISOString()
          });
      } else {
          toast.error(res.error || (res.data as any)?.message || "Failed to process request");
          setResult(res);
          setZoroMascotState("error");
          addZoroAction({
            type: "tool_error",
            toolId: selectedTool.id,
            timestamp: new Date().toISOString()
          });
      }
    } catch (err: any) {
      toast.error(err.message || 'An error occurred during execution');
      setZoroMascotState("error");
      addZoroAction({
        type: "tool_error",
        toolId: selectedTool.id,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsLoading(false);
      // fallback to idle after a few seconds if no speech is triggered? The voice synthesis handles mostly "idle".
      setTimeout(() => {
        setZoroMascotState("idle");
      }, 5000);
    }
  };

  return (
    <PageTransition className="flex-1 overflow-y-auto cyber-scrollbar p-4 sm:p-8 relative z-10 w-full h-full flex flex-col">
      <div className="max-w-6xl mx-auto space-y-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-space-cyan/20 border border-space-cyan flex items-center justify-center">
            <Icon className="w-6 h-6 text-space-cyan" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-mono text-space-starlight">{title}</h1>
            <p className="text-sm text-gray-400 font-mono tracking-widest">{tools.length} MODULES DETECTED</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-3 max-h-[60vh] overflow-y-auto cyber-scrollbar pr-2">
                {tools.map(tool => (
                    <button
                        key={tool.id}
                        onClick={() => handleToolSelect(tool)}
                        className={`w-full text-left p-4 rounded-xl transition-all font-mono shadow-sm group border ${selectedTool?.id === tool.id ? 'bg-space-cyan/20 border-space-cyan text-space-cyan' : 'bg-space-dark/60 border-white/5 text-gray-400 hover:bg-space-cyan/10 hover:border-space-cyan/30'}`}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            {selectedTool?.id === tool.id ? <Code className="w-4 h-4 text-space-cyan animate-pulse" /> : <Box className="w-4 h-4 group-hover:text-space-cyan transition-colors" />}
                            <span className="font-bold text-sm tracking-wide group-hover:text-white transition-colors">{tool.label}</span>
                        </div>
                        <p className="text-xs opacity-70 truncate" title={tool.description}>{tool.description}</p>
                    </button>
                ))}
            </div>
            
            <div className="lg:col-span-2">
                {selectedTool ? (
                    <GlassCard className="p-6">
                        <div className="mb-6 border-b border-white/10 pb-4">
                            <h2 className="text-xl font-bold font-mono text-white mb-2">{selectedTool.label}</h2>
                            <p className="text-sm text-gray-400 font-mono">{selectedTool.description}</p>
                        </div>
                        
                        <EndpointForm 
                            endpoint={selectedTool} 
                            onSubmit={handleSubmit} 
                            isLoading={isLoading} 
                        />
                        
                        <ToolResultViewer 
                            endpoint={selectedTool} 
                            result={result} 
                        />
                    </GlassCard>
                ) : (
                    <div className="h-full min-h-[300px] flex items-center justify-center p-8 border border-dashed border-white/10 rounded-2xl bg-space-dark/30">
                        <p className="text-gray-500 font-mono text-center text-sm">Select a module from the left panel to initialize.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </PageTransition>
  );
}
