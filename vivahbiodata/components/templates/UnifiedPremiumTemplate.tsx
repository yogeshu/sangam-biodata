import { TemplateProps, defaultVisibleSections } from './BaseTemplate';

interface UnifiedPremiumTemplateProps extends TemplateProps {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  hasDecorativeBorder?: boolean;
  borderStyle?: 'ornate' | 'simple' | 'minimal';
}

/**
 * Unified Premium Template Component
 * Handles image positioning to avoid text overlap and fits on one page
 */
export default function UnifiedPremiumTemplate({
  data,
  colorTheme,
  visibleSections = defaultVisibleSections,
  layoutStyle = 'compact',
  primaryColor,
  secondaryColor,
  accentColor,
  backgroundColor,
  hasDecorativeBorder = true,
  borderStyle = 'ornate',
}: UnifiedPremiumTemplateProps) {
  // Use colorTheme if provided, otherwise use default colors
  const primary = colorTheme?.primary || primaryColor;
  const secondary = colorTheme?.secondary || secondaryColor;
  const accent = colorTheme?.accent || accentColor;
  const bgColor = colorTheme?.background || backgroundColor;

  const calculateAge = (dob: string): number => {
    if (!dob) return 0;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getBorderDecoration = () => {
    if (borderStyle === 'ornate') {
      return 'border-4 border-double rounded-lg';
    } else if (borderStyle === 'simple') {
      return 'border-2 border-solid rounded-md';
    } else {
      return 'border-l-4 rounded-none';
    }
  };

  return (
    <div
      className="w-full min-h-screen p-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* A4 Page Container - 8.27 x 11.69 inches @ 96 DPI = 794 x 1123 pixels */}
      <div
        className={`w-full max-w-[794px] bg-white shadow-lg ${getBorderDecoration()}`}
        style={{ borderColor: accent, minHeight: '1123px' }}
      >
        {/* Header Section with Photo (Top, no text overlap) */}
        <div className="relative w-full" style={{ backgroundColor: bgColor }}>
          {/* Decorative Top Bar */}
          <div
            className="h-1 w-full"
            style={{ backgroundColor: primary }}
          />

          {/* Photo Section - Top Right with Safe Margins */}
          {data.photos && data.photos.length > 0 && (
            <div className="absolute top-6 right-6 z-10">
              <div
                className="w-32 h-40 rounded-lg overflow-hidden border-4 shadow-md"
                style={{ borderColor: accent }}
              >
                <img
                  src={data.photos[0]}
                  alt="Biodata Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Header Content - Left Side (Safe from photo overlap) */}
          <div className="px-6 pt-6 pb-4 pr-40">
            {/* Name and Basic Info */}
            <div className="mb-4">
              <h1
                className="text-4xl font-bold mb-1"
                style={{ color: primary }}
              >
                {data.fullName || 'Your Name'}
              </h1>
              <div
                className="h-1 w-24 rounded-full"
                style={{ backgroundColor: accent }}
              />
            </div>

            {/* Quick Info Grid - Safe from photo */}
            <div className="grid grid-cols-3 gap-3 text-sm mt-4">
              {data.gender && (
                <div>
                  <p className="font-semibold" style={{ color: secondary }}>Gender</p>
                  <p className="text-gray-700">{data.gender}</p>
                </div>
              )}
              {data.maritalStatus && (
                <div>
                  <p className="font-semibold" style={{ color: secondary }}>Status</p>
                  <p className="text-gray-700">{data.maritalStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Section - Full width below photo area */}
        <div className="px-6 py-4">
          <Section title="Biodata Details" primary={primary} accent={accent}>
            <div className="space-y-2">
              <InfoRow label="Name" value={data.fullName} secondary={secondary} />
              <InfoRow label="Birth Name" value={data.birthName} secondary={secondary} />
              <InfoRow label="Birth Time" value={data.timeOfBirth} secondary={secondary} />
              <InfoRow label="Birth Date" value={data.dateOfBirth ? `${data.dateOfBirth}${data.dateOfBirth ? ` (${calculateAge(data.dateOfBirth)} years)` : ''}` : ''} secondary={secondary} />
              <InfoRow label="Birth Place" value={data.birthPlace} secondary={secondary} />
              <InfoRow label="Height" value={data.height} secondary={secondary} />
              <InfoRow label="Gotra" value={data.gotra} secondary={secondary} />
              <InfoRow label="Nadi" value={data.nadi} secondary={secondary} />
              <InfoRow label="Mamekul" value={data.mamekul} secondary={secondary} />
              <InfoRow label="Kul" value={data.kul} secondary={secondary} />
              <InfoRow label="Bloodgroup" value={data.bloodGroup} secondary={secondary} />
              <InfoRow label="Nakshtra" value={data.nakshatra} secondary={secondary} />
              <InfoRow label="Charan" value={data.charan} secondary={secondary} />
              <InfoRow label="Ras" value={data.ras || data.rashi} secondary={secondary} />
              <InfoRow label="Cast" value={data.caste} secondary={secondary} />
              <InfoRow label="Education" value={data.education} secondary={secondary} />
              <InfoRow label="Job" value={data.occupation} secondary={secondary} />
              <InfoRow label="Job City" value={data.jobCity} secondary={secondary} />
              <InfoRow label="Yearly Income" value={data.yearlyIncome || data.income} secondary={secondary} />
              <InfoRow label="Father's Name" value={data.fatherName} secondary={secondary} />
              <InfoRow label="Occupation" value={data.fatherOccupation} secondary={secondary} />
              <InfoRow label="Mother's Name" value={data.motherName} secondary={secondary} />
              <InfoRow label="Occupation" value={data.motherOccupation} secondary={secondary} />
              <InfoRow label="Siblings" value={data.siblings} secondary={secondary} />
              <InfoRow label="Address" value={data.address || data.familyLocation} secondary={secondary} />
              <InfoRow label="State" value={data.state} secondary={secondary} />
              <InfoRow label="Contact Details" value={data.contactDetails || data.contactNumber} secondary={secondary} />
              <InfoRow label="EXPECtations" value={data.expectations} secondary={secondary} />
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div
            className="h-1 w-full"
            style={{ backgroundColor: primary }}
          />
          <div className="py-3 text-center text-xs text-gray-500">
            {data.watermarkText || "VivahBio.com"}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Section Component for organizing content
 */
function Section({
  title,
  primary,
  accent,
  children,
}: {
  title: string;
  primary: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-1 h-px" style={{ backgroundColor: accent }} />
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: primary }}>
          {title}
        </h2>
        <div className="flex-1 h-px" style={{ backgroundColor: accent }} />
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

/**
 * Info Row Component
 */
function InfoRow({
  label,
  value,
  secondary,
}: {
  label: string;
  value?: string;
  secondary: string;
}) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 text-sm">
      <p className="font-semibold text-gray-700" style={{ color: secondary }}>
        {label} :
      </p>
      <p className="text-gray-800">{value || "—"}</p>
    </div>
  );
}
