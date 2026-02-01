/**
 * Base Template Interface
 * All template components should implement this structure
 */

export interface TemplateProps {
  data: BiodataData;
  colorTheme?: ColorTheme;
  visibleSections?: VisibleSections;
  layoutStyle?: 'spread' | 'compact' | 'inline';
}

export interface BiodataData {
  // Personal Details
  fullName: string;
  birthName?: string;
  gender: string;
  dateOfBirth: string;
  timeOfBirth?: string;
  birthPlace: string;
  height: string;
  complexion?: string;
  maritalStatus: string;
  bloodGroup?: string;
  
  // Religious Details
  religion: string;
  caste?: string;
  gotra?: string;
  nadi?: string;
  mamekul?: string;
  kul?: string;
  rashi?: string;
  ras?: string;
  nakshatra?: string;
  charan?: string;
  manglik?: string;
  religiousSymbol?: string;
  
  // Education & Career
  education: string;
  occupation: string;
  jobCity?: string;
  company?: string;
  income?: string;
  yearlyIncome?: string;
  
  // Family Details
  fatherName: string;
  fatherOccupation?: string;
  motherName: string;
  motherOccupation?: string;
  siblings?: string;
  familyLocation?: string;
  familyValues?: string;
  
  // Contact Details
  contactNumber: string;
  contactDetails?: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  
  // Partner Preferences
  partnerAge?: string;
  partnerHeight?: string;
  partnerLocation?: string;
  partnerEducation?: string;
  partnerOccupation?: string;
  partnerManglik?: string;
  expectations?: string;

  // Watermark / site name
  watermarkText?: string;
  
  // Photos (0-2)
  photos: string[];
  
  // Custom Fields (max 5)
  customFields: Array<{
    label: string;
    value: string;
  }>;
  
  // Layout preference
  layoutStyle?: 'spread' | 'compact' | 'inline';
}

export interface ColorTheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface VisibleSections {
  horoscope: boolean;
  education: boolean;
  income: boolean;
  preferences: boolean;
}

export const defaultVisibleSections: VisibleSections = {
  horoscope: true,
  education: true,
  income: true,
  preferences: true,
};
