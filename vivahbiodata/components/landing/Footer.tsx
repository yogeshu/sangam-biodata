import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-light dark:bg-background-dark border-t border-border-soft">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart size={22} fill="currentColor" />
              </div>
              <h3 className="text-text-main dark:text-gray-100 text-2xl font-bold">VivahBio</h3>
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400 max-w-sm leading-relaxed mb-4">
              Create beautiful marriage biodata in minutes. Professional PDF and Image formats designed for WhatsApp sharing and printing.
            </p>
            <p className="text-xs text-text-muted dark:text-gray-500">
              Made with <Heart size={12} className="inline text-primary fill-primary" /> for families finding their perfect match.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-main dark:text-gray-100 font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Templates', href: '/templates' },
                { label: 'Samples', href: '/samples' },
                { label: 'Create Biodata', href: '/templates' },
                { label: 'About Us', href: '/about' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-text-main dark:text-gray-100 font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'FAQs', href: '/faq' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border-soft dark:border-gray-800">
          <p className="text-sm text-text-muted dark:text-gray-400 font-body">
            © {currentYear} VivahBio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/yogeshu', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/yogeshbhavsarui', label: 'LinkedIn' },
              { icon: ExternalLink, href: 'https://consult.yogeshbhavsar.com/#contact', label: 'Portfolio' },
              { icon: Mail, href: 'mailto:connect@yogeshbhavsar.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') && !href.startsWith('mailto') ? '_blank' : undefined}
                rel={href.startsWith('http') && !href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 rounded-full text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Branding Note */}
        <div className="mt-6 pt-6 border-t border-border-soft/50 dark:border-gray-800/50 text-center">
          <p className="text-xs text-text-muted dark:text-gray-500">
            Trusted by thousands of families | VivahBio.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;