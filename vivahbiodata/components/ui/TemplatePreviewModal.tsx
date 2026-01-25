"use client";

import { X, Download, Edit, Check } from 'lucide-react';
import { useState } from 'react';
import type { TemplateMeta } from '@/lib/templates';
import TemplateRenderer from '@/components/templates/TemplateRenderer';
import type { BiodataData } from '@/components/templates/BaseTemplate';

interface TemplatePreviewModalProps {
  template: TemplateMeta;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (templateId: string, colorTheme?: string) => void;
  currentData?: any;
}

export default function TemplatePreviewModal({ 
  template, 
  isOpen, 
  onClose, 
  onSelect,
  currentData 
}: TemplatePreviewModalProps) {
  const [selectedTheme, setSelectedTheme] = useState(template.colorThemes?.[0]?.name || '');

  if (!isOpen) return null;

  const handleSelect = () => {
    onSelect(template.id, selectedTheme);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-soft bg-background-light">
          <div>
            <h2 className="text-2xl font-bold text-text-main flex items-center gap-3">
              {template.name}
              {template.isPremium && (
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                  Premium
                </span>
              )}
            </h2>
            <p className="text-sm text-text-muted mt-1">{template.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Preview Section */}
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold text-text-main uppercase tracking-wide">
                Live Preview
              </div>
              <div className="border-2 border-border-soft rounded-lg overflow-auto shadow-lg bg-white" style={{ maxHeight: '600px' }}>
                {/* Actual Template Preview */}
                <div className="scale-50 origin-top-left" style={{ width: '200%', height: '200%' }}>
                  <TemplateRenderer
                    templateId={template.id}
                    data={getSampleData()}
                    colorTheme={template.colorThemes?.find(t => t.name === selectedTheme)}
                    visibleSections={{
                      horoscope: true,
                      education: true,
                      income: true,
                      preferences: true,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Customization Section */}
            <div className="flex flex-col gap-6">
              {/* Color Themes */}
              {template.colorThemes && template.colorThemes.length > 0 && (
                <div>
                  <label className="text-sm font-semibold text-text-main uppercase tracking-wide block mb-3">
                    Choose Color Theme
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {template.colorThemes.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => setSelectedTheme(theme.name)}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 transition ${
                          selectedTheme === theme.name
                            ? 'border-primary bg-primary/5'
                            : 'border-border-soft hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <div
                              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: theme.primary }}
                            />
                            <div
                              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: theme.secondary }}
                            />
                          </div>
                          <span className="font-medium text-text-main">{theme.name}</span>
                        </div>
                        {selectedTheme === theme.name && (
                          <Check size={20} className="text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Template Details */}
              <div className="bg-background-light rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-text-main">Template Features</h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional design with elegant typography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Photo support (up to 2 photos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Customizable sections and fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Print-ready PDF output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>WhatsApp & social media friendly</span>
                  </li>
                </ul>
              </div>

              {/* Category Badge */}
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-border-soft text-text-muted rounded-full text-xs font-medium">
                  {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border-soft bg-background-light">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-text-muted hover:text-text-main transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSelect}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-md hover:shadow-lg"
          >
            <Check size={18} />
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

// Sample data for preview
function getSampleData(): BiodataData {
  return {
    fullName: "Priya Sharma",
    gender: "Female",
    dateOfBirth: "15th January 1995",
    timeOfBirth: "10:30 AM",
    birthPlace: "Mumbai, Maharashtra",
    height: "5'4\"",
    complexion: "Fair",
    maritalStatus: "Never Married",
    bloodGroup: "O+",
    religion: "Hindu",
    caste: "Brahmin",
    gotra: "Bharadwaj",
    rashi: "Taurus",
    nakshatra: "Rohini",
    manglik: "No",
    religiousSymbol: "🕉️",
    education: "MBA in Finance",
    occupation: "Senior Financial Analyst",
    company: "HDFC Bank Ltd.",
    income: "₹12-15 Lakhs per annum",
    fatherName: "Mr. Rajesh Sharma",
    fatherOccupation: "Retired Government Officer",
    motherName: "Mrs. Sunita Sharma",
    motherOccupation: "Homemaker",
    siblings: "One younger brother",
    familyLocation: "Mumbai",
    familyValues: "Traditional with modern outlook",
    contactNumber: "+91 98765 43210",
    email: "priya.sharma@example.com",
    address: "123, Sunshine Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    partnerAge: "28-32 years",
    partnerHeight: "5'8\" and above",
    partnerLocation: "Mumbai, Pune, or nearby cities",
    partnerEducation: "Graduate or Post-Graduate",
    partnerOccupation: "Well-settled professional",
    partnerManglik: "No preference",
    photos: [],
    customFields: [
      { label: "Hobbies", value: "Reading, Yoga, Traveling" },
      { label: "Languages Known", value: "Hindi, English, Marathi" }
    ],
  };
}
