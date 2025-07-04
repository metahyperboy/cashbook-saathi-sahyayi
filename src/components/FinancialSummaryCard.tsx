
import React from 'react';

interface FinancialSummaryCardProps {
  title: string;
  malayalamTitle: string;
  amount: string;
  type: 'income' | 'expense' | 'profit';
  icon: React.ReactNode;
}

const FinancialSummaryCard: React.FC<FinancialSummaryCardProps> = ({
  title,
  malayalamTitle,
  amount,
  type,
  icon
}) => {
  const getGradientClass = () => {
    switch (type) {
      case 'income':
        return 'gradient-income';
      case 'expense':
        return 'gradient-expense';
      case 'profit':
        return 'gradient-profit';
      default:
        return 'gradient-blue-green';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover border border-gray-100">
      <div className={`absolute inset-0 opacity-5 ${getGradientClass()}`}></div>
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${getGradientClass()} text-white shadow-lg`}>
            {icon}
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-xs text-gray-500 mt-1">{malayalamTitle}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-gray-900 text-shadow">₹{amount}</p>
          <p className="text-sm text-gray-600 mt-1">This Month</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummaryCard;
