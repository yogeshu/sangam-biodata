"use client";

import { useState } from "react";
import { Download, Share2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SAMPLE_BIODATAS = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 26,
    city: "Mumbai",
    education: "MBA, B.Tech",
    religion: "Hindu",
    occupation: "Software Engineer",
    description: "Accomplished professional from a business family seeking a cultured partner.",
  },
  {
    id: 2,
    name: "Anjali Patel",
    age: 24,
    city: "Bangalore",
    education: "B.Tech (CS)",
    religion: "Hindu",
    occupation: "Data Scientist",
    description: "Ambitious tech enthusiast with modern values and traditional roots.",
  },
  {
    id: 3,
    name: "Neha Gupta",
    age: 28,
    city: "Delhi",
    education: "M.Com, Diploma",
    religion: "Hindu",
    occupation: "Chartered Accountant",
    description: "Independent and accomplished woman from a well-established family.",
  },
  {
    id: 4,
    name: "Pooja Verma",
    age: 25,
    city: "Pune",
    education: "MBBS",
    religion: "Hindu",
    occupation: "Doctor",
    description: "Caring healthcare professional seeking a supportive life partner.",
  },
];

export default function SamplesPage() {
  const router = useRouter();
  const [selectedSample, setSelectedSample] = useState(SAMPLE_BIODATAS[0]);

  return (
    <div className="min-h-screen bg-background-light text-text-main font-body">
      {/* Header */}
      <header className="border-b border-border-soft bg-white shadow-sm sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Sample Biodatas</h1>
              <p className="text-sm text-text-muted mt-1">See examples of beautiful biodata formats</p>
            </div>
            <button
              onClick={() => router.push("/create")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition w-full md:w-auto justify-center"
            >
              Create Your Own
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sample List */}
          <div className="space-y-3">
            {SAMPLE_BIODATAS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  selectedSample.id === sample.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border-soft hover:border-primary/50"
                }`}
              >
                <p className="font-bold text-text-main">{sample.name}</p>
                <p className="text-sm text-text-muted mt-1">{sample.occupation}</p>
                <p className="text-xs text-text-muted">{sample.age} yrs • {sample.city}</p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border-soft bg-white shadow-lg overflow-hidden">
              <SamplePreview sample={selectedSample} />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-border-soft text-text-main font-semibold rounded-lg hover:border-primary hover:text-primary transition">
                <Download size={18} />
                Download Sample
              </button>
              <button
                onClick={() => router.push("/create")}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
              >
                Create Similar
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SamplePreview({ sample }: { sample: (typeof SAMPLE_BIODATAS)[0] }) {
  return (
    <div className="p-8 md:p-12 space-y-6 text-text-main font-display">
      {/* Header */}
      <div className="text-center border-b border-border-soft pb-6">
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
          <span className="text-3xl">♀️</span>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-1">{sample.name}</h1>
        <p className="text-sm text-text-muted">{sample.age} years • {sample.city}</p>
      </div>

      {/* Content */}
      <div className="space-y-6 text-sm">
        {/* Personal */}
        <Section title="About">
          <Row label="Age" value={`${sample.age} years`} />
          <Row label="City" value={sample.city} />
          <Row label="Religion" value={sample.religion} />
          <Row label="Education" value={sample.education} />
          <Row label="Occupation" value={sample.occupation} />
        </Section>

        <div className="border-t border-dashed border-border-strong" />

        {/* Description */}
        <Section title="Profile">
          <p className="text-text-main leading-relaxed">{sample.description}</p>
        </Section>

        <div className="border-t border-dashed border-border-strong" />

        {/* Contact */}
        <Section title="Contact">
          <Row label="Availability" value="Available for meetings" />
          <Row label="Family" value="Hindu Brahmin family" />
        </Section>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-border-soft text-center text-xs text-text-muted">
        <p>Sample biodata created on VivahBio</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-bold text-text-main mb-3 uppercase text-xs tracking-wider">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4">
      <span className="font-semibold text-text-muted text-xs uppercase">{label}</span>
      <span className="text-text-main">{value}</span>
    </div>
  );
}
