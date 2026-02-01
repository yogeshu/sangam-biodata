import React from 'react';
import { Lock, Users, Handshake } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Lock, title: 'Private & Secure', desc: 'Your data is never made public. Only you control sharing.' },
    { icon: Users, title: 'Community Approved', desc: 'Formats designed keeping traditional values in mind.' },
    { icon: Handshake, title: 'Serious Inquiries', desc: 'A tool strictly for marriage, not a dating app.' },
  ];

  return (
    <div className="w-full bg-white dark:bg-background-dark border-y border-border-soft dark:border-border-soft/30 transition-colors">
      <div className="max-w-[960px] mx-auto px-4 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex flex-col gap-2 max-w-[300px]">
            <h3 className="text-2xl font-bold text-text-main dark:text-background-light">Why families trust us</h3>
            <p className="text-text-muted dark:text-gray-300 text-sm font-body">We understand that privacy is paramount when looking for a life partner.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
              <div key={idx} className="flex flex-col gap-3 p-4 rounded-lg bg-background-light dark:bg-midnight-accent border border-border-soft dark:border-border-soft/30">
                <div className="text-primary">
                  <IconComponent size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-background-light text-base">{feature.title}</h4>
                  <p className="text-text-muted dark:text-gray-300 text-sm mt-1 font-body">{feature.desc}</p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;