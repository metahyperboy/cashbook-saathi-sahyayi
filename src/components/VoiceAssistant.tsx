
import React, { useState } from 'react';
import { Microphone } from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    console.log('Voice assistant toggled:', !isListening);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulse animation when listening */}
        {isListening && (
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></div>
        )}
        
        {/* Main voice button */}
        <button
          onClick={handleVoiceToggle}
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 scale-110' 
              : 'gradient-blue-green hover:scale-105'
          }`}
        >
          <Microphone 
            className={`w-6 h-6 text-white ${isListening ? 'animate-pulse' : ''}`}
          />
        </button>
        
        {/* Activation indicator */}
        {isListening && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg border">
            <p className="text-xs font-medium text-gray-700">Listening...</p>
            <p className="text-xs text-gray-500">Say "Hey CashBook"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
