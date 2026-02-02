import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, Send, ExternalLink, Linkedin, Github, Heart } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | sangam-biodata',
  description: 'Get in touch with sangam-biodata team for support, feedback, or questions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-white dark:bg-background-dark shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-primary">Contact Us</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help make your biodata creation experience smooth and successful.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <div className="bg-white rounded-xl border border-border-soft p-6 md:p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">Email</h3>
            </div>
            <p className="text-text-muted mb-4 text-sm">
              For inquiries, feedback, or support.
            </p>
            <a
              href="mailto:connect@yogeshbhavsar.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm group"
            >
              connect@yogeshbhavsar.com
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="mt-4 pt-4 border-t border-border-soft">
              <p className="text-xs text-text-muted">
                📧 We respond within 24-48 hours
              </p>
            </div>
          </div>

          {/* Portfolio */}
          <div className="bg-white rounded-xl border border-border-soft p-6 md:p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">Portfolio</h3>
            </div>
              <p className="text-text-muted mb-4 text-sm">
              Learn more about who built sangam-biodata.
            </p>
            <a
              href="https://consult.yogeshbhavsar.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
            >
              Visit Portfolio
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* FAQ Quick Link */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text-main mb-3">
              Looking for Quick Answers?
            </h3>
            <p className="text-text-muted mb-6">
              Check our FAQ section for instant answers to common questions about creating biodatas, templates, downloads, and more.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
            >
              Browse FAQs
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-midnight-accent rounded-xl border border-border-soft p-8 shadow-sm mb-12">
          <h3 className="text-xl font-bold text-text-main text-center mb-6">
            Connect on Social Media
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialLink
              href="https://github.com/yogeshu"
              icon={<Github size={20} />}
              label="GitHub"
              color="bg-gray-100 text-gray-700 hover:bg-gray-200"
            />
            <SocialLink
              href="https://linkedin.com/in/yogeshbhavsarui"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              color="bg-blue-100 text-blue-700 hover:bg-blue-200"
            />
            <SocialLink
              href="https://consult.yogeshbhavsar.com/#contact"
              icon={<ExternalLink size={20} />}
              label="Portfolio"
              color="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            />
          </div>
          <p className="text-center text-xs text-text-muted mt-6">
            Follow for updates, tips, and new features!
          </p>
        </div>

        {/* Common Topics */}
        <div className="bg-white dark:bg-midnight-accent rounded-xl border border-border-soft p-8 shadow-sm">
          <h3 className="text-xl font-bold text-text-main mb-6">
            What Can We Help You With?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Technical Issues', desc: 'Problems with downloads, editing, or features' },
              { title: 'Template Questions', desc: 'Help choosing or customizing templates' },
              { title: 'Account & Privacy', desc: 'Data security, account management' },
              { title: 'Suggestions', desc: 'Feature requests and feedback' },
              { title: 'Partnerships', desc: 'Business collaborations and integrations' },
              { title: 'General Inquiries', desc: 'Any other questions or concerns' },
            ].map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-3 p-4 rounded-lg border border-border-soft hover:border-primary/50 transition"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold text-text-main text-sm">{topic.title}</p>
                  <p className="text-xs text-text-muted mt-1">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-text-muted text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for families finding their perfect match</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-semibold text-sm ${color}`}
    >
      {icon}
      {label}
    </a>
  );
}
