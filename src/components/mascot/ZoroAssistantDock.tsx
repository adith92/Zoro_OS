import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSettingsStore } from '@/store/useStore';
import { ZoroMascot } from './ZoroMascot';
import { Settings, Volume2, VolumeX, MessageSquare, Mic, MicOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ZoroAssistantDock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { 
    zoroMascotState, 
    zoroLastRemark, 
    voiceSettings, 
    setVoiceSettings,
    personalitySettings,
    setPersonalitySettings,
    currentRouteLabel,
    currentToolLabel
  } = useSettingsStore();

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (zoroLastRemark) {
      setShowBubble(true);
      const t = setTimeout(() => setShowBubble(false), 5000);
      return () => clearTimeout(t);
    }
  }, [zoroLastRemark]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-64 spaceship-panel rounded-2xl p-4 shadow-2xl origin-bottom-right"
          >
            <div className="text-space-cyan font-bold mb-2 flex items-center justify-between">
              <span>Zoro_System</span>
              <span className="text-[10px] bg-space-cyan/20 px-2 py-0.5 rounded text-space-cyan">Online</span>
            </div>
            
            {zoroLastRemark && (
              <div className="bg-black/40 border border-white/5 rounded-lg p-3 text-xs text-gray-300 italic mb-3">
                "{zoroLastRemark}"
              </div>
            )}

            <div className="space-y-2 mb-3">
              <div className="text-[10px] text-gray-500 uppercase flex justify-between">
                <span>Location:</span>
                <span className="text-space-starlight">{currentRouteLabel || 'Bridge'}</span>
              </div>
              {currentToolLabel && (
                <div className="text-[10px] text-gray-500 uppercase flex justify-between line-clamp-1">
                  <span>Tool:</span>
                  <span className="text-space-violet truncate ml-2">{currentToolLabel}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2 justify-between border-t border-white/10 pt-3">
              <button 
                onClick={() => setVoiceSettings({ voiceEnabled: !voiceSettings.voiceEnabled })}
                className={`p-2 rounded-lg transition-colors ${voiceSettings.voiceEnabled ? 'bg-space-cyan/20 text-space-cyan' : 'bg-white/5 text-gray-400'}`}
                aria-label="Toggle Voice"
              >
                {voiceSettings.voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              
              <button 
                onClick={() => setPersonalitySettings({ contextualRemarksEnabled: !personalitySettings.contextualRemarksEnabled })}
                className={`p-2 rounded-lg transition-colors ${personalitySettings.contextualRemarksEnabled ? 'bg-space-violet/20 text-space-violet' : 'bg-white/5 text-gray-400'}`}
                aria-label="Toggle Remarks"
              >
                {personalitySettings.contextualRemarksEnabled ? <MessageSquare size={16} /> : <MessageSquare size={16} className="opacity-50" />}
              </button>

              <button 
                onClick={() => { setIsOpen(false); navigate('/chat'); }}
                className="p-2 rounded-lg bg-white/5 hover:bg-space-cyan/20 text-space-starlight transition-colors"
                aria-label="Open Chat"
              >
                 <MessageSquare size={16} />
              </button>

              <button 
                onClick={() => { setIsOpen(false); navigate('/settings'); }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-space-starlight transition-colors"
                aria-label="Settings"
              >
                <Settings size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ZoroMascot 
        size="md" 
        state={zoroMascotState} 
        onClick={() => setIsOpen(!isOpen)}
        showSpeechBubble={showBubble && !isOpen}
        remark={zoroLastRemark}
        className="hover:scale-110 transition-transform"
      />
    </div>
  );
};
