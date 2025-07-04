
import React from 'react';

interface CompactFinancialCardProps {
  title: string;
  malayalamTitle: string;
  amount: string;
  type: 'income' | 'expense' | 'profit';
  icon: React.ReactNode;
}

const CompactFinancialCard: React.FC<CompactFinancialCardProps> = ({
  title,
  malayalamTitle,
  amount,
  type,
  icon
}) => {
  const getColorClass = () => {
    switch (type) {
      case 'income':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'expense':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'profit':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`rounded-xl border p-3 ${getColorClass()} flex-1`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-medium opacity-80">
          <div>{title}</div>
          <div>{malayalamTitle}</div>
        </div>
        <div className="opacity-60">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-4 h-4' })}
        </div>
      </div>
      <div className="text-xl font-bold">₹{amount}</div>
    </div>
  );
};

export default CompactFinancialCard;
