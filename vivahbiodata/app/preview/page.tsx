"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, Download, Share2, CheckCircle, Lock } from "lucide-react";

export default function PreviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [template, setTemplate] = useState<string>("classic");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    const templateParam = searchParams.get("template");
    
    if (dataParam) {
      try {
        setData(JSON.parse(decodeURIComponent(dataParam)));
      } catch (e) {
        console.error("Failed to parse form data", e);
      }
    }
    if (templateParam) {
      setTemplate(templateParam);
    }
  }, [searchParams]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background-light flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted">Loading your biodata...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light text-text-main font-body">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 flex items-center justify-between gap-4">
          <button
            onClick={() => router.push("/create")}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition"
            aria-label="Back to form"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline text-sm font-semibold">Edit Details</span>
          </button>
          <h1 className="text-xl font-bold text-primary">Preview & Download</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border-soft bg-white shadow-lg overflow-hidden">
              <BiodataPreview data={data} templateId={template} />
            </div>
          </div>

          {/* Actions Panel */}
          <div className="flex flex-col gap-6">
            {/* Verification Card */}
            {!isVerified && (
              <div className="rounded-xl border border-border-soft bg-white p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Lock size={20} className="text-primary" />
                  <h2 className="font-bold text-lg text-text-main">Verify to Download</h2>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Verify your phone number to remove watermark and download the PDF.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      className="w-full px-3 py-2 rounded-lg border border-border-soft bg-background-light text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <button
                    onClick={() => setIsVerified(true)}
                    className="w-full px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={16} />
                    Verify & Unlock
                  </button>
                </div>
              </div>
            )}

            {/* Download Actions */}
            <div className={cn("space-y-3 transition", !isVerified && "opacity-50 pointer-events-none")}>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
                <Download size={18} />
                Download PDF
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                <Share2 size={18} />
                Share on WhatsApp
              </button>
            </div>

            {/* Info Card */}
            <div className="rounded-lg border border-border-soft bg-blue-50 p-4">
              <p className="text-xs font-semibold text-blue-900 mb-1">Pro Tip</p>
              <p className="text-xs text-blue-800">You can edit your biodata anytime. Changes won't affect previously downloaded versions.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BiodataPreview({ data, templateId }: { data: any; templateId: string }) {
  return (
    <div className="p-8 md:p-12 space-y-6 text-text-main font-display">
      {/* Header */}
      <div className="text-center border-b border-border-soft pb-6">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
          <span className="text-2xl font-bold">♥</span>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">MARRIAGE BIODATA</h1>
        <p className="text-sm text-text-muted">Template: {templateId}</p>
      </div>

      {/* Content */}
      <div className="space-y-6 text-sm">
        {/* Personal Details */}
        {data.fullName && (
          <Section title="Personal Details">
            <Row label="Name" value={data.fullName} highlight />
            {data.gender && <Row label="Gender" value={data.gender} />}
            {data.dateOfBirth && <Row label="Date of Birth" value={data.dateOfBirth} />}
            {data.height && <Row label="Height" value={data.height} />}
            {data.religion && <Row label="Religion" value={data.religion} />}
            {data.education && <Row label="Education" value={data.education} />}
            {data.maritalStatus && <Row label="Marital Status" value={data.maritalStatus} />}
          </Section>
        )}

        {/* Family Details */}
        {(data.fatherName || data.motherName) && (
          <>
            <div className="border-t border-dashed border-border-strong" />
            <Section title="Family Details">
              {data.fatherName && <Row label="Father" value={data.fatherName} />}
              {data.fatherOccupation && <Row label="Father's Occupation" value={data.fatherOccupation} />}
              {data.motherName && <Row label="Mother" value={data.motherName} />}
              {data.motherOccupation && <Row label="Mother's Occupation" value={data.motherOccupation} />}
              {data.familyLocation && <Row label="Family Location" value={data.familyLocation} />}
              {data.incomeRange && <Row label="Income Range" value={data.incomeRange} />}
            </Section>
          </>
        )}

        {/* Horoscope Details */}
        {(data.rashi || data.manglik) && (
          <>
            <div className="border-t border-dashed border-border-strong" />
            <Section title="Astrological Details">
              {data.rashi && <Row label="Rashi" value={data.rashi} />}
              {data.nakshatra && <Row label="Nakshatra" value={data.nakshatra} />}
              {data.manglik && <Row label="Manglik Status" value={data.manglik} />}
              {data.bloodGroup && <Row label="Blood Group" value={data.bloodGroup} />}
            </Section>
          </>
        )}

        {/* Contact Information */}
        {data.contactNumber && (
          <>
            <div className="border-t border-dashed border-border-strong mt-4 pt-4" />
            <Section title="Contact Information">
              <Row label="Mobile" value={data.contactNumber} highlight />
              {data.state && <Row label="State" value={data.state} />}
            </Section>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-border-soft text-center text-xs text-text-muted">
        <p>Created on VivahBio • confidential & secure</p>
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

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
      <span className="font-semibold text-text-muted text-xs uppercase">{label}</span>
      <span className={highlight ? "font-bold text-primary text-base" : "text-text-main"}>{value}</span>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}