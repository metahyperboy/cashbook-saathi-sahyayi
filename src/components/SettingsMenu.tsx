
import React from 'react';
import { Calculator, Globe, User, Download, Sliders, X } from 'lucide-react';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCalculatorClick: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ isOpen, onClose, onCalculatorClick }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: Calculator, label: 'Calculator', malayalam: 'കാൽക്കുലേറ്റർ', onClick: onCalculatorClick },
    { icon: Globe, label: 'Language', malayalam: 'ഭാഷ', onClick: () => console.log('Language settings') },
    { icon: User, label: 'Profile', malayalam: 'പ്രൊഫൈൽ', onClick: () => console.log('Profile settings') },
    { icon: Download, label: 'Export Data', malayalam: 'ഡാറ്റ എക്സ്പോർട്ട്', onClick: () => console.log('Export data') },
    { icon: Sliders, label: 'Preferences', malayalam: 'മുൻഗണനകൾ', onClick: () => console.log('App preferences') },
  ];

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Menu */}
      <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg border border-gray-200 w-64">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.malayalam}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
