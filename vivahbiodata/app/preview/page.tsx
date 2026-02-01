"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { ArrowLeft, Download, Share2, CheckCircle, RotateCcw, Image } from "lucide-react";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import { clearBiodataLocal, loadBiodataFromLocal, loadSelectedTemplate, loadSelectedColorTheme, saveBiodataToLocal, saveSelectedTemplate, loadPhotosFromLocal } from "@/lib/utils/storage";
import { templates } from "@/lib/templates";
import type { BiodataData, VisibleSections } from "@/components/templates/BaseTemplate";
import { downloadAsPDF, downloadAsImage, shareOnWhatsApp } from "@/lib/utils/download";

function buildExpectations(data: any): string {
  if (data?.partnerExpectationsMode === 'simple' && data?.partnerExpectationsText) {
    return data.partnerExpectationsText;
  }

  const parts = [
    data?.partnerAge ? `Age: ${data.partnerAge}` : "",
    data?.partnerHeight ? `Height: ${data.partnerHeight}` : "",
    data?.partnerLocation ? `Location: ${data.partnerLocation}` : "",
    data?.partnerEducation ? `Education: ${data.partnerEducation}` : "",
    data?.partnerOccupation ? `Occupation: ${data.partnerOccupation}` : "",
    data?.partnerManglik ? `Manglik: ${data.partnerManglik}` : "",
  ].filter(Boolean);

  return parts.join(" | ");
}

function normalizeBiodata(raw: any): BiodataData {
  const contactFromArray = Array.isArray(raw?.contactNumbers)
    ? raw.contactNumbers
        .map((c: any) => ({ type: c?.type || "", number: c?.number || "" }))
        .filter((c: any) => c.number && c.number.trim())
        .map((c: any) => `${c.type ? `${c.type}: ` : ""}${c.number}`)
    : [];
  const contactNumber = contactFromArray[0] || raw?.contactNumber || "";

  return {
    fullName: raw?.fullName || "",
    birthName: raw?.birthName || "",
    gender: raw?.gender || "",
    dateOfBirth: raw?.dateOfBirth || "",
    timeOfBirth: raw?.timeOfBirth || "",
    birthPlace: raw?.birthPlace || "",
    height: raw?.height || "",
    complexion: raw?.complexion || "",
    maritalStatus: raw?.maritalStatus || "",
    bloodGroup: raw?.bloodGroup || "",
    religion: raw?.religion || "",
    caste: raw?.caste || "",
    gotra: raw?.gothra || raw?.gotra || "",
    nadi: raw?.nadi || "",
    mamekul: raw?.mamekul || "",
    kul: raw?.kul || "",
    rashi: raw?.rashi || "",
    ras: raw?.ras || "",
    nakshatra: raw?.nakshatra || "",
    charan: raw?.charan || "",
    manglik: raw?.manglik || "",
    religiousSymbol: raw?.religiousSymbol || "",
    education: raw?.education || "",
    occupation: raw?.occupation || "",
    jobCity: raw?.jobCity || "",
    company: raw?.company || "",
    income: raw?.incomeRange || raw?.income || "",
    yearlyIncome: raw?.yearlyIncome || raw?.incomeRange || "",
    fatherName: raw?.fatherName || "",
    fatherOccupation: raw?.fatherOccupation || "",
    motherName: raw?.motherName || "",
    motherOccupation: raw?.motherOccupation || "",
    siblings: raw?.siblings || "",
    familyLocation: raw?.familyLocation || "",
    familyValues: raw?.familyValues || "",
    contactNumber,
    contactDetails: contactFromArray.join(", ") || contactNumber,
    email: raw?.email || "",
    address: raw?.familyLocation || raw?.address || "",
    city: raw?.city || "",
    state: raw?.state || "",
    partnerAge: raw?.partnerAge || "",
    partnerHeight: raw?.partnerHeight || "",
    partnerLocation: raw?.partnerLocation || "",
    partnerEducation: raw?.partnerEducation || "",
    partnerOccupation: raw?.partnerOccupation || "",
    partnerManglik: raw?.partnerManglik || "",
    expectations: raw?.expectations || buildExpectations(raw),
    watermarkText: raw?.watermarkText || "VivahBio.com",
    photos: raw?.photos || [],
    customFields: raw?.customFields || [],
    layoutStyle: raw?.layoutStyle || 'compact',
  } as BiodataData;
}

function PreviewPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<BiodataData | null>(null);
  const [templateId, setTemplateId] = useState<string>("traditional-red");
  const [colorTheme, setColorTheme] = useState<any>(null);
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({
    horoscope: true,
    education: true,
    income: true,
    preferences: true,
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const [isImageDownloading, setIsImageDownloading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

  useEffect(() => {
    // Prevent running effect multiple times
    if (hasAttemptedLoad) return;
    
    const dataParam = searchParams?.get("data");
    const templateParam = searchParams?.get("template");

    let hasData = false;

    if (dataParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(dataParam));
        // Load photos from localStorage
        const photos = loadPhotosFromLocal();
        const dataWithPhotos = { ...parsed, photos };
        setData(normalizeBiodata(dataWithPhotos));
        setVisibleSections(parsed.visibleSections || {
          horoscope: true,
          education: true,
          income: true,
          preferences: true,
        });
        saveBiodataToLocal(dataWithPhotos as any);
        hasData = true;
      } catch (error) {
        console.error("Failed to parse preview data:", error);
      }
    } else {
      // Load data from localStorage
      const savedData = loadBiodataFromLocal() as any;
      if (savedData && Object.keys(savedData).length > 0 && savedData.fullName) {
        // Load photos from localStorage
        const photos = loadPhotosFromLocal();
        const dataWithPhotos = { ...savedData, photos };
        setData(normalizeBiodata(dataWithPhotos));
        setVisibleSections(savedData.visibleSections || {
          horoscope: true,
          education: true,
          income: true,
          preferences: true,
        });
        hasData = true;
      }
    }

    const savedTemplate = templateParam || loadSelectedTemplate() || "modern-minimal";
    setTemplateId(savedTemplate);
    if (templateParam) {
      saveSelectedTemplate(savedTemplate);
    }

    const savedColorTheme = loadSelectedColorTheme();
    if (savedColorTheme) {
      const template = templates.find((t) => t.id === savedTemplate);
      const theme = template?.colorThemes?.find((ct) => ct.name === savedColorTheme);
      if (theme) {
        setColorTheme(theme);
      }
    }

    // Set loading to false after attempting to load data
    setIsLoading(false);
    setHasAttemptedLoad(true);

    // If no data found after load attempt, redirect to create page after a brief delay
    if (!hasData) {
      const timer = setTimeout(() => {
        router.push("/create");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router, hasAttemptedLoad]);

  const handleDownloadPDF = async () => {
    if (!isConfirmed) return;

    setIsDownloading(true);
    try {
      await downloadAsPDF("biodata-preview", {
        filename: `${data?.fullName || "biodata"}-vivahbio.pdf`,
      });
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadImage = async () => {
    if (!isConfirmed) return;

    setIsImageDownloading(true);
    try {
      await downloadAsImage("biodata-preview", {
        filename: `${data?.fullName || "biodata"}-vivahbio.png`,
        format: 'png',
      });
    } catch (error) {
      console.error("Image download failed:", error);
      alert("Failed to download image. Please try again.");
    } finally {
      setIsImageDownloading(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!isConfirmed) return;
    shareOnWhatsApp(`Check out my biodata: ${data?.fullName || "Biodata"} - Created on VivahBio.com`);
  };

  const handleStartOver = () => {
    clearBiodataLocal();
    router.push("/create");
  };

  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-background-light flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-muted">Loading your biodata...</p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">📄</div>
              <h2 className="text-xl font-bold text-text-main mb-2">No Biodata Found</h2>
              <p className="text-text-muted mb-6">You haven't created a biodata yet. Redirecting you to create one...</p>
              <button
                onClick={() => router.push("/create")}
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
              >
                Create Biodata Now
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  const verificationItems = [
    {
      label: "Personal details complete",
      ok: !!(data.fullName && data.gender && data.dateOfBirth && data.height),
    },
    {
      label: "Family details present",
      ok: !!(data.fatherName && data.motherName),
    },
    {
      label: "Partner preferences filled",
      ok: !!(data.partnerAge || data.partnerLocation || data.partnerEducation),
    },
    {
      label: "Contact information added",
      ok: !!data.contactNumber,
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-text-main font-body">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 flex items-center justify-between gap-4">
          <button
            onClick={() => router.push("/create?step=3")}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition"
            aria-label="Back to form"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline text-sm font-semibold">Edit Details</span>
          </button>
          <h1 className="text-xl font-bold text-primary">Preview & Download</h1>
          <button
            onClick={handleStartOver}
            className="flex items-center gap-2 rounded-full border border-border-soft px-3 py-1.5 text-xs font-semibold text-text-muted transition hover:border-red-200 hover:text-red-500"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Start Over</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Preview */}
          <div className="lg:col-span-2">
            <div id="biodata-preview" className="rounded-xl border border-border-soft bg-white shadow-lg overflow-hidden">
              <TemplateRenderer 
                templateId={templateId}
                data={data}
                colorTheme={colorTheme}
                visibleSections={visibleSections}
                layoutStyle={data.layoutStyle || 'compact'}
              />
            </div>
          </div>

          {/* Actions Panel */}
          <div className="flex flex-col gap-6">
            {/* Verification Card */}
            <div className="rounded-xl border border-border-soft bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={20} className="text-primary" />
                <h2 className="font-bold text-lg text-text-main">Verify Your Details</h2>
              </div>
              <p className="text-sm text-text-muted mb-4">
                Please confirm your biodata is accurate before downloading or sharing.
              </p>
              <div className="space-y-2 mb-4">
                {verificationItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg border border-border-soft px-3 py-2 text-xs font-semibold">
                    <span className="text-text-main">{item.label}</span>
                    <span className={item.ok ? "text-emerald-600" : "text-amber-600"}>
                      {item.ok ? "Checked" : "Needs review"}
                    </span>
                  </div>
                ))}
              </div>
              <label className="flex items-center gap-2 text-xs font-semibold text-text-main">
                <input
                  type="checkbox"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="size-4 rounded border-border-soft text-primary focus:ring-primary"
                />
                I confirm that the details are correct.
              </label>
            </div>

            {/* Download Actions */}
            <div className="space-y-3">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading || !isConfirmed}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={18} />
                {isDownloading ? "Generating PDF..." : "Download PDF"}
              </button>
              <button 
                onClick={handleDownloadImage}
                disabled={isImageDownloading || !isConfirmed}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image size={18} />
                {isImageDownloading ? "Generating Image..." : "Download Image"}
              </button>
              <button 
                onClick={handleShareWhatsApp}
                disabled={!isConfirmed}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
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

export default function PreviewPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><p>Loading preview...</p></div>}>
      <PreviewPageContent />
    </Suspense>
  );
}

export const dynamic = 'force-dynamic';

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