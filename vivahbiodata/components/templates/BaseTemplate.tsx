/**
 * Base Template Interface
 * All template components should implement this structure
 */

export interface TemplateProps {
  data: BiodataData;
  colorTheme?: ColorTheme;
  visibleSections?: VisibleSections;
}

export interface BiodataData {
  // Personal Details
  fullName: string;
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
  rashi?: string;
  nakshatra?: string;
  manglik?: string;
  religiousSymbol?: string;
  
  // Education & Career
  education: string;
  occupation: string;
  company?: string;
  income?: string;
  
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
  
  // Photos (0-2)
  photos: string[];
  
  // Custom Fields (max 5)
  customFields: Array<{
    label: string;
    value: string;
  }>;
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
