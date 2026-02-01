import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, Heart, Lightbulb, Code, Users } from 'lucide-react';

export const metadata = {
  title: 'About VivahBio | Created for Families',
  description: 'Learn about VivahBio - a privacy-first biodata creation tool built with love for families.',
};

export default function AboutPage() {
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
          <h1 className="text-lg md:text-xl font-bold text-primary">About Us</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Heart size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            About VivahBio
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A privacy-first biodata creation tool built with love for families finding their perfect match.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl border border-border-soft p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-text-main">Our Mission</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              To simplify the biodata creation process for families by providing a beautiful, easy-to-use, and privacy-respecting platform. We believe that finding a life partner should be simple and secure.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-border-soft p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Code size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-text-main">Our Values</h3>
            </div>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Privacy First:</strong> Your data is yours alone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Simple & Beautiful:</strong> Easy to use, beautiful to share</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Secure:</strong> Enterprise-grade security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Respectful:</strong> Honoring traditions and cultures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Creator Section */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Info */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-text-main mb-2">
                Built by Yogesh Bhavsar
              </h3>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                A passionate developer dedicated to building tools that solve real problems. With expertise in web development, privacy, and user experience, Yogesh created VivahBio to help families navigate matrimony with confidence and security.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/yogeshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border-soft hover:border-primary hover:bg-primary/5 transition font-semibold text-sm text-text-main"
                >
                  <Github size={18} />
                  GitHub Profile
                </a>
                <a
                  href="https://linkedin.com/in/yogeshbhavsarui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border-soft hover:border-primary hover:bg-primary/5 transition font-semibold text-sm text-text-main"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
                <a
                  href="https://consult.yogeshbhavsar.com/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border-soft hover:border-primary hover:bg-primary/5 transition font-semibold text-sm text-text-main"
                >
                  <ExternalLink size={18} />
                  Portfolio
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl border border-border-soft p-6 shadow-sm">
              <h4 className="text-lg font-bold text-text-main mb-4">Get in Touch</h4>
              <p className="text-sm text-text-muted mb-4">
                Have feedback, questions, or partnership opportunities?
              </p>
              <a
                href="mailto:connect@yogeshbhavsar.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold text-sm w-full justify-center"
              >
                <Mail size={18} />
                connect@yogeshbhavsar.com
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-text-main text-center mb-12">
            What Makes VivahBio Special
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={32} />,
                title: 'Privacy First',
                description: 'Your biodata information is private. Drafts are stored locally in your browser and we never track your personal data.',
              },
              {
                icon: <Code size={32} />,
                title: 'Beautiful Design',
                description: '10+ professionally designed templates created by experienced designers, ready to share on WhatsApp or print.',
              },
              {
                icon: <Users size={32} />,
                title: 'Easy to Use',
                description: 'Simple, intuitive interface that guides you through creating a professional biodata in minutes.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border-soft p-8 shadow-sm text-center hover:shadow-md transition"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-text-main mb-3">
                  {feature.title}
                </h4>
                <p className="text-text-muted leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-xl border border-border-soft p-8 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-text-main mb-6">Built With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Local Storage', desc: 'Draft Storage' },
              { name: 'Vercel', desc: 'Hosting' },
              { name: 'html2canvas', desc: 'PDF/Image Export' },
              { name: 'Google Analytics', desc: 'Analytics' },
              { name: 'Lucide Icons', desc: 'Icons' },
            ].map((tech) => (
              <div key={tech.name} className="text-center p-4 rounded-lg bg-background-light">
                <p className="font-semibold text-text-main text-sm">{tech.name}</p>
                <p className="text-xs text-text-muted mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-text-main mb-4">
            Ready to Create Your Biodata?
          </h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Join thousands of families who have created beautiful biodatas with VivahBio.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Get Started Now
            <ArrowLeft size={18} className="rotate-180" />
          </Link>
        </div>
      </main>
    </div>
  );
}
