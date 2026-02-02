import { TemplateProps, defaultVisibleSections } from './BaseTemplate';

export default function ModernMinimalTemplate({ 
  data, 
  colorTheme,
  visibleSections = defaultVisibleSections,
  layoutStyle = 'compact'
}: TemplateProps) {
  const theme = colorTheme || {
    primary: '#2C3E50',
    secondary: '#34495E',
    accent: '#3498DB',
    background: '#FFFFFF',
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl">
      {/* Minimalist Header */}
      <div className="px-12 pt-16 pb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 
              className="text-5xl font-light tracking-tight mb-2"
              style={{ color: theme.primary }}
            >
              {data.fullName}
            </h1>
            <div className="flex items-center gap-4 text-sm mt-4" style={{ color: theme.secondary }}>
              <span>{data.gender}</span>
              <span>•</span>
              <span>{data.dateOfBirth}</span>
              <span>•</span>
              <span>{data.city}, {data.state}</span>
            </div>
          </div>
          
          {/* Photo - Single, Right Aligned */}
          {data.photos && data.photos.length > 0 && (
            <div className="w-32 h-32 rounded-lg overflow-hidden border shadow-md">
              <img
                src={data.photos[0]}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Accent Line */}
      <div 
        className="h-1 mx-12"
        style={{ backgroundColor: theme.accent }}
      />

      {/* Main Content - Ordered Details */}
      <div className="px-12 py-12">
        <MinimalSection title="Biodata Details" theme={theme}>
          <MinimalDetail label="Name" value={data.fullName} layout={layoutStyle} />
          <MinimalDetail label="Birth Name" value={data.birthName || ""} layout={layoutStyle} />
          <MinimalDetail label="Birth Time" value={data.timeOfBirth || ""} layout={layoutStyle} />
          <MinimalDetail label="Birth Date" value={data.dateOfBirth} layout={layoutStyle} />
          <MinimalDetail label="Birth Place" value={data.birthPlace} layout={layoutStyle} />
          <MinimalDetail label="Height" value={data.height} layout={layoutStyle} />
          <MinimalDetail label="Gotra" value={data.gotra || ""} layout={layoutStyle} />
          <MinimalDetail label="Nadi" value={data.nadi || ""} layout={layoutStyle} />
          <MinimalDetail label="Mamekul" value={data.mamekul || ""} layout={layoutStyle} />
          <MinimalDetail label="Kul" value={data.kul || ""} layout={layoutStyle} />
          <MinimalDetail label="Bloodgroup" value={data.bloodGroup || ""} layout={layoutStyle} />
          <MinimalDetail label="Nakshtra" value={data.nakshatra || ""} layout={layoutStyle} />
          <MinimalDetail label="Charan" value={data.charan || ""} layout={layoutStyle} />
          <MinimalDetail label="Ras" value={data.ras || data.rashi || ""} layout={layoutStyle} />
          <MinimalDetail label="Cast" value={data.caste || ""} layout={layoutStyle} />
          <MinimalDetail label="Education" value={data.education} layout={layoutStyle} />
          <MinimalDetail label="Job" value={data.occupation} layout={layoutStyle} />
          <MinimalDetail label="Job City" value={data.jobCity || ""} layout={layoutStyle} />
          <MinimalDetail label="Yearly Income" value={data.yearlyIncome || data.income || ""} layout={layoutStyle} />
          <MinimalDetail label="Father's Name" value={data.fatherName} layout={layoutStyle} />
          <MinimalDetail label="Occupation" value={data.fatherOccupation || ""} layout={layoutStyle} />
          <MinimalDetail label="Mother's Name" value={data.motherName} layout={layoutStyle} />
          <MinimalDetail label="Occupation" value={data.motherOccupation || ""} layout={layoutStyle} />
          <MinimalDetail label="Siblings" value={data.siblings || ""} layout={layoutStyle} />
          <MinimalDetail label="Address" value={data.address || data.familyLocation || ""} layout={layoutStyle} />
          <MinimalDetail label="State" value={data.state || ""} layout={layoutStyle} />
          <MinimalDetail label="Contact Details" value={data.contactDetails || data.contactNumber || ""} layout={layoutStyle} />
          <MinimalDetail label="EXPECtations" value={data.expectations || ""} layout={layoutStyle} />
        </MinimalSection>
      </div>

      {/* Footer */}
      <div 
        className="px-12 py-8 text-center text-sm"
        style={{ 
          backgroundColor: theme.primary,
          color: 'white'
        }}
      >
        <p className="font-light">{data.watermarkText || "sangam-biodata.com"}</p>
      </div>
    </div>
  );
}

// Helper Components
function MinimalSection({ 
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
      <h3 
        className="text-xs uppercase tracking-widest font-semibold mb-4"
        style={{ color: theme.accent }}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function MinimalDetail({ label, value, layout = 'compact' }: { label: string; value: string; layout?: 'spread' | 'compact' | 'inline' }) {
  const safeValue = value || "—";
  
  if (layout === 'spread') {
    return (
      <div className="text-sm flex justify-between items-center">
        <span className="text-gray-500">{label}</span>
        <p className="text-gray-900 font-medium">{safeValue}</p>
      </div>
    );
  }
  
  if (layout === 'inline') {
    return (
      <span className="inline text-sm">
        <span className="text-gray-500">{label}:</span>{' '}
        <span className="text-gray-900 font-medium">{safeValue}</span>
        <span className="text-gray-400 mx-2">•</span>
      </span>
    );
  }
  
  // compact (default)
  return (
    <div className="text-sm">
      <span className="text-gray-500">{label}:</span>
      <p className="text-gray-900 mt-0.5 font-medium">{safeValue}</p>
    </div>
  );
}
