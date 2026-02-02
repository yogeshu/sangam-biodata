import { TemplateProps, defaultVisibleSections } from './BaseTemplate';

export default function TraditionalRedTemplate({ 
  data, 
  colorTheme,
  visibleSections = defaultVisibleSections,
  layoutStyle = 'compact'
}: TemplateProps) {
  const theme = colorTheme || {
    primary: '#d41132',
    secondary: '#8B0000',
    accent: '#FFD700',
    background: '#FFF8F0',
  };

  const renderReligiousSymbol = () => {
    if (!data.religiousSymbol || data.religiousSymbol === 'none') return null;
    return (
      <div className="text-center text-6xl mb-4 opacity-20">
        {data.religiousSymbol}
      </div>
    );
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* Header with Religious Symbol */}
      <div 
        className="relative px-8 py-12 text-center"
        style={{ 
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          color: 'white'
        }}
      >
        {renderReligiousSymbol()}
        <h1 className="text-4xl font-bold mb-2">
          {data.fullName}
        </h1>
        <p className="text-lg opacity-90">
          {data.religion} | {data.caste || 'N/A'}
        </p>
        
        {/* Decorative corner elements */}
        <div 
          className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 rounded-tl-lg"
          style={{ borderColor: theme.accent }}
        />
        <div 
          className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 rounded-tr-lg"
          style={{ borderColor: theme.accent }}
        />
        <div 
          className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 rounded-bl-lg"
          style={{ borderColor: theme.accent }}
        />
        <div 
          className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 rounded-br-lg"
          style={{ borderColor: theme.accent }}
        />
      </div>

      {/* Photo Section */}
      {data.photos && data.photos.length > 0 && (
        <div className="flex justify-center gap-6 px-8 -mt-16 relative z-10">
          {data.photos.slice(0, 2).map((photo, index) => (
            <div
              key={index}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="px-8 py-8 space-y-8">
        <Section title="Biodata Details" theme={theme}>
          <DetailRow label="Name" value={data.fullName} layout={layoutStyle} />
          <DetailRow label="Birth Name" value={data.birthName || ""} layout={layoutStyle} />
          <DetailRow label="Birth Time" value={data.timeOfBirth || ""} layout={layoutStyle} />
          <DetailRow label="Birth Date" value={data.dateOfBirth} layout={layoutStyle} />
          <DetailRow label="Birth Place" value={data.birthPlace} layout={layoutStyle} />
          <DetailRow label="Height" value={data.height} layout={layoutStyle} />
          <DetailRow label="Gotra" value={data.gotra || ""} layout={layoutStyle} />
          <DetailRow label="Nadi" value={data.nadi || ""} layout={layoutStyle} />
          <DetailRow label="Mamekul" value={data.mamekul || ""} layout={layoutStyle} />
          <DetailRow label="Kul" value={data.kul || ""} layout={layoutStyle} />
          <DetailRow label="Bloodgroup" value={data.bloodGroup || ""} layout={layoutStyle} />
          <DetailRow label="Nakshtra" value={data.nakshatra || ""} layout={layoutStyle} />
          <DetailRow label="Charan" value={data.charan || ""} layout={layoutStyle} />
          <DetailRow label="Ras" value={data.ras || data.rashi || ""} layout={layoutStyle} />
          <DetailRow label="Cast" value={data.caste || ""} layout={layoutStyle} />
          <DetailRow label="Education" value={data.education} layout={layoutStyle} />
          <DetailRow label="Job" value={data.occupation} layout={layoutStyle} />
          <DetailRow label="Job City" value={data.jobCity || ""} layout={layoutStyle} />
          <DetailRow label="Yearly Income" value={data.yearlyIncome || data.income || ""} layout={layoutStyle} />
          <DetailRow label="Father's Name" value={data.fatherName} layout={layoutStyle} />
          <DetailRow label="Occupation" value={data.fatherOccupation || ""} layout={layoutStyle} />
          <DetailRow label="Mother's Name" value={data.motherName} layout={layoutStyle} />
          <DetailRow label="Occupation" value={data.motherOccupation || ""} layout={layoutStyle} />
          <DetailRow label="Siblings" value={data.siblings || ""} layout={layoutStyle} />
          <DetailRow label="Address" value={data.address || data.familyLocation || ""} layout={layoutStyle} />
          <DetailRow label="State" value={data.state || ""} layout={layoutStyle} />
          <DetailRow label="Contact Details" value={data.contactDetails || data.contactNumber || ""} layout={layoutStyle} />
          <DetailRow label="EXPECtations" value={data.expectations || ""} layout={layoutStyle} />
        </Section>
      </div>

      {/* Footer */}
      <div 
        className="px-8 py-6 text-center text-white text-sm"
        style={{ backgroundColor: theme.primary }}
      >
        <p>{data.watermarkText || "sangam-biodata.com"}</p>
        <p className="opacity-75 mt-1">Making Matrimony Beautiful</p>
      </div>
    </div>
  );
}

// Helper Components
function Section({ 
  title, 
  children, 
  theme 
}: { 
  title: string; 
  children: React.ReactNode;
  theme: any;
}) {
  return (
    <div className="border-l-4 pl-6" style={{ borderColor: theme.primary }}>
      <h2 
        className="text-2xl font-bold mb-4"
        style={{ color: theme.primary }}
      >
        {title}
      </h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value, layout = 'compact' }: { label: string; value: string; layout?: 'spread' | 'compact' | 'inline' }) {
  const safeValue = value || "—";
  
  if (layout === 'spread') {
    return (
      <div className="flex justify-between py-2 border-b border-gray-100">
        <span className="font-semibold text-gray-700">{label}:</span>
        <span className="text-gray-900">{safeValue}</span>
      </div>
    );
  }
  
  if (layout === 'inline') {
    return (
      <span className="inline text-sm text-gray-900">
        <span className="font-semibold text-gray-700">{label}:</span> {safeValue}
        <span className="text-gray-400 mx-2">•</span>
      </span>
    );
  }
  
  // compact (default)
  return (
    <div className="py-1.5 text-sm">
      <span className="font-semibold text-gray-700">{label}:</span>{' '}
      <span className="text-gray-900">{safeValue}</span>
    </div>
  );
}
