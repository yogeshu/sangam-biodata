/**
 * LocalStorage utility for managing biodata form data
 * Stores temporary biodata before user login
 */

const STORAGE_KEYS = {
  BIODATA_DRAFT: 'vivahbio_biodata_draft',
  BIODATA_PHOTOS: 'vivahbio_biodata_photos',
  FORM_STEP: 'vivahbio_form_step',
  SELECTED_TEMPLATE: 'vivahbio_selected_template',
  SELECTED_COLOR_THEME: 'vivahbio_selected_color_theme',
  AUTO_SAVE_TIME: 'vivahbio_auto_save_time',
} as const;

export interface BiodataFormData {
  // Personal Details
  fullName: string;
  birthName?: string;
  gender: string;
  dateOfBirth: string;
  timeOfBirth: string;
  birthPlace: string;
  height: string;
  complexion: string;
  maritalStatus: string;
  bloodGroup: string;
  
  // Religious Details
  religion: string;
  caste: string;
  gotra: string;
  nadi?: string;
  mamekul?: string;
  kul?: string;
  rashi: string;
  ras?: string;
  nakshatra: string;
  charan?: string;
  manglik: string;
  
  // Education & Career
  education: string;
  occupation: string;
  jobCity?: string;
  company: string;
  incomeRange: string;
  yearlyIncome?: string;
  
  // Family Details
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyLocation: string;
  familyValues: string;
  
  // Contact Details
  contactNumber: string;
  contactNumbers?: Array<{ type: "Self" | "Parent" | "Relative"; number: string }>;
  email: string;
  address: string;
  city: string;
  state: string;
  
  // Partner Preferences
  partnerAge: string;
  partnerHeight: string;
  partnerLocation: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerManglik: string;
  partnerExpectationsMode?: 'simple' | 'detailed';
  partnerExpectationsText?: string;
  expectations?: string;
  watermarkText?: string;
  
  // Custom Fields (max 5)
  customFields: Array<{
    label: string;
    value: string;
  }>;
  
  // Photo
  photoUrl?: string;
}

/**
 * Save biodata form data to localStorage
 */
export function saveBiodataToLocal(data: Partial<BiodataFormData>): void {
  try {
    const existing = loadBiodataFromLocal();
    const merged = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEYS.BIODATA_DRAFT, JSON.stringify(merged));
    localStorage.setItem(STORAGE_KEYS.AUTO_SAVE_TIME, new Date().toISOString());
  } catch (error) {
    console.error('Failed to save biodata to localStorage:', error);
  }
}

/**
 * Load biodata form data from localStorage
 */
export function loadBiodataFromLocal(): Partial<BiodataFormData> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BIODATA_DRAFT);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Failed to load biodata from localStorage:', error);
    return {};
  }
}

/**
 * Clear biodata draft from localStorage
 */
export function clearBiodataLocal(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.BIODATA_DRAFT);
    localStorage.removeItem(STORAGE_KEYS.BIODATA_PHOTOS);
    localStorage.removeItem(STORAGE_KEYS.FORM_STEP);
    localStorage.removeItem(STORAGE_KEYS.SELECTED_TEMPLATE);
    localStorage.removeItem(STORAGE_KEYS.SELECTED_COLOR_THEME);
    localStorage.removeItem(STORAGE_KEYS.AUTO_SAVE_TIME);
  } catch (error) {
    console.error('Failed to clear biodata from localStorage:', error);
  }
}

/**
 * Save photos separately to avoid URL length issues
 */
export function savePhotosToLocal(photos: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BIODATA_PHOTOS, JSON.stringify(photos));
  } catch (error) {
    console.error('Failed to save photos to localStorage:', error);
  }
}

/**
 * Load photos from localStorage
 */
export function loadPhotosFromLocal(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BIODATA_PHOTOS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load photos from localStorage:', error);
    return [];
  }
}

/**
 * Save current step in form
 */
export function saveCurrentStep(step: number): void {
  try {
    localStorage.setItem(STORAGE_KEYS.FORM_STEP, step.toString());
  } catch (error) {
    console.error('Failed to save current step:', error);
  }
}

/**
 * Load current step from localStorage
 */
export function loadCurrentStep(): number {
  try {
    const step = localStorage.getItem(STORAGE_KEYS.FORM_STEP);
    return step ? parseInt(step, 10) : 0;
  } catch (error) {
    console.error('Failed to load current step:', error);
    return 0;
  }
}

/**
 * Save selected template ID and optional color theme
 */
export function saveSelectedTemplate(templateId: string, colorTheme?: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SELECTED_TEMPLATE, templateId);
    if (colorTheme) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_COLOR_THEME, colorTheme);
    }
  } catch (error) {
    console.error('Failed to save selected template:', error);
  }
}

/**
 * Load selected template ID
 */
export function loadSelectedTemplate(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_TEMPLATE);
  } catch (error) {
    console.error('Failed to load selected template:', error);
    return null;
  }
}

/**
 * Load selected color theme
 */
export function loadSelectedColorTheme(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_COLOR_THEME);
  } catch (error) {
    console.error('Failed to load selected color theme:', error);
    return null;
  }
}

/**
 * Get last auto-save time
 */
export function getLastAutoSaveTime(): Date | null {
  try {
    const time = localStorage.getItem(STORAGE_KEYS.AUTO_SAVE_TIME);
    return time ? new Date(time) : null;
  } catch (error) {
    console.error('Failed to get last auto-save time:', error);
    return null;
  }
}

/**
 * Check if there's a saved draft
 */
export function hasSavedDraft(): boolean {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BIODATA_DRAFT);
    return data !== null && data !== '{}';
  } catch (error) {
    return false;
  }
}

/**
 * Auto-save hook for form data (debounced)
 */
export function useAutoSave(data: Partial<BiodataFormData>, delay: number = 3000) {
  if (typeof window === 'undefined') return;
  
  const timeoutId = setTimeout(() => {
    saveBiodataToLocal(data);
  }, delay);
  
  return () => clearTimeout(timeoutId);
}
