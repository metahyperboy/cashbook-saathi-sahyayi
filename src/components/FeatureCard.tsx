
import React from 'react';

interface FeatureCardProps {
  title: string;
  malayalamTitle: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  malayalamTitle,
  icon,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg card-hover cursor-pointer border border-gray-100 group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-2xl gradient-blue-green text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{malayalamTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
