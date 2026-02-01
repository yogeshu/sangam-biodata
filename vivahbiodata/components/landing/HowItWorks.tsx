import React from 'react';
import { FileText, Grid3X3, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: FileText, title: '1. Enter Details', desc: 'Add personal, family, and horoscope details easily.' },
    { icon: Grid3X3, title: '2. Select Template', desc: 'Choose from 10+ premium designs crafted for readability.' },
    { icon: Download, title: '3. Download PDF', desc: 'Get a high-quality PDF ready to share on WhatsApp.' },
  ];

  return (
    <div className="w-full max-w-[960px] px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-main dark:text-background-light mb-4">How it works</h2>
        <p className="text-text-muted dark:text-gray-300 font-body">Generate a beautiful biodata in 3 simple steps</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border-strong dark:bg-border-soft/30 -z-0 transform scale-x-75"></div>
        
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
          <div key={idx} className="flex flex-col items-center text-center gap-4 relative z-10">
            <div className={`size-16 rounded-full flex items-center justify-center shadow-lg mb-2 ${idx === 0 ? 'bg-primary text-background-dark' : 'bg-white dark:bg-midnight-accent border-2 border-primary text-primary'}`}>
              <IconComponent size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-main dark:text-background-light">{step.title}</h3>
              <p className="text-sm text-text-muted dark:text-gray-300 mt-2 font-body">{step.desc}</p>
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;