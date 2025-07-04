
import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    console.log('Voice assistant toggled:', !isListening);
  };

  return (
    <div className="fixed bottom-20 right-4 z-30">
      <div className="relative">
        {/* Pulse animation when listening */}
        {isListening && (
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></div>
        )}
        
        {/* Main voice button - smaller for mobile */}
        <button
          onClick={handleVoiceToggle}
          className={`relative p-3 rounded-full shadow-lg transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 scale-110' 
              : 'gradient-blue-green hover:scale-105'
          }`}
        >
          <Mic 
            className={`w-5 h-5 text-white ${isListening ? 'animate-pulse' : ''}`}
          />
        </button>
        
        {/* Activation indicator - compact */}
        {isListening && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-lg border">
            <p className="text-xs font-medium text-gray-700">Listening...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
