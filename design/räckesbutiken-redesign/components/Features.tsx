import React from 'react';
import { ShieldCheck, Ruler, Hammer, Truck } from 'lucide-react';
import { USP_FEATURES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-brand-600" />,
  Ruler: <Ruler className="h-6 w-6 text-brand-600" />,
  Hammer: <Hammer className="h-6 w-6 text-brand-600" />,
  Truck: <Truck className="h-6 w-6 text-brand-600" />,
};

const Features: React.FC = () => {
  return (
    <div className="bg-white py-16 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {USP_FEATURES.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center sm:items-start sm:text-left p-4 rounded-2xl hover:bg-stone-50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-xl mb-4">
                  {iconMap[feature.icon as string]}
                </div>
                <h3 className="text-lg font-bold text-stone-900 tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Features;