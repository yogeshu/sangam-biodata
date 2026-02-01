import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Cookie } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | VivahBio',
  description: 'Learn how VivahBio protects your personal information and respects your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-primary">Privacy Policy</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Shield size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            At VivahBio, we are committed to protecting your personal information and respecting your privacy.
          </p>
          <p className="text-sm text-text-muted mt-4">
            Last Updated: February 1, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            icon={<Eye size={24} />}
            title="Information We Collect"
          >
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-semibold">
                🔒 Privacy-First: We collect minimal data and respect your privacy completely.
              </p>
            </div>
            <p className="text-text-muted mb-4">
              <strong>No Account Required:</strong>
            </p>
            <p className="text-text-muted">
              VivahBio works without accounts. We do not collect login or authentication details.
            </p>
            <p className="text-text-muted mt-4 mb-4">
              <strong>Biodata Information:</strong>
            </p>
            <p className="text-text-muted mb-4">
              All biodata information you enter (personal details, family info, photos, etc.) is stored <strong>locally in your browser</strong>. We don't analyze, process, or access this information. It's yours and yours alone.
            </p>
            <p className="text-text-muted mt-4 mb-4">
              <strong>Anonymous Usage Analytics:</strong>
            </p>
            <p className="text-text-muted mb-4">
              We use Google Analytics / Google Tag Manager to understand how users interact with our service (page views, button clicks, feature usage). This data is completely anonymous and doesn't include any personal information from your biodata.
            </p>
            <p className="text-text-muted">
              <strong>We do NOT track or collect:</strong> Your biodata content, personal information, names, phone numbers, or any identifiable data.
            </p>
          </Section>

          <Section 
            icon={<Database size={24} />}
            title="How We Use Your Information"
          >
            <p className="text-text-muted mb-4">
              Your information is used <strong>only</strong> for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li><strong>Storage:</strong> Your biodata drafts are stored locally in your browser</li>
              <li><strong>Analytics:</strong> Anonymous usage data (page views, clicks) to improve our service - no personal biodata information is tracked</li>
            </ul>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
              <p className="text-sm text-green-800 font-semibold">
                ✓ We do NOT sell, rent, or share your personal information with anyone, ever.
              </p>
              <p className="text-sm text-green-800 font-semibold">
                ✓ We do NOT track or access your biodata content or personal details.
              </p>
              <p className="text-sm text-green-800 font-semibold">
                ✓ We do NOT send marketing emails or promotional notifications.
              </p>
            </div>
          </Section>

          <Section 
            icon={<Lock size={24} />}
            title="Data Storage and Security"
          >
            <p className="text-text-muted mb-4">
              Your data security matters:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li><strong>Browser Storage:</strong> Your biodata is stored only in your browser's local storage on your device</li>
              <li><strong>No Server-Side Processing:</strong> We don't process or analyze your biodata information on our servers</li>
              <li><strong>You Control Access:</strong> Only you can access your device and data</li>
            </ul>
            <p className="text-text-muted mt-4">
              <strong>Important:</strong> You can clear your browser storage anytime to remove all stored data.
            </p>
          </Section>

          <Section 
            icon={<UserCheck size={24} />}
            title="Your Rights and Choices"
          >
            <p className="text-text-muted mb-4">
              You have full control over your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li><strong>Access:</strong> View and download your stored biodata anytime</li>
              <li><strong>Edit:</strong> Update or modify your information at any time</li>
              <li><strong>Delete:</strong> Request deletion of your account and all associated data</li>
              <li><strong>Export:</strong> Download your biodata in PDF or image format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from communications at any time</li>
            </ul>
          </Section>

          <Section 
            icon={<Cookie size={24} />}
            title="Cookies and Tracking"
          >
            <p className="text-text-muted mb-4">
              We use minimal cookies necessary for the service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li><strong>Storage:</strong> Browser local storage (to save your drafts locally)</li>
              <li><strong>Analytics:</strong> Google Analytics/GTM cookies to understand anonymous usage patterns (page views, feature usage)</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Analytics cookies track anonymous interactions only - they don't capture your biodata content or personal information.
              </p>
            </div>
            <p className="text-text-muted mt-4">
              You can disable analytics cookies through your browser settings without affecting core functionality.
            </p>
          </Section>

          <Section 
            title="Third-Party Services"
          >
            <p className="text-text-muted mb-4">
              We use trusted third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li><strong>Vercel:</strong> Website hosting and content delivery</li>
              <li><strong>Google Analytics / Google Tag Manager:</strong> Anonymous usage analytics to improve the service</li>
            </ul>
            <p className="text-text-muted mt-4">
              These services have their own privacy policies. Google Analytics data is configured to anonymize IP addresses and exclude personal information.
            </p>
          </Section>

          <Section 
            title="Children's Privacy"
          >
            <p className="text-text-muted">
              VivahBio is intended for users aged 18 and above. We do not knowingly collect information from individuals under 18. If you believe we have inadvertently collected such information, please contact us immediately for removal.
            </p>
          </Section>

          <Section 
            title="Changes to This Policy"
          >
            <p className="text-text-muted">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes through our website or via email. Your continued use of VivahBio after changes indicates acceptance of the updated policy.
            </p>
          </Section>

          <Section 
            title="Contact Us"
          >
            <p className="text-text-muted mb-4">
              If you have questions, concerns, or requests regarding your privacy or this policy:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-text-main font-semibold mb-2">Get in Touch</p>
              <p className="text-text-muted text-sm mb-3">
                We're here to help and respond to all inquiries within 48 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold text-sm"
              >
                Contact Us
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </Section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-border-soft text-center">
          <p className="text-text-muted mb-4">
            Ready to create your biodata with confidence?
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ 
  icon, 
  title, 
  children 
}: { 
  icon?: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl border border-border-soft p-6 md:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        {icon && (
          <div className="flex-shrink-0 text-primary mt-1">
            {icon}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-text-main">
          {title}
        </h3>
      </div>
      <div className="text-sm md:text-base">
        {children}
      </div>
    </section>
  );
}
