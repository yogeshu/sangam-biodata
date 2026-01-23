// app/page.tsx
import React from 'react';
import { Noto_Serif, Noto_Sans } from 'next/font/google';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import TemplateGallery from '@/components/landing/TemplateGallery';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export default function LandingPage() {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} font-display bg-background-light dark:bg-background-dark text-text-main`}>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        
        <main className="flex flex-col items-center w-full">
          <Hero />
          <Features />
          <HowItWorks />
          <TemplateGallery />
          <CTA />
          <Footer />
        </main>
        
      </div>
    </div>
  );
}