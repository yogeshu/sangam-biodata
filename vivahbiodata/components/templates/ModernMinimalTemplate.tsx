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

      {/* Main Content - Two Column Layout */}
      <div className="px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Personal */}
          <MinimalSection title="Personal" theme={theme}>
            <MinimalDetail label="Height" value={data.height} layout={layoutStyle} />
            <MinimalDetail label="Marital Status" value={data.maritalStatus} layout={layoutStyle} />
            {data.bloodGroup && <MinimalDetail label="Blood Group" value={data.bloodGroup} layout={layoutStyle} />}
            <MinimalDetail label="Birth Place" value={data.birthPlace} layout={layoutStyle} />
          </MinimalSection>

          {/* Religious */}
          {visibleSections.horoscope && (
            <MinimalSection title="Religious Background" theme={theme}>
              <MinimalDetail label="Religion" value={data.religion} layout={layoutStyle} />
              {data.caste && <MinimalDetail label="Caste" value={data.caste} layout={layoutStyle} />}
              {data.rashi && <MinimalDetail label="Rashi" value={data.rashi} layout={layoutStyle} />}
              {data.nakshatra && <MinimalDetail label="Nakshatra" value={data.nakshatra} layout={layoutStyle} />}
            </MinimalSection>
          )}

          {/* Education & Career */}
          {visibleSections.education && (
            <MinimalSection title="Professional" theme={theme}>
              <MinimalDetail label="Education" value={data.education} layout={layoutStyle} />
              <MinimalDetail label="Occupation" value={data.occupation} layout={layoutStyle} />
              {data.company && <MinimalDetail label="Organization" value={data.company} layout={layoutStyle} />}
              {visibleSections.income && data.income && (
                <MinimalDetail label="Income" value={data.income} layout={layoutStyle} />
              )}
            </MinimalSection>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Family */}
          <MinimalSection title="Family" theme={theme}>
            <MinimalDetail label="Father" value={data.fatherName} layout={layoutStyle} />
            {data.fatherOccupation && <MinimalDetail label="Father's Occupation" value={data.fatherOccupation} layout={layoutStyle} />}
            <MinimalDetail label="Mother" value={data.motherName} layout={layoutStyle} />
            {data.motherOccupation && <MinimalDetail label="Mother's Occupation" value={data.motherOccupation} layout={layoutStyle} />}
            {data.siblings && <MinimalDetail label="Siblings" value={data.siblings} layout={layoutStyle} />}
          </MinimalSection>

          {/* Contact */}
          <MinimalSection title="Contact" theme={theme}>
            <MinimalDetail label="Phone" value={data.contactNumber} layout={layoutStyle} />
            {data.email && <MinimalDetail label="Email" value={data.email} layout={layoutStyle} />}
            <MinimalDetail label="Address" value={`${data.address}, ${data.city}`} layout={layoutStyle} />
          </MinimalSection>

          {/* Partner Preferences */}
          {visibleSections.preferences && (
            <MinimalSection title="Preferences" theme={theme}>
              {data.partnerAge && <MinimalDetail label="Age" value={data.partnerAge} layout={layoutStyle} />}
              {data.partnerHeight && <MinimalDetail label="Height" value={data.partnerHeight} layout={layoutStyle} />}
              {data.partnerEducation && <MinimalDetail label="Education" value={data.partnerEducation} layout={layoutStyle} />}
              {data.partnerLocation && <MinimalDetail label="Location" value={data.partnerLocation} layout={layoutStyle} />}
            </MinimalSection>
          )}
        </div>
      </div>

      {/* Custom Fields - Full Width */}
      {data.customFields && data.customFields.length > 0 && (
        <div className="px-12 pb-12">
          <MinimalSection title="Additional Information" theme={theme}>
            {data.customFields.map((field, index) => (
              <MinimalDetail key={index} label={field.label} value={field.value} />
            ))}
          </MinimalSection>
        </div>
      )}

      {/* Footer */}
      <div 
        className="px-12 py-8 text-center text-sm"
        style={{ 
          backgroundColor: theme.primary,
          color: 'white'
        }}
      >
        <p className="font-light">VivahBio.com</p>
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
  if (!value) return null;
  
  if (layout === 'spread') {
    return (
      <div className="text-sm flex justify-between items-center">
        <span className="text-gray-500">{label}</span>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    );
  }
  
  if (layout === 'inline') {
    return (
      <span className="inline text-sm">
        <span className="text-gray-500">{label}:</span>{' '}
        <span className="text-gray-900 font-medium">{value}</span>
        <span className="text-gray-400 mx-2">•</span>
      </span>
    );
  }
  
  // compact (default)
  return (
    <div className="text-sm">
      <span className="text-gray-500">{label}:</span>
      <p className="text-gray-900 mt-0.5 font-medium">{value}</p>
    </div>
  );
}
