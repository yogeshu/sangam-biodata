import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | VivahBio',
  description: 'Terms of service and conditions for using VivahBio biodata creation platform.',
};

export default function TermsPage() {
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
          <h1 className="text-lg md:text-xl font-bold text-primary">Terms & Conditions</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Scale size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Terms and Conditions
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using VivahBio services.
          </p>
          <p className="text-sm text-text-muted mt-4">
            Last Updated: February 1, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            icon={<FileText size={24} />}
            title="1. Acceptance of Terms"
          >
            <p className="text-text-muted mb-4">
              By accessing and using VivahBio ("the Service"), you accept and agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our Service.
            </p>
            <p className="text-text-muted">
              These terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </Section>

          <Section 
            icon={<CheckCircle size={24} />}
            title="2. Service Description"
          >
            <p className="text-text-muted mb-4">
              VivahBio is a <strong>privacy-first</strong> biodata creation tool that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Online marriage biodata creation tools</li>
              <li>Professional templates for biodata formatting</li>
              <li>PDF and image download functionality</li>
              <li>Draft saving (locally or in your account)</li>
              <li>Sample biodatas for reference</li>
            </ul>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
              <p className="text-sm text-green-800 font-semibold">
                🔒 Privacy-First: We only collect your email for account creation. Your biodata information stays with you.
              </p>
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> VivahBio is a document creation tool, not a matchmaking or matrimonial service.
              </p>
            </div>
          </Section>

          <Section 
            title="3. User Responsibilities"
          >
            <p className="text-text-muted mb-4">
              By using VivahBio, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Be at least 18 years of age</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not misuse the service for fraudulent purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not upload offensive, inappropriate, or illegal content</li>
              <li>Not attempt to harm or disrupt the service</li>
            </ul>
          </Section>

          <Section 
            icon={<XCircle size={24} />}
            title="4. Prohibited Uses"
          >
            <p className="text-text-muted mb-4">
              You may NOT use VivahBio for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Creating fake or fraudulent biodatas</li>
              <li>Impersonating another person</li>
              <li>Harassing, abusing, or threatening others</li>
              <li>Uploading copyrighted images without permission</li>
              <li>Distributing malware or harmful code</li>
              <li>Scraping or automated data collection</li>
              <li>Commercial resale of the service</li>
              <li>Any illegal or unauthorized purpose</li>
            </ul>
          </Section>

          <Section 
            title="5. Intellectual Property"
          >
            <p className="text-text-muted mb-4">
              <strong>Our Content:</strong> All templates, designs, logos, and service features are owned by VivahBio and protected by copyright and trademark laws.
            </p>
            <p className="text-text-muted mb-4">
              <strong>Your Content:</strong> You retain ownership of the information and photos you upload. By using our service, you grant us a limited license to use your content solely for providing the service (e.g., generating your biodata).
            </p>
            <p className="text-text-muted">
              <strong>Generated Biodatas:</strong> The biodata PDFs you create are yours to use, share, and distribute as you wish.
            </p>
          </Section>

          <Section 
            icon={<AlertCircle size={24} />}
            title="6. Disclaimer of Warranties"
          >
            <p className="text-text-muted mb-4">
              VivahBio is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Merchantability or fitness for a particular purpose</li>
              <li>Accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free service</li>
              <li>Security of data transmission</li>
            </ul>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> We do not guarantee matrimonial success or any outcomes from using your biodata. VivahBio is solely a document creation tool.
              </p>
            </div>
          </Section>

          <Section 
            title="7. Limitation of Liability"
          >
            <p className="text-text-muted mb-4">
              To the fullest extent permitted by law, VivahBio shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Damages arising from use or inability to use the service</li>
              <li>Third-party actions or content</li>
              <li>Unauthorized access to your account or data</li>
            </ul>
            <p className="text-text-muted mt-4">
              Our total liability shall not exceed the amount you paid for the service (if any) in the past 12 months.
            </p>
          </Section>

          <Section 
            title="8. User Content and Data"
          >
            <p className="text-text-muted mb-4">
              <strong>Your Data is Yours:</strong> All biodata information you create belongs to you and is stored locally in your browser or in your private account. We don't access, analyze, or process your biodata content.
            </p>
            <p className="text-text-muted mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>The accuracy and legality of information you provide</li>
              <li>Obtaining rights to use any photos you upload</li>
              <li>Reviewing your biodata before downloading or sharing</li>
              <li>How you use and distribute your generated biodata</li>
            </ul>
          </Section>

          <Section 
            title="9. Privacy and Data Protection"
          >
            <p className="text-text-muted mb-4">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm"
            >
              Read Privacy Policy
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </Section>

          <Section 
            title="10. Service Availability"
          >
            <p className="text-text-muted mb-4">
              We strive to maintain high availability but cannot guarantee uninterrupted service. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Modify or discontinue features without notice</li>
              <li>Perform maintenance that may temporarily affect access</li>
              <li>Suspend or terminate accounts that violate these terms</li>
              <li>Update these terms at any time</li>
            </ul>
          </Section>

          <Section 
            title="11. Termination"
          >
            <p className="text-text-muted mb-4">
              We may terminate or suspend your access immediately, without prior notice, for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Violation of these Terms and Conditions</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of the service or other users</li>
              <li>Request from law enforcement</li>
            </ul>
            <p className="text-text-muted mt-4">
              You may also delete your account at any time through your account settings.
            </p>
          </Section>

          <Section 
            title="12. Governing Law"
          >
            <p className="text-text-muted">
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or use of the service shall be resolved through appropriate legal channels in the jurisdiction where VivahBio operates.
            </p>
          </Section>

          <Section 
            title="13. Changes to Terms"
          >
            <p className="text-text-muted mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of VivahBio after changes constitutes acceptance of the modified terms.
            </p>
            <p className="text-text-muted">
              We recommend reviewing these terms periodically for any updates.
            </p>
          </Section>

          <Section 
            title="14. Contact Information"
          >
            <p className="text-text-muted mb-4">
              Questions about these Terms and Conditions? We're here to help.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-text-main font-semibold mb-2">Get in Touch</p>
              <p className="text-text-muted text-sm mb-3">
                Contact us for clarifications or concerns about our terms.
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

        {/* Acknowledgment */}
        <div className="mt-12 pt-8 border-t border-border-soft">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <CheckCircle size={32} className="text-green-600 mx-auto mb-3" />
            <p className="text-text-main font-semibold mb-2">
              By using VivahBio, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold mt-4"
            >
              I Agree - Get Started
            </Link>
          </div>
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
