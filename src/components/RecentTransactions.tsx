
import React from 'react';
import { TrendingUp, TrendingDown, Mic } from 'lucide-react';

const RecentTransactions: React.FC = () => {
  const transactions = [
    { type: 'Income', amount: '+₹2,500', date: 'Today', voice: true, description: 'Sale to Customer' },
    { type: 'Expense', amount: '-₹800', date: 'Yesterday', voice: false, description: 'Shop Supplies' },
    { type: 'Income', amount: '+₹1,200', date: '2 days ago', voice: true, description: 'Product Sale' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mx-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent</h3>
          <p className="text-xs text-gray-600">സമീപകാല ഇടപാടുകൾ</p>
        </div>
        <button className="text-xs text-blue-600 font-medium hover:text-blue-700">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className={`p-1.5 rounded-lg ${transaction.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {transaction.type === 'Income' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {transaction.voice && (
                <div className="p-1 bg-blue-100 rounded-full">
                  <Mic className="w-2 h-2 text-blue-600" />
                </div>
              )}
              <span className={`text-sm font-semibold ${transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
