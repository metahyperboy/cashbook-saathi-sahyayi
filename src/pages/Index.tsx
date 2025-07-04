
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import CompactHeader from '@/components/CompactHeader';
import CompactFinancialCard from '@/components/CompactFinancialCard';
import RecentTransactions from '@/components/RecentTransactions';
import BottomNavigation from '@/components/BottomNavigation';
import VoiceAssistant from '@/components/VoiceAssistant';
import SettingsMenu from '@/components/SettingsMenu';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const userName = "രാജു";

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switched to ${tab} tab`);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleCalculatorClick = () => {
    console.log('Calculator clicked');
    setIsSettingsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* Compact Header */}
      <CompactHeader userName={userName} onSettingsClick={handleSettingsClick} />

      {/* Main Content */}
      <main className="flex-1 pb-20 overflow-y-auto">
        {/* Financial Summary Cards */}
        <section className="p-4">
          <div className="flex space-x-3">
            <CompactFinancialCard
              title="Income"
              malayalamTitle="വരുമാനം"
              amount="67,000"
              type="income"
              icon={<TrendingUp />}
            />
            <CompactFinancialCard
              title="Expense"
              malayalamTitle="ചെലവ്"
              amount="43,000"
              type="expense"
              icon={<TrendingDown />}
            />
            <CompactFinancialCard
              title="Profit"
              malayalamTitle="ലാഭം"
              amount="24,000"
              type="profit"
              icon={<DollarSign />}
            />
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="flex-1">
          <RecentTransactions onCalculatorClick={handleCalculatorClick} />
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Voice Assistant Widget */}
      <VoiceAssistant />

      {/* Settings Menu */}
      <SettingsMenu 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        onCalculatorClick={handleCalculatorClick}
      />
    </div>
  );
};

export default Index;
