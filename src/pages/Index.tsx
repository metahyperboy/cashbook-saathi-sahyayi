import React from 'react';
import { ChartBar, Mic, Box, Handshake, Calculator, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import FinancialSummaryCard from '@/components/FinancialSummaryCard';
import FeatureCard from '@/components/FeatureCard';
import ChartSection from '@/components/ChartSection';
import VoiceAssistant from '@/components/VoiceAssistant';

const Index = () => {
  const userName = "രാജു"; // Sample user name in Malayalam

  const handleFeatureClick = (feature: string) => {
    console.log(`Clicked on ${feature}`);
    // Here you would navigate to different pages
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl gradient-blue-green">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xl">📖</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-blue-green bg-clip-text text-transparent">
                  CashBook
                </h1>
                <p className="text-sm text-gray-600">Your Financial Companion</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">Hi {userName}!</p>
              <p className="text-sm text-gray-600">നമസ്കാരം!</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Financial Summary Cards */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Summary</h2>
            <p className="text-gray-600">സാമ്പത്തിക സംഗ്രഹം</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FinancialSummaryCard
              title="Income"
              malayalamTitle="വരുമാനം"
              amount="67,000"
              type="income"
              icon={<TrendingUp className="w-6 h-6" />}
            />
            <FinancialSummaryCard
              title="Expense"
              malayalamTitle="ചെലവ്"
              amount="43,000"
              type="expense"
              icon={<TrendingDown className="w-6 h-6" />}
            />
            <FinancialSummaryCard
              title="Profit"
              malayalamTitle="ലാഭം"
              amount="24,000"
              type="profit"
              icon={<DollarSign className="w-6 h-6" />}
            />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Main Features</h2>
            <p className="text-gray-600">പ്രധാന സവിശേഷതകൾ</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <FeatureCard
              title="Dashboard"
              malayalamTitle="ഡാഷ്ബോർഡ്"
              icon={<ChartBar className="w-8 h-8" />}
              onClick={() => handleFeatureClick('dashboard')}
            />
            <FeatureCard
              title="Voice Assistant"
              malayalamTitle="വോയ്സ് അസിസ്റ്റന്റ്"
              icon={<Mic className="w-8 h-8" />}
              onClick={() => handleFeatureClick('voice')}
            />
            <FeatureCard
              title="Inventory"
              malayalamTitle="ഇൻവെന്ററി"
              icon={<Box className="w-8 h-8" />}
              onClick={() => handleFeatureClick('inventory')}
            />
            <FeatureCard
              title="Borrow"
              malayalamTitle="കടം"
              icon={<Handshake className="w-8 h-8" />}
              onClick={() => handleFeatureClick('borrow')}
            />
            <FeatureCard
              title="Net Income Calculator"
              malayalamTitle="നെറ്റ് ഇൻകം കാൽക്കുലേറ്റർ"
              icon={<Calculator className="w-8 h-8" />}
              onClick={() => handleFeatureClick('calculator')}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <ChartSection />
        </section>

        {/* Recent Transactions Preview */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
                <p className="text-sm text-gray-600">സമീപകാല ഇടപാടുകൾ</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-white gradient-blue-green rounded-lg hover:scale-105 transition-transform duration-200">
                  All
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Income
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Expense
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { type: 'Income', amount: '+₹2,500', date: 'Today', voice: true, description: 'Sale to Customer' },
                { type: 'Expense', amount: '-₹800', date: 'Yesterday', voice: false, description: 'Shop Supplies' },
                { type: 'Income', amount: '+₹1,200', date: '2 days ago', voice: true, description: 'Product Sale' },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${transaction.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {transaction.type === 'Income' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {transaction.voice && (
                      <div className="p-1 bg-blue-100 rounded-full">
                        <Mic className="w-3 h-3 text-blue-600" />
                      </div>
                    )}
                    <span className={`font-semibold ${transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Voice Assistant Widget */}
      <VoiceAssistant />
    </div>
  );
};

export default Index;
