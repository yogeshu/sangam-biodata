"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { templates, type TemplateMeta } from "@/lib/templates";
import { Eye, Play, Heart, ArrowLeft } from "lucide-react";
import CommonLayout from "@/components/common/CommonLayout";
import TemplatePreviewModal from "@/components/ui/TemplatePreviewModal";
import { saveSelectedTemplate } from "@/lib/utils/storage";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import type { BiodataData } from "@/components/templates/BaseTemplate";

export default function TemplatesPage() {
  const router = useRouter();
  const [previewTemplate, setPreviewTemplate] = useState<TemplateMeta | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleSelectTemplate = (templateId: string, colorTheme?: string) => {
    saveSelectedTemplate(templateId, colorTheme);
    router.push(`/create?template=${templateId}${colorTheme ? `&theme=${colorTheme}` : ''}`);
  };

  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === activeCategory.toLowerCase());

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background-light text-text-main font-body">
        {/* Header */}
        <header className="border-b border-border-soft bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition self-start"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </button>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-text-main">Biodata Templates</h1>
                  <p className="text-sm text-text-muted mt-1">Choose from {filteredTemplates.length} beautiful designs</p>
                </div>
              </div>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Filters/Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "border border-border-soft text-text-main hover:border-primary hover:text-primary"
            }`}
          >
            All Templates
          </button>
          {["Traditional", "Modern", "Elegant", "Minimal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat.toLowerCase()
                  ? "bg-primary text-white"
                  : "border border-border-soft text-text-main hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              onPreview={() => setPreviewTemplate(template)}
              onUse={() => handleSelectTemplate(template.id)}
            />
          ))}
        </div>
      </main>

      {/* Preview Modal */}
      {previewTemplate && (
        <TemplatePreviewModal
          template={previewTemplate}
          isOpen={!!previewTemplate}
          onClose={() => setPreviewTemplate(null)}
          onSelect={handleSelectTemplate}
        />
      )}
    </div>
    </CommonLayout>
  );
}

function TemplateCard({ template, onPreview, onUse }: { 
  template: TemplateMeta; 
  onPreview: () => void;
  onUse: () => void;
}) {
  return (
    <div className="group rounded-2xl border border-border-soft bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Preview Image */}
      <div className="relative h-96 bg-gradient-to-br from-background-light to-border-soft overflow-hidden">
        <div className="scale-[0.35] origin-top-left absolute" style={{ width: '285%', height: '285%' }}>
          <TemplateRenderer
            templateId={template.id}
            data={getMiniSampleData()}
            colorTheme={template.colorThemes?.[0]}
            visibleSections={{
              horoscope: true,
              education: true,
              income: false,
              preferences: false,
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 pointer-events-none">
          <button
            onClick={onPreview}
            className="flex items-center gap-2 px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition pointer-events-auto"
          >
            <Eye size={16} />
            Preview
          </button>
          <button
            onClick={onUse}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition pointer-events-auto"
          >
            <Play size={16} />
            Use
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-main mb-2">{template.name}</h3>
        <p className="text-sm text-text-muted mb-4">{template.description}</p>

        <div className="flex items-center gap-2 text-xs">
          {template.isPremium && (
            <span className="px-2 py-1 bg-primary/10 text-primary font-bold rounded-full">Premium</span>
          )}
          {template.category && (
            <span className="px-2 py-1 bg-border-soft text-text-muted rounded-full">{template.category}</span>
          )}
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-border-soft flex justify-between text-xs text-text-muted">
          <span>✨ {template.category}</span>
          {template.isPremium && <span className="text-amber-600 font-semibold">Premium</span>}
        </div>
      </div>
    </div>
  );
}

// Mini sample data for card previews
function getMiniSampleData(): BiodataData {
  return {
    fullName: "Rohan Sharma",
    gender: "Male",
    dateOfBirth: "15th August 1995",
    timeOfBirth: "09:30 AM",
    birthPlace: "Jaipur, Rajasthan",
    height: "5' 10\"",
    complexion: "Fair",
    maritalStatus: "Never Married",
    bloodGroup: "O+",
    religion: "Hindu",
    caste: "Brahmin",
    gotra: "Vashishtha",
    rashi: "Mesha (Aries)",
    nakshatra: "Bharani",
    manglik: "No (Non-Manglik)",
    religiousSymbol: "🕉️",
    education: "B.Tech Computer Science",
    occupation: "Software Engineer",
    company: "TCS Ltd.",
    income: "₹8-10 LPA",
    fatherName: "Mr. Rajesh Sharma",
    fatherOccupation: "Business",
    motherName: "Mrs. Sunita Sharma",
    motherOccupation: "Homemaker",
    siblings: "One sister",
    familyLocation: "Jaipur",
    familyValues: "Traditional",
    contactNumber: "+91 98765 43210",
    email: "rohan@example.com",
    address: "123, Gandhi Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    partnerAge: "24-28 years",
    partnerHeight: "5'4\" - 5'8\"",
    partnerLocation: "Rajasthan",
    partnerEducation: "Graduate",
    partnerOccupation: "Any",
    partnerManglik: "No",
    photos: [],
    customFields: [],
  };
}
