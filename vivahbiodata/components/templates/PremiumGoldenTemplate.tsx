import { TemplateProps, defaultVisibleSections } from './BaseTemplate';

export default function PremiumGoldenTemplate({ 
  data, 
  colorTheme,
  visibleSections = defaultVisibleSections 
}: TemplateProps) {
  const theme = colorTheme || {
    primary: '#B8860B',
    secondary: '#8B6914',
    accent: '#DAA520',
    background: '#F5F1E8',
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto shadow-2xl relative"
      style={{ backgroundColor: theme.background }}
    >
      {/* Golden Border Frame */}
      <div 
        className="absolute inset-0 border-8 rounded-sm pointer-events-none"
        style={{ borderColor: theme.primary }}
      >
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: theme.accent }}>
            <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" />
            <circle cx="50" cy="50" r="8" style={{ fill: theme.primary }} />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: theme.accent }}>
            <path d="M0,0 L100,0 L100,100 L80,100 L80,20 L0,20 Z" />
            <circle cx="50" cy="50" r="8" style={{ fill: theme.primary }} />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: theme.accent }}>
            <path d="M0,0 L20,0 L20,80 L100,80 L100,100 L0,100 Z" />
            <circle cx="50" cy="50" r="8" style={{ fill: theme.primary }} />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: theme.accent }}>
            <path d="M0,80 L80,80 L80,0 L100,0 L100,100 L0,100 Z" />
            <circle cx="50" cy="50" r="8" style={{ fill: theme.primary }} />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-16 py-12">
        {/* Header with Om Symbol */}
        <div className="text-center mb-8">
          {data.religiousSymbol && data.religiousSymbol !== 'none' && (
            <div 
              className="text-6xl mb-4"
              style={{ color: theme.primary }}
            >
              {data.religiousSymbol}
            </div>
          )}
          <h1 
            className="text-5xl font-bold mb-2 tracking-wide"
            style={{ color: theme.secondary }}
          >
            BIODATA
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div 
              className="h-px flex-1"
              style={{ backgroundColor: theme.accent }}
            />
            <h2 
              className="text-3xl font-semibold"
              style={{ color: theme.accent }}
            >
              {data.fullName}
            </h2>
            <div 
              className="h-px flex-1"
              style={{ backgroundColor: theme.accent }}
            />
          </div>
        </div>

        {/* Photo Section */}
        {data.photos && data.photos.length > 0 && (
          <div className="absolute top-20 right-20">
            <div
              className="w-40 h-48 overflow-hidden border-4 shadow-xl"
              style={{ borderColor: theme.primary }}
            >
              <img
                src={data.photos[0]}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Personal Details */}
            <GoldenSection title="PERSONAL DETAILS" theme={theme}>
              <GoldenRow label="Date of Birth" value={data.dateOfBirth} />
              {data.timeOfBirth && <GoldenRow label="Time of Birth" value={data.timeOfBirth} />}
              <GoldenRow label="Place of Birth" value={data.birthPlace} />
              <GoldenRow label="Height" value={data.height} />
              {data.complexion && <GoldenRow label="Complexion" value={data.complexion} />}
            </GoldenSection>

            {/* Astrological Details */}
            {visibleSections.horoscope && (
              <GoldenSection title="ASTROLOGICAL DETAILS" theme={theme}>
                {data.rashi && <GoldenRow label="Rasi (Moon Sign)" value={data.rashi} />}
                {data.nakshatra && <GoldenRow label="Nakshatra" value={data.nakshatra} />}
                {data.gotra && <GoldenRow label="Gotra" value={data.gotra} />}
                {data.manglik && <GoldenRow label="Manglik" value={data.manglik} />}
              </GoldenSection>
            )}

            {/* Education & Career */}
            {visibleSections.education && (
              <GoldenSection title="EDUCATION & CAREER" theme={theme}>
                <GoldenRow label="Education" value={data.education} />
                <GoldenRow label="Occupation" value={data.occupation} />
                {data.company && <GoldenRow label="Company" value={data.company} />}
                {visibleSections.income && data.income && (
                  <GoldenRow label="Income" value={data.income} />
                )}
              </GoldenSection>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Family Details */}
            <GoldenSection title="FAMILY DETAILS" theme={theme}>
              <GoldenRow label="Father's Name" value={data.fatherName} />
              {data.fatherOccupation && <GoldenRow label="Father's Occupation" value={data.fatherOccupation} />}
              <GoldenRow label="Mother's Name" value={data.motherName} />
              {data.motherOccupation && <GoldenRow label="Mother's Occupation" value={data.motherOccupation} />}
              {data.siblings && <GoldenRow label="Siblings" value={data.siblings} />}
              {data.familyLocation && <GoldenRow label="Family Location" value={data.familyLocation} />}
            </GoldenSection>

            {/* Contact Details */}
            <GoldenSection title="CONTACT DETAILS" theme={theme}>
              <GoldenRow label="Contact Number" value={data.contactNumber} />
              {data.email && <GoldenRow label="Email" value={data.email} />}
              <GoldenRow label="Address" value={data.address} />
              <GoldenRow label="City" value={data.city} />
              <GoldenRow label="State" value={data.state} />
            </GoldenSection>

            {/* Partner Preferences */}
            {visibleSections.preferences && (
              <GoldenSection title="PARTNER PREFERENCES" theme={theme}>
                {data.partnerAge && <GoldenRow label="Age" value={data.partnerAge} />}
                {data.partnerHeight && <GoldenRow label="Height" value={data.partnerHeight} />}
                {data.partnerEducation && <GoldenRow label="Education" value={data.partnerEducation} />}
                {data.partnerLocation && <GoldenRow label="Location" value={data.partnerLocation} />}
              </GoldenSection>
            )}
          </div>
        </div>

        {/* Custom Fields - Full Width */}
        {data.customFields && data.customFields.length > 0 && (
          <div className="mt-6">
            <GoldenSection title="ADDITIONAL INFORMATION" theme={theme}>
              {data.customFields.map((field, index) => (
                <GoldenRow key={index} label={field.label} value={field.value} />
              ))}
            </GoldenSection>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t-2" style={{ borderColor: theme.accent }}>
            <p className="text-sm font-semibold" style={{ color: theme.secondary }}>
            Created with ❤️ at sangam-biodata.com
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function GoldenSection({ 
  title, 
  children, 
  theme 
}: { 
  title: string; 
  children: React.ReactNode;
  theme: any;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="h-px flex-1"
          style={{ backgroundColor: theme.accent }}
        />
        <h3 
          className="text-sm font-bold tracking-widest"
          style={{ color: theme.primary }}
        >
          {title}
        </h3>
        <div 
          className="h-px flex-1"
          style={{ backgroundColor: theme.accent }}
        />
      </div>
      <div className="space-y-2 pl-2">
        {children}
      </div>
    </div>
  );
}

function GoldenRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 text-sm py-1">
      <span className="font-semibold text-gray-700">{label} :</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
