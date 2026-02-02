'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Search, FileText, Download, Edit, Shield, CreditCard } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: <FileText size={20} />,
      questions: [
        {
          q: 'What is sangam-biodata?',
          a: 'sangam-biodata is an online platform that helps you create professional marriage biodata in minutes. Choose from beautiful templates, fill in your details, and download a high-quality PDF ready to share with prospective families.',
        },
        {
          q: 'How do I create a biodata?',
          a: 'Simply click "Get Started" or "Create Biodata", select a template you like, fill in your personal, family, and partner preference details across the easy-to-follow steps, preview your biodata, and download it as a PDF or image.',
        },
        {
          q: 'Do I need to create an account?',
          a: 'No account is required for basic biodata creation. However, creating an account (optional) allows you to save drafts, edit later, and access your biodatas from any device.',
        },
        {
          q: 'Is sangam-biodata free to use?',
          a: 'Yes! sangam-biodata is completely free to use. You can create, preview, and download your biodata at no cost. Premium templates with advanced designs are also included at no charge.',
        },
      ],
    },
    {
      category: 'Templates & Customization',
      icon: <Edit size={20} />,
      questions: [
        {
          q: 'How many templates are available?',
          a: 'We offer 10+ professionally designed templates ranging from traditional to modern styles. Each template comes with multiple color themes, allowing you to personalize your biodata to match your preferences.',
        },
        {
          q: 'Can I change the template after creating my biodata?',
          a: 'Absolutely! You can switch templates anytime before downloading. Your information will automatically adjust to the new template design.',
        },
        {
          q: 'Can I customize colors and fonts?',
          a: 'Each template offers 3-4 pre-designed color themes carefully chosen by our designers. While custom fonts aren\'t available, our templates use elegant, readable fonts optimized for both screen and print.',
        },
        {
          q: 'Can I add my photo?',
          a: 'Yes! You can add up to 2 photos to your biodata. Photos are optional but recommended. Make sure to use clear, appropriate photos with good lighting.',
        },
      ],
    },
    {
      category: 'Download & Sharing',
      icon: <Download size={20} />,
      questions: [
        {
          q: 'What formats can I download my biodata in?',
          a: 'You can download your biodata as a high-quality PDF (best for printing and sharing) or as a PNG image (great for WhatsApp and social media).',
        },
        {
          q: 'Why is the download not working?',
          a: 'Common issues include browser pop-up blockers or outdated browsers. Try disabling pop-up blockers, use a modern browser (Chrome, Firefox, Safari), clear your browser cache, or try downloading in a different format. If problems persist, contact our support team.',
        },
        {
          q: 'How can I share my biodata on WhatsApp?',
          a: 'After downloading your biodata PDF or image, you can directly share it on WhatsApp like any other file. We also provide a "Share on WhatsApp" button for quick sharing with a message.',
        },
        {
          q: 'Can I edit my biodata after downloading?',
          a: 'Yes! Your biodata data is saved (in browser or account), so you can return anytime to make changes and download an updated version. Previously downloaded versions won\'t automatically update.',
        },
        {
          q: 'Is there a watermark on the downloaded biodata?',
          a: 'A small "sangam-biodata.com" watermark appears at the bottom of your biodata. This is discreet and helps others discover our service. The watermark doesn\'t interfere with your information.',
        },
      ],
    },
    {
      category: 'Privacy & Security',
      icon: <Shield size={20} />,
      questions: [
        {
          q: 'Is my personal information safe?',
          a: 'Absolutely. We take privacy seriously. Your data is stored securely using industry-standard encryption. We never sell or share your information with third parties. Read our Privacy Policy for complete details.',
        },
        {
          q: 'Who can see my biodata?',
          a: 'Only you can access your biodata on our platform. Once you download it, you control who sees it. We don\'t display, share, or publish your biodata publicly.',
        },
        {
          q: 'Can I delete my biodata and data?',
          a: 'Yes! You can delete your saved biodatas and account data anytime. If you\'re not using an account, you can clear your browser data. Contact us if you need assistance with data deletion.',
        },
      ],
    },
    {
      category: 'Technical Issues',
      icon: <HelpCircle size={20} />,
      questions: [
        {
          q: 'Why can\'t I see my uploaded photo?',
          a: 'Ensure your image is in JPG, PNG, or WEBP format and under 5MB. Try a different browser if issues persist. Some ad blockers may interfere with uploads—try disabling them temporarily.',
        },
        {
          q: 'The preview looks different than the download. Why?',
          a: 'Screen previews may appear slightly different due to display settings. The downloaded PDF/image will be optimized for printing and sharing with consistent formatting.',
        },
        {
          q: 'My biodata is showing on multiple pages. How do I fix it?',
          a: 'Our templates are designed to fit on one A4 page. If content overflows, try using the "compact" layout option, removing optional sections, or being more concise with descriptions.',
        },
        {
          q: 'Which browsers work best with sangam-biodata?',
          a: 'sangam-biodata works best on modern browsers: Chrome (recommended), Firefox, Safari, and Edge. Make sure your browser is updated to the latest version for best performance.',
        },
      ],
    },
    {
      category: 'Content & Information',
      icon: <FileText size={20} />,
      questions: [
        {
          q: 'What information should I include?',
          a: 'Include personal details (name, age, height), family information (parents, siblings), education and career, horoscope details (if applicable), and partner preferences. Be honest and concise.',
        },
        {
          q: 'Can I add custom fields?',
          a: 'Yes! You can add up to 5 custom fields to include any additional information important to you that isn\'t covered in standard fields.',
        },
        {
          q: 'Should I include my horoscope details?',
          a: 'Horoscope details are optional and can be toggled on/off. Include them if they\'re important to you and your family tradition. You can skip this section if not relevant.',
        },
        {
          q: 'How do I write good partner preferences?',
          a: 'Be specific but realistic. Include age range, education level, location preferences, and values important to you. Keep it positive and respectful. Avoid being overly restrictive.',
        },
      ],
    },
    {
      category: 'Account & Features',
      icon: <CreditCard size={20} />,
      questions: [
        {
          q: 'What\'s the difference between saved and downloaded biodatas?',
          a: 'Saved biodatas are drafts stored in your browser or account that you can edit anytime. Downloaded biodatas are final PDF/image files saved to your device.',
        },
        {
          q: 'How many biodatas can I create?',
          a: 'You can create as many biodatas as you need! There\'s no limit. This is useful if you\'re helping multiple family members or want to create variations.',
        },
        {
          q: 'Do you offer premium features?',
          a: 'Currently, all features and templates are free! We may introduce optional premium features in the future, but basic biodata creation will always remain free.',
        },
        {
          q: 'Can I use sangam-biodata for commercial purposes?',
          a: 'sangam-biodata is designed for personal use. If you\'re a matchmaker or business interested in using our service commercially, please contact us for partnership opportunities.',
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (faq) =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-soft dark:bg-background-dark shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-primary">FAQs</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about creating biodatas with sangam-biodata.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border-soft focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-muted mb-4">No matching questions found.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary hover:text-primary-dark font-semibold"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-midnight-accent rounded-xl border border-border-soft p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-main">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const currentIndex = globalIndex++;
                    const isOpen = openIndex === currentIndex;

                    return (
                      <div
                        key={qIndex}
                        className="border border-border-soft rounded-lg overflow-hidden transition hover:border-primary/50"
                      >
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-white/50 dark:hover:bg-midnight-accent/50 transition"
                        >
                          <span className="font-semibold text-text-main text-sm md:text-base">
                            {faq.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={20} className="flex-shrink-0 text-primary" />
                          ) : (
                            <ChevronDown size={20} className="flex-shrink-0 text-text-muted" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-sm md:text-base text-text-muted leading-relaxed border-t border-border-soft bg-white/50 dark:bg-midnight-accent/30 pt-4">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-main mb-3">
              Still Have Questions?
            </h3>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
              >
                Contact Support
                <ArrowLeft size={18} className="rotate-180" />
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-midnight-accent text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition font-semibold"
              >
                Create Biodata
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
