import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VtechEndpoint } from '@/types/vtech';
import { callVtechEndpoint } from '@/api/universalVtech';
import { VTECH_ENDPOINTS } from '@/data/vtechRegistry';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';
import { EndpointForm } from '@/components/ui/EndpointForm';
import { ToolResultViewer } from '@/components/ui/ToolResultViewer';
import { Box, Code, Star } from 'lucide-react';
import { toast } from 'sonner';

import { useSettingsStore } from '@/store/useStore';

interface UniversalToolPageProps {
  category: string;
  title: string;
  icon: any;
}

export function UniversalToolPage({ category, title, icon: Icon }: UniversalToolPageProps) {
  const navigate = useNavigate();
  const [selectedTool, setSelectedTool] = useState<VtechEndpoint | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { addEndpointHistory, addZoroAction, setCurrentToolContext, setZoroMascotState, favoriteEndpointIds, toggleFavoriteEndpoint } = useSettingsStore();

  const tools = VTECH_ENDPOINTS.filter(e => e.category === category && e.safe && e.enabledByDefault);

  useEffect(() => {
    // Whenever category changes, clear selection
    setSelectedTool(null);
    setResult(null);
    setCurrentToolContext('', '');
  }, [category]);

  const handleToolSelect = (tool: VtechEndpoint) => {
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
      const res = await callVtechEndpoint(selectedTool, data);
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
                {tools.map((tool, idx) => (
                    <button
                        key={`tool_${tool.id}_${idx}`}
                        onClick={() => handleToolSelect(tool)}
                        className={`w-full text-left p-4 rounded-xl transition-all font-mono shadow-sm group border ${selectedTool?.id === tool.id ? 'bg-space-cyan/20 border-space-cyan text-space-cyan' : 'bg-space-dark/60 border-white/5 text-gray-400 hover:bg-space-cyan/10 hover:border-space-cyan/30'}`}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            {selectedTool?.id === tool.id ? <Code className="w-4 h-4 text-space-cyan animate-pulse shrink-0" /> : <Box className="w-4 h-4 group-hover:text-space-cyan transition-colors shrink-0" />}
                            <span className="font-bold text-sm tracking-wide group-hover:text-white transition-colors truncate flex-1">{tool.label}</span>
                            {favoriteEndpointIds.includes(tool.id) && <Star className="w-3 h-3 text-yellow-400 shrink-0" fill="currentColor" />}
                        </div>
                        <p className="text-xs opacity-70 truncate" title={tool.description}>{tool.description}</p>
                    </button>
                ))}
            </div>
            
            <div className="lg:col-span-2">
                {selectedTool ? (
                    <GlassCard className="p-6">
                        <div className="mb-6 border-b border-white/10 pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h2 className="text-xl font-bold font-mono text-white">{selectedTool.label}</h2>
                              <button 
                                onClick={() => {
                                  toggleFavoriteEndpoint(selectedTool.id);
                                  toast.success(favoriteEndpointIds.includes(selectedTool.id) ? 'Removed from Favorites' : 'Added to Favorites');
                                  addZoroAction({
                                    type: favoriteEndpointIds.includes(selectedTool.id) ? "tool_success" : "tool_open",
                                    toolId: selectedTool.id,
                                    timestamp: new Date().toISOString(),
                                    toolLabel: favoriteEndpointIds.includes(selectedTool.id) ? "Removed from Favorites" : "Added to Favorites"
                                  } as any);
                                }}
                                className={`p-1.5 rounded-lg transition-colors border ${favoriteEndpointIds.includes(selectedTool.id) ? 'bg-yellow-400/20 border-yellow-400/50 text-yellow-400' : 'bg-white/5 border-white/10 text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30'}`}
                                title={favoriteEndpointIds.includes(selectedTool.id) ? "Remove from Favorites" : "Add to Favorites"}
                              >
                                <Star className="w-4 h-4" fill={favoriteEndpointIds.includes(selectedTool.id) ? "currentColor" : "none"} />
                              </button>
                            </div>
                            <p className="text-sm text-gray-400 font-mono mb-4">{selectedTool.description}</p>
                            
                            {category === 'ai' && (
                                <button 
                                    onClick={() => {
                                        useSettingsStore.getState().setSelectedVtechAiEndpointId(selectedTool.id);
                                        toast.success(`${selectedTool.label} dipakai sebagai model Chat`);
                                        navigate('/chat');
                                    }}
                                    className="px-3 py-1 bg-space-violet/20 hover:bg-space-violet/40 border border-space-violet text-space-violet text-xs font-mono rounded-lg transition-colors"
                                >
                                    Use this model in Chat {selectedTool.id.toLowerCase().includes('simsimi') ? '(Fun)' : ''}
                                </button>
                            )}
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
