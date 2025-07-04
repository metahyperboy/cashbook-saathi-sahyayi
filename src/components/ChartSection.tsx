
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ChartSection: React.FC = () => {
  // Sample data for charts
  const monthlyData = [
    { month: 'Jan/ജനു', income: 45000, expense: 35000 },
    { month: 'Feb/ഫെബ്', income: 52000, expense: 38000 },
    { month: 'Mar/മാർ', income: 48000, expense: 42000 },
    { month: 'Apr/ഏപ്', income: 61000, expense: 45000 },
    { month: 'May/മേയ്', income: 55000, expense: 40000 },
    { month: 'Jun/ജൂൺ', income: 67000, expense: 43000 },
  ];

  const trendData = [
    { day: 1, profit: 2000 },
    { day: 5, profit: 3500 },
    { day: 10, profit: 2800 },
    { day: 15, profit: 4200 },
    { day: 20, profit: 3800 },
    { day: 25, profit: 5100 },
    { day: 30, profit: 4600 },
  ];

  const pieData = [
    { name: 'Profit/ലാഭം', value: 24000, color: '#10B981' },
    { name: 'Expenses/ചെലവ്', value: 43000, color: '#EF4444' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Analytics</h2>
        <p className="text-gray-600">സാമ്പത്തിക വിശകലനം</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Monthly Income vs Expense Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Overview / മാസിക അവലോകനം
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar dataKey="income" fill="#10B981" name="Income/വരുമാനം" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill="#EF4444" name="Expense/ചെലവ്" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 30-day Profit Trend Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            30-Day Trend / 30-ദിവസ ട്രെൻഡ്
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                formatter={(value) => [`₹${value.toLocaleString()}`, 'Profit/ലാഭം']}
                labelFormatter={(label) => `Day ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Profit/Loss Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Current Month Breakdown / നിലവിലെ മാസ വിഭജനം
        </h3>
        <div className="flex justify-center">
          <ResponsiveContainer width={400} height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
