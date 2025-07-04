
import React from 'react';

interface CompactHeaderProps {
  userName: string;
}

const CompactHeader: React.FC<CompactHeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 h-15 flex-shrink-0">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl gradient-blue-green">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <span className="text-sm">📖</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-blue-green bg-clip-text text-transparent">
              CashBook
            </h1>
          </div>
        </div>
        <div className="text-right">
          <p className="text-base font-semibold text-gray-900">Hi {userName}!</p>
          <p className="text-xs text-gray-600">ഹായ് {userName}!</p>
        </div>
      </div>
    </header>
  );
};

export default CompactHeader;
