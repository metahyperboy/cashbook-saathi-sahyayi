
import React from 'react';
import { ChartBar, Mic, Box, Handshake } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard', icon: ChartBar, label: 'Dashboard', malayalam: 'ഡാഷ്ബോർഡ്' },
    { id: 'voice', icon: Mic, label: 'Voice', malayalam: 'വോയ്സ്' },
    { id: 'inventory', icon: Box, label: 'Inventory', malayalam: 'ഇൻവെന്ററി' },
    { id: 'borrow', icon: Handshake, label: 'Borrow', malayalam: 'കടം' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-40">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center min-h-[44px] px-2 py-1 rounded-lg transition-colors flex-1 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-medium mt-1">{tab.label}</span>
              <span className="text-xs text-gray-500">{tab.malayalam}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
