import { TemplateProps, defaultVisibleSections } from './BaseTemplate';

export default function TraditionalRedTemplate({ 
  data, 
  colorTheme,
  visibleSections = defaultVisibleSections 
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
        {/* Personal Details */}
        <Section title="Personal Details" theme={theme}>
          <DetailRow label="Date of Birth" value={data.dateOfBirth} />
          {data.timeOfBirth && <DetailRow label="Time of Birth" value={data.timeOfBirth} />}
          <DetailRow label="Birth Place" value={data.birthPlace} />
          <DetailRow label="Height" value={data.height} />
          {data.complexion && <DetailRow label="Complexion" value={data.complexion} />}
          <DetailRow label="Marital Status" value={data.maritalStatus} />
          {data.bloodGroup && <DetailRow label="Blood Group" value={data.bloodGroup} />}
        </Section>

        {/* Religious Details (Horoscope) */}
        {visibleSections.horoscope && (
          <Section title="Religious Details" theme={theme}>
            <DetailRow label="Religion" value={data.religion} />
            {data.caste && <DetailRow label="Caste" value={data.caste} />}
            {data.gotra && <DetailRow label="Gotra" value={data.gotra} />}
            {data.rashi && <DetailRow label="Rashi" value={data.rashi} />}
            {data.nakshatra && <DetailRow label="Nakshatra" value={data.nakshatra} />}
            {data.manglik && <DetailRow label="Manglik" value={data.manglik} />}
          </Section>
        )}

        {/* Education & Career */}
        {visibleSections.education && (
          <Section title="Education & Career" theme={theme}>
            <DetailRow label="Education" value={data.education} />
            <DetailRow label="Occupation" value={data.occupation} />
            {data.company && <DetailRow label="Company" value={data.company} />}
            {visibleSections.income && data.income && (
              <DetailRow label="Income" value={data.income} />
            )}
          </Section>
        )}

        {/* Family Details */}
        <Section title="Family Details" theme={theme}>
          <DetailRow label="Father's Name" value={data.fatherName} />
          {data.fatherOccupation && <DetailRow label="Father's Occupation" value={data.fatherOccupation} />}
          <DetailRow label="Mother's Name" value={data.motherName} />
          {data.motherOccupation && <DetailRow label="Mother's Occupation" value={data.motherOccupation} />}
          {data.siblings && <DetailRow label="Siblings" value={data.siblings} />}
          {data.familyLocation && <DetailRow label="Family Location" value={data.familyLocation} />}
          {data.familyValues && <DetailRow label="Family Values" value={data.familyValues} />}
        </Section>

        {/* Contact Details */}
        <Section title="Contact Details" theme={theme}>
          <DetailRow label="Contact Number" value={data.contactNumber} />
          {data.email && <DetailRow label="Email" value={data.email} />}
          <DetailRow label="Address" value={data.address} />
          <DetailRow label="City" value={data.city} />
          <DetailRow label="State" value={data.state} />
        </Section>

        {/* Partner Preferences */}
        {visibleSections.preferences && (
          <Section title="Partner Preferences" theme={theme}>
            {data.partnerAge && <DetailRow label="Age" value={data.partnerAge} />}
            {data.partnerHeight && <DetailRow label="Height" value={data.partnerHeight} />}
            {data.partnerLocation && <DetailRow label="Location" value={data.partnerLocation} />}
            {data.partnerEducation && <DetailRow label="Education" value={data.partnerEducation} />}
            {data.partnerOccupation && <DetailRow label="Occupation" value={data.partnerOccupation} />}
            {data.partnerManglik && <DetailRow label="Manglik Preference" value={data.partnerManglik} />}
          </Section>
        )}

        {/* Custom Fields */}
        {data.customFields && data.customFields.length > 0 && (
          <Section title="Additional Information" theme={theme}>
            {data.customFields.map((field, index) => (
              <DetailRow key={index} label={field.label} value={field.value} />
            ))}
          </Section>
        )}
      </div>

      {/* Footer */}
      <div 
        className="px-8 py-6 text-center text-white text-sm"
        style={{ backgroundColor: theme.primary }}
      >
        <p>Created with ❤️ at VivahBio.com</p>
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

function DetailRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  
  return (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
