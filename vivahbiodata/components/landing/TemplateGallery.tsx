import React from 'react';

const TemplateGallery = () => {
  const templates = [
    { title: 'Traditional Red', desc: 'Classic layout with auspicious symbols.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC', alt: 'Traditional red marriage biodata' },
    { title: 'Modern Minimal', desc: 'Clean lines for a professional look.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91', alt: 'Modern minimalist marriage biodata' },
    { title: 'Floral Gold', desc: 'Elegant floral borders for a soft touch.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV', alt: 'Floral gold marriage biodata' },
  ];

  return (
    <div className="w-full bg-slate-900 dark:bg-slate-800 py-16 transition-colors">
      <div className="max-w-[960px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h2 className="text-white dark:text-gray-100 text-3xl md:text-4xl font-bold leading-tight">
              Select from premium templates
            </h2>
            <p className="text-gray-300 dark:text-gray-400 text-base font-body">
              Choose a design that reflects your personality and tradition. From classic auspicious reds to modern minimal styles.
            </p>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 px-5 border border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 transition-colors text-sm font-bold w-fit whitespace-nowrap">
            View all templates
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div 
                className="w-full aspect-[3/4] bg-cover bg-top rounded-lg shadow-md mb-4 group-hover:shadow-xl transition-shadow border border-gray-600 overflow-hidden" 
                data-alt={template.alt} 
                style={{ backgroundImage: `url("${template.img}")` }}
              ></div>
              <div>
                <h3 className="text-gray-100 dark:text-gray-200 text-lg font-bold group-hover:text-primary transition-colors">{template.title}</h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm font-body">{template.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;