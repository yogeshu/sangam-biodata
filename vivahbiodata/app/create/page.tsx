"use client";

import type { ChangeEvent, ReactNode, FC } from "react";
import { useEffect, useMemo, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CommonLayout from "@/components/common/CommonLayout";
import { loadBiodataFromLocal, saveBiodataToLocal, saveCurrentStep, loadCurrentStep, savePhotosToLocal, loadSelectedTemplate, saveSelectedTemplate } from "@/lib/utils/storage";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Save,
  Sparkles,
  Star,
  Users,
  Upload,
  Plus,
  X,
  Eye,
  EyeOff,
  AlertCircle,
  DollarSign,
} from "lucide-react";

type StepKey = "personal" | "family" | "horoscope" | "preferences";

type FormState = {
  fullName: string;
  birthName: string;
  gender: string;
  dateOfBirth: string;
  timeOfBirth: string;
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  gothra: string;
  nadi: string;
  mamekul: string;
  kul: string;
  education: string;
  occupation: string;
  jobCity: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyLocation: string;
  incomeRange: string;
  yearlyIncome: string;
  familyValues: string;
  birthPlace: string;
  rashi: string;
  ras: string;
  nakshatra: string;
  charan: string;
  manglik: string;
  bloodGroup: string;
  partnerExpectationsMode: 'simple' | 'detailed'; // Mode for partner expectations input
  partnerExpectationsText: string; // Simple one-line partner expectations
  partnerAge: string;
  partnerHeight: string;
  partnerLocation: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerManglik: string;
  watermarkText: string;
  // Contact numbers (self, parent, relative) - min 1, max 3
  contactNumbers: Array<{ type: "Self" | "Parent" | "Relative"; number: string }>;
  state: string;
  // New fields for Phase 2
  photos: string[]; // URLs of uploaded photos (max 2)
  religiousSymbol: string; // Selected religious symbol
  customFields: Array<{ label: string; value: string }>; // Max 5 custom fields
  visibleSections: {
    horoscope: boolean;
    education: boolean;
    income: boolean;
    preferences: boolean;
  };
  layoutStyle: 'spread' | 'compact' | 'inline';
};

type Step = {
  key: StepKey;
  label: string;
  description: string;
  icon: FC<{ size?: number }>;
};

const steps: Step[] = [
  { key: "personal", label: "Personal", description: "Basics to start your biodata", icon: Heart },
  { key: "family", label: "Family", description: "Immediate family information", icon: Users },
  { key: "horoscope", label: "Horoscope", description: "Astro & cultural details", icon: Sparkles },
  { key: "preferences", label: "Preferences", description: "Partner expectations & contact", icon: Star },
];

function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

function CreateBiodataContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allowSkipValidation = searchParams?.get("skipValidation") === "1";
  const isTestMode = searchParams?.get("test") === "1";
  const stepParam = searchParams?.get("step");
  const templateParam = searchParams?.get("template");

  // Sample data for testing
  const getSampleData = (): FormState => ({
    fullName: "Priya Sharma",
    birthName: "Priya",
    gender: "Female",
    dateOfBirth: "1998-05-15",
    timeOfBirth: "10:30",
    height: "5'4\"",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Brahmin",
    gothra: "Bharadwaj",
    nadi: "Antya",
    mamekul: "Sharma",
    kul: "Kashyapa",
    education: "MBA in Finance",
    occupation: "Senior Financial Analyst",
    jobCity: "Mumbai",
    fatherName: "Mr. Rajesh Sharma",
    fatherOccupation: "Retired Government Officer",
    motherName: "Mrs. Sunita Sharma",
    motherOccupation: "Homemaker",
    siblings: "One younger brother",
    familyLocation: "Mumbai, Maharashtra",
    incomeRange: "₹12-15 Lakhs per annum",
    yearlyIncome: "₹12-15 Lakhs per annum",
    familyValues: "Traditional with modern outlook",
    birthPlace: "Mumbai, Maharashtra",
    rashi: "Taurus",
    ras: "Vrishabh",
    nakshatra: "Rohini",
    charan: "2nd",
    manglik: "No",
    bloodGroup: "O+",
    partnerExpectationsMode: 'detailed',
    partnerExpectationsText: "",
    partnerAge: "28-32 years",
    partnerHeight: "5'8\" and above",
    partnerLocation: "Mumbai, Pune, or nearby cities",
    partnerEducation: "Graduate or Post-Graduate",
    partnerOccupation: "Well-settled professional",
    partnerManglik: "No preference",
    watermarkText: "sangam-biodata.com",
    contactNumbers: [
      { type: "Self", number: "98765 43210" },
      { type: "Parent", number: "99876 54321" },
    ],
    state: "Maharashtra",
    photos: [],
    religiousSymbol: "🕉️",
    customFields: [
      { label: "Hobbies", value: "Reading, Yoga, Traveling" },
      { label: "Languages Known", value: "Hindi, English, Marathi" }
    ],
    visibleSections: {
      horoscope: true,
      education: true,
      income: true,
      preferences: true,
    },
    layoutStyle: 'compact',
  });

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("premium-golden");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [data, setData] = useState<FormState>(isTestMode ? getSampleData() : {
    fullName: "",
    birthName: "",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
    height: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    gothra: "",
    nadi: "",
    mamekul: "",
    kul: "",
    education: "",
    occupation: "",
    jobCity: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    familyLocation: "",
    incomeRange: "",
    yearlyIncome: "",
    familyValues: "",
    birthPlace: "",
    rashi: "",
    ras: "",
    nakshatra: "",
    charan: "",
    manglik: "",
    bloodGroup: "",
    partnerExpectationsMode: 'detailed',
    partnerExpectationsText: "",
    partnerAge: "",
    partnerHeight: "",
    partnerLocation: "",
    partnerEducation: "",
    partnerOccupation: "",
    partnerManglik: "",
    watermarkText: "sangam-biodata.com",
    contactNumbers: [{ type: "Self", number: "" }],
    state: "",
    // New fields
    photos: [],
    religiousSymbol: "🕉️", // Default Om symbol
    customFields: [],
    visibleSections: {
      horoscope: true,
      education: true,
      income: true,
      preferences: true,
    },
    layoutStyle: 'compact',
  });

  const progress = useMemo(() => Math.round(((currentStep + 1) / steps.length) * 100), [currentStep]);

  useEffect(() => {
    if (allowSkipValidation) {
      setErrors({});
    }
  }, [allowSkipValidation]);

  useEffect(() => {
    if (isTestMode) return;

    const savedData = loadBiodataFromLocal() as Partial<FormState>;
    const hasSavedData = savedData && Object.keys(savedData).length > 0 && !!savedData.fullName;
    if (hasSavedData) {
      setData((prev) => ({ ...prev, ...savedData }));
    }

    const savedStep = loadCurrentStep();
    const parsedStep = stepParam ? parseInt(stepParam, 10) : NaN;
    if (!Number.isNaN(parsedStep)) {
      setCurrentStep(Math.min(parsedStep, steps.length - 1));
    } else if (hasSavedData && savedStep) {
      setCurrentStep(Math.min(savedStep, steps.length - 1));
    } else {
      setCurrentStep(0);
      saveCurrentStep(0);
    }

    const storedTemplate = templateParam || loadSelectedTemplate();
    if (storedTemplate) {
      setSelectedTemplate(storedTemplate);
    }
  }, [isTestMode, stepParam, templateParam]);

  useEffect(() => {
    if (!isTestMode) {
      saveBiodataToLocal(data);
    }
  }, [data, isTestMode]);

  useEffect(() => {
    saveCurrentStep(currentStep);
  }, [currentStep]);

  useEffect(() => {
    if (selectedTemplate) {
      saveSelectedTemplate(selectedTemplate);
    }
  }, [selectedTemplate]);

  const validateStep = (): boolean => {
    if (allowSkipValidation) {
      setErrors({});
      return true;
    }
    const newErrors: Record<string, string> = {};

    if (currentStep === 0) {
      // Personal Information
      if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!data.gender) newErrors.gender = "Gender is required";
      if (!data.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!data.timeOfBirth) newErrors.timeOfBirth = "Time of birth is required";
      if (!data.birthPlace.trim()) newErrors.birthPlace = "Birth place is required";
      if (!data.height) newErrors.height = "Height is required";
      if (!data.bloodGroup) newErrors.bloodGroup = "Blood group is required";
      if (!data.maritalStatus) newErrors.maritalStatus = "Marital status is required";
      if (!data.caste.trim()) newErrors.caste = "Caste is required";
      if (!data.gothra.trim()) newErrors.gothra = "Gothra is required";
      if (!data.education.trim()) newErrors.education = "Education is required";
      if (!data.occupation.trim()) newErrors.occupation = "Occupation/Job is required";
    }

    if (currentStep === 1) {
      // Family Information
      if (!data.fatherName.trim()) newErrors.fatherName = "Father's name is required";
      if (!data.motherName.trim()) newErrors.motherName = "Mother's name is required";
      if (!data.familyLocation.trim()) newErrors.familyLocation = "Address/Family location is required";
      if (!data.incomeRange || data.incomeRange === "") newErrors.incomeRange = "Annual income/package is required (select N/A if not applicable)";
      if (!data.siblings.trim()) newErrors.siblings = "Please specify sibling details (even if none)";
    }

    if (currentStep === 2) {
      // Horoscope Details
      if (!data.rashi) newErrors.rashi = "Rashi/Sign is required";
      if (!data.nakshatra.trim()) newErrors.nakshatra = "Nakshatra is required";
    }

    if (currentStep === 3) {
      // Preferences & Contact - partner expectations optional but need at least one mode filled
      if (data.partnerExpectationsMode === 'detailed') {
        // For detailed mode, at least one field should be filled OR all can be empty (optional)
        const hasAnyDetailField = data.partnerAge.trim() || data.partnerHeight.trim() || data.partnerLocation.trim() || data.partnerEducation.trim() || data.partnerOccupation.trim();
        if (hasAnyDetailField) {
          // If any field is filled, validate that at least the basic ones are present
          if (!data.partnerAge.trim()) newErrors.partnerAge = "Age range is required (or leave all blank)";
          if (!data.partnerHeight.trim()) newErrors.partnerHeight = "Height preference is required (or leave all blank)";
          if (!data.partnerLocation.trim()) newErrors.partnerLocation = "Location preference is required (or leave all blank)";
        }
      } else if (data.partnerExpectationsMode === 'simple') {
        // For simple mode, the text field is required
        if (!data.partnerExpectationsText.trim()) newErrors.partnerExpectationsText = "Please describe your partner expectations";
      }
      if (!data.state) newErrors.state = "State is required";

      // Validate contact numbers - min 1, max 3
      const validNumbers = data.contactNumbers.filter(c => c.number.trim());
      if (validNumbers.length === 0) {
        newErrors.contactNumbers = "At least one contact number is required";
      } else if (validNumbers.length > 3) {
        newErrors.contactNumbers = "Maximum 3 contact numbers are allowed";
      } else {
        const cleanedNumbers = validNumbers.map(c => c.number.replace(/[^\d]/g, ""));
        const uniqueNumbers = new Set(cleanedNumbers);
        if (uniqueNumbers.size !== cleanedNumbers.length) {
          newErrors.contactNumbers = "Duplicate contact numbers are not allowed";
        }
        // Validate phone number format (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        validNumbers.forEach((contact, idx) => {
          const cleanNumber = contact.number.replace(/[^\d]/g, "");
          if (!phoneRegex.test(cleanNumber)) {
            newErrors[`contactNumber_${idx}`] = "Invalid phone number (10 digits required)";
          }
        });
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: keyof FormState, value: any) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name as string]) {
      setErrors((prev) => ({ ...prev, [name as string]: "" }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Handle special cases for arrays and objects
    if (name === 'photos' || name === 'customFields' || name === 'visibleSections') {
      handleChange(name as keyof FormState, value);
    } else {
      handleChange(name as keyof FormState, value);
      if (name === 'incomeRange') {
        handleChange('yearlyIncome', value);
      }
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep === steps.length - 1) {
        // Save photos separately to avoid URL length issues
        const { photos, ...dataWithoutPhotos } = data;
        import('@/lib/utils/storage').then(({ savePhotosToLocal }) => {
          savePhotosToLocal(photos);
        });
        // Navigate to preview with data (without photos in URL)
        router.push(`/preview?data=${encodeURIComponent(JSON.stringify(dataWithoutPhotos))}&template=${selectedTemplate}`);
      } else {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
  };
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <CommonLayout showFooter={false}>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main font-body">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 pt-8 md:px-8 lg:pt-12">
          <HeaderBar router={router} />

          <div className="rounded-2xl border border-border-soft bg-white dark:bg-midnight-accent shadow-sm">
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <StepperHeader progress={progress} currentStep={currentStep} />
              <StepTabs currentStep={currentStep} onStepChange={setCurrentStep} allowSkipValidation={allowSkipValidation} />
              <StepCard
                step={steps[currentStep]}
                data={data}
                onChange={handleInputChange}
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
                errors={errors}
                touched={touched}
                onErrorChange={setErrors}
              />
              <FooterNav
                onBack={prevStep}
                onNext={nextStep}
                isFirst={currentStep === 0}
                isLast={currentStep === steps.length - 1}
                errors={errors}
                allowSkipValidation={allowSkipValidation}
              />
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}

function HeaderBar({ router }: { router: any }) {
  const handleApplyTestData = () => {
    router.push('/create?test=1');
  };

  const handleClearTestData = () => {
    router.push('/create');
  };

  const searchParams = useSearchParams();
  const isTestMode = searchParams?.get("test") === "1";

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium hidden sm:inline">Back</span>
        </button>
        <div className="flex items-center gap-3 text-primary">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">sangam-biodata</p>
            <p className="text-base font-bold text-text-main">Biodata Builder</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isTestMode && (
          <button 
            onClick={handleClearTestData}
            className="flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
          >
            ✕ Clear Test Data
          </button>
        )}
        {!isTestMode && (
          <button 
            onClick={handleApplyTestData}
            className="flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 transition hover:bg-amber-100"
          >
            ⚡ Test Mode
          </button>
        )}
        <button className="flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10">
          <Save size={14} />
          <span className="hidden sm:inline">Save Draft</span>
        </button>
      </div>
    </div>
  );
}

function StepperHeader({ progress, currentStep }: { progress: number; currentStep: number }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Step {currentStep + 1} of {steps.length}</p>
          <h2 className="text-2xl font-bold text-text-main">Complete Your Profile</h2>
          <p className="text-sm text-text-muted">Fill in the details to generate a polished matrimonial biodata.</p>
        </div>
        <div className="text-sm font-semibold text-primary">{progress}% Completed</div>
      </div>
      <div className="h-2 rounded-full bg-border-soft">
        <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function StepTabs({ currentStep, onStepChange, allowSkipValidation }: { currentStep: number; onStepChange: (idx: number) => void; allowSkipValidation?: boolean }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const active = idx === currentStep;
        const completed = idx < currentStep;
        return (
          <button
            key={step.key}
            onClick={() => (allowSkipValidation || idx <= currentStep) && onStepChange(idx)}
            disabled={!allowSkipValidation && idx > currentStep}
            className={cn(
              "flex min-w-[180px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition disabled:cursor-not-allowed",
              active ? "border-primary bg-primary/5 text-primary shadow-sm" :
                completed ? "border-primary bg-primary/10 text-primary" :
                  "border-border-soft text-text-muted opacity-50"
            )}
          >
            <span className={cn("flex size-9 items-center justify-center rounded-lg", active ? "bg-primary/10 text-primary" : completed ? "bg-primary/20 text-primary" : "bg-border-soft text-text-muted")}>
              {completed ? <CheckCircle2 size={18} /> : <Icon size={18} />}
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{step.label}</span>
              <span className="text-xs text-text-muted">{step.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FooterNav({ onBack, onNext, isFirst, isLast, errors, allowSkipValidation }: { onBack: () => void; onNext: () => void; isFirst: boolean; isLast: boolean; errors: Record<string, string>; allowSkipValidation?: boolean }) {
  const hasErrors = !allowSkipValidation && Object.keys(errors).length > 0;

  return (
    <div className="flex flex-col gap-3 border-t border-border-soft pt-4 sm:flex-row sm:items-center sm:justify-between">
      <button
        onClick={onBack}
        disabled={isFirst}
        className={cn(
          "flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition",
          isFirst ? "cursor-not-allowed border-border-soft text-text-muted" : "border-border-soft text-text-main hover:border-primary/50 hover:text-primary"
        )}
        aria-label="Go to previous step"
      >
        <ArrowLeft size={16} />
        Back
      </button>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        {hasErrors && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 border border-red-200">
            <AlertCircle size={14} />
            <span>Please fill all required fields</span>
          </div>
        )}
        {!hasErrors && (
          <span className="flex items-center gap-2 text-xs text-text-muted">
            <CheckCircle2 size={14} className="text-primary" />
            You can edit later before download
          </span>
        )}
        <button
          onClick={onNext}
          disabled={hasErrors}
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition active:scale-95",
            hasErrors
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
          )}
          aria-label={isLast ? "Complete and go to preview" : "Go to next step"}
        >
          {isLast ? "Review & Continue" : "Next"}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function CreateBiodata() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <CreateBiodataContent />
    </Suspense>
  );
}

export const dynamic = 'force-dynamic';

function StepCard({ step, data, onChange, selectedTemplate, onTemplateChange, errors, touched, onErrorChange }: { step: Step; errors?: Record<string, string>; touched?: Record<string, boolean>; data: FormState; onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; selectedTemplate?: string; onTemplateChange?: (template: string) => void; onErrorChange?: (errors: Record<string, string>) => void; }) {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handlePhotoChange = (photos: string[]) => {
    // Create synthetic event to update parent state
    const syntheticEvent = {
      target: { name: 'photos', value: photos }
    } as any;
    onChange(syntheticEvent);
    savePhotosToLocal(photos);
  };

  const handleReligiousSymbolChange = (symbol: string) => {
    const syntheticEvent = {
      target: { name: 'religiousSymbol', value: symbol }
    } as any;
    onChange(syntheticEvent);
  };

  const handleCustomFieldsChange = (fields: Array<{ label: string; value: string }>) => {
    const syntheticEvent = {
      target: { name: 'customFields', value: fields }
    } as any;
    onChange(syntheticEvent);
  };

  const handleVisibilityToggle = (section: keyof FormState['visibleSections']) => {
    const newVisibility = {
      ...data.visibleSections,
      [section]: !data.visibleSections[section]
    };
    const syntheticEvent = {
      target: { name: 'visibleSections', value: newVisibility }
    } as any;
    onChange(syntheticEvent);
  };

  if (step.key === "personal") {
    return (
      <div className="space-y-6">
        <Section title="Personal Information" icon={<Heart size={18} />}>Basic details to start your profile.</Section>

        {/* Photo Upload */}
        <PhotoUpload photos={data.photos} onChange={handlePhotoChange} />

        {/* Religious Symbol */}
        <ReligiousSymbolSelector selected={data.religiousSymbol} onChange={handleReligiousSymbolChange} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Full Name" name="fullName" value={data.fullName} onChange={onChange} placeholder="e.g., Anjali Sharma" icon={<Users size={14} />} error={errors?.fullName} />
          <InputField label="Birth Name" name="birthName" value={data.birthName} onChange={onChange} placeholder="e.g., Anjali" optional />
          <SelectField label="Gender" name="gender" value={data.gender} onChange={onChange} placeholder="Select Gender" options={["Male", "Female", "Non-binary"]} error={errors?.gender} />
          <InputField label="Date of Birth" name="dateOfBirth" value={data.dateOfBirth} onChange={onChange} type="date" icon={<Calendar size={14} />} error={errors?.dateOfBirth} />
          <InputField label="Time of Birth" name="timeOfBirth" value={data.timeOfBirth} onChange={onChange} type="time" icon={<Clock3 size={14} />} error={errors?.timeOfBirth} />
          <InputField label="Birth Place" name="birthPlace" value={data.birthPlace} onChange={onChange} placeholder="City, State" icon={<MapPin size={14} />} error={errors?.birthPlace} />
          <SelectField label="Height" name="height" value={data.height} onChange={onChange} placeholder="Select Height" options={["4'0\"", "4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\""]} error={errors?.height} />          <SelectField label="Blood Group" name="bloodGroup" value={data.bloodGroup} onChange={onChange} placeholder="Select Blood Group" options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} error={errors?.bloodGroup} />
          <SelectField label="Marital Status" name="maritalStatus" value={data.maritalStatus} onChange={onChange} placeholder="Select Status" options={["Never Married", "Divorced", "Widowed"]} error={errors?.maritalStatus} />
          <SelectField label="Religion" name="religion" value={data.religion} onChange={onChange} placeholder="e.g., Hindu" options={["Hindu", "Muslim", "Christian", "Sikh", "Jain", "Buddhist", "Other"]} />
          <InputField label="Caste / Community" name="caste" value={data.caste} onChange={onChange} placeholder="e.g., Brahmin" error={errors?.caste} />
          <InputField label="Gotra" name="gothra" value={data.gothra} onChange={onChange} placeholder="e.g., Kashyapa" error={errors?.gothra} />
          <InputField label="Education" name="education" value={data.education} onChange={onChange} placeholder="e.g., MBA, B.Tech" icon={<GraduationCap size={14} />} error={errors?.education} />
          <InputField label="Occupation / Job" name="occupation" value={data.occupation} onChange={onChange} placeholder="e.g., Software Engineer, Doctor" icon={<Briefcase size={14} />} error={errors?.occupation} />
          <InputField label="Job City" name="jobCity" value={data.jobCity} onChange={onChange} placeholder="e.g., Mumbai" icon={<MapPin size={14} />} optional />
        </div>

        {/* Custom Fields */}
        <CustomFieldsManager fields={data.customFields} onChange={handleCustomFieldsChange} />

        <HelperHint>Next step: Family details</HelperHint>
      </div>
    );
  }

  if (step.key === "family") {
    return (
      <div className="space-y-6">
        <Section title="Family Background" icon={<Users size={18} />}>Share immediate family information to build trust.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Father's Name" name="fatherName" value={data.fatherName} onChange={onChange} placeholder="e.g., Rajesh Sharma" error={errors?.fatherName} />
          <InputField label="Father's Occupation" name="fatherOccupation" value={data.fatherOccupation} onChange={onChange} placeholder="e.g., Business / Govt Service" icon={<Briefcase size={14} />} />
          <InputField label="Mother's Name" name="motherName" value={data.motherName} onChange={onChange} placeholder="e.g., Sunita Sharma" error={errors?.motherName} />
          <InputField label="Mother's Occupation" name="motherOccupation" value={data.motherOccupation} onChange={onChange} placeholder="e.g., Homemaker" icon={<Home size={14} />} />
          <InputField label="Siblings Details" name="siblings" value={data.siblings} onChange={onChange} placeholder="e.g., 1 elder sister (married), 1 younger brother" error={errors?.siblings} />
          <InputField label="Address / Family Location" name="familyLocation" value={data.familyLocation} onChange={onChange} placeholder="City, State" icon={<MapPin size={14} />} error={errors?.familyLocation} />
          <SelectField label="Yearly Income" name="incomeRange" value={data.incomeRange} onChange={onChange} placeholder="Select income range" options={["Not Applicable", "Below 20 LPA", "20-30 LPA", "30-50 LPA", "50-75 LPA", "75+ LPA"]} error={errors?.incomeRange} />
          <InputField label="Mamekul" name="mamekul" value={data.mamekul} onChange={onChange} placeholder="e.g., Sharma" optional />
          <InputField label="Kul" name="kul" value={data.kul} onChange={onChange} placeholder="e.g., Kashyapa" optional />
          <InputField label="Family Values" name="familyValues" value={data.familyValues} onChange={onChange} placeholder="e.g., Traditional / Modern / Liberal" optional />
        </div>

        {/* Section Visibility Toggles */}
        <SectionVisibilityToggles visible={data.visibleSections} onChange={handleVisibilityToggle} />

        <HelperHint>You can add more family members later.</HelperHint>
      </div>
    );
  }

  if (step.key === "horoscope") {
    return (
      <div className="space-y-6">
        <Section title="Astro & Personal Details" icon={<Sparkles size={18} />}>Horoscope and astrological details.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SelectField label="Rashi / Sign" name="rashi" value={data.rashi} onChange={onChange} placeholder="Select Rashi" options={["Mesh", "Vrish", "Mithun", "Kark", "Singh", "Kanya", "Tula", "Vrishchik", "Dhanu", "Makar", "Kumbh", "Meen"]} error={errors?.rashi} />
          <InputField label="Ras" name="ras" value={data.ras} onChange={onChange} placeholder="e.g., Vrishabh" optional />
          <InputField label="Nakshatra" name="nakshatra" value={data.nakshatra} onChange={onChange} placeholder="e.g., Rohini" error={errors?.nakshatra} />
          <InputField label="Charan" name="charan" value={data.charan} onChange={onChange} placeholder="e.g., 2nd" optional />
          <InputField label="Nadi" name="nadi" value={data.nadi} onChange={onChange} placeholder="e.g., Adi / Madhya / Antya" optional />
          <SelectField label="Manglik Status" name="manglik" value={data.manglik} onChange={onChange} placeholder="Select Manglik Status" options={["Non-Manglik", "Manglik", "Anshik Manglik"]} />
        </div>
        <HelperHint>These details help families who consider horoscope matching.</HelperHint>
      </div>
    );
  }

  if (step.key === "preferences") {
    const handleContactNumberChange = (index: number, field: "type" | "number", value: string) => {
      const updated = [...data.contactNumbers];
      if (field === "type") {
        updated[index].type = value as "Self" | "Parent" | "Relative";
      } else {
        // Allow only digits and common phone number separators
        const cleanedValue = value.replace(/[^\d\s\-+()]/g, "");
        updated[index].number = cleanedValue;
      }
      const syntheticEvent = {
        target: { name: 'contactNumbers', value: updated }
      } as any;
      onChange(syntheticEvent);

      // Clear error for this specific contact number when user starts typing
      if (field === "number" && onErrorChange && errors?.[`contactNumber_${index}`]) {
        const newErrors = { ...errors };
        delete newErrors[`contactNumber_${index}`];
        onErrorChange(newErrors);
      }
    };

    const addContactNumber = () => {
      if (data.contactNumbers.length < 3) {
        const syntheticEvent = {
          target: { name: 'contactNumbers', value: [...data.contactNumbers, { type: "Parent" as const, number: "" }] }
        } as any;
        onChange(syntheticEvent);
      }
    };

    const removeContactNumber = (index: number) => {
      const updated = data.contactNumbers.filter((_, i) => i !== index);
      const syntheticEvent = {
        target: { name: 'contactNumbers', value: updated }
      } as any;
      onChange(syntheticEvent);
    };

    return (
      <div className="space-y-6">
        <Section title="Preferences & Contact" icon={<Star size={18} />}>Describe your partner preferences and share how to reach you.</Section>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-text-main">Partner Expectations</h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  const syntheticEvent = {
                    target: { name: 'partnerExpectationsMode', value: 'detailed' }
                  } as any;
                  onChange(syntheticEvent);
                  // Clear simple text when switching to detailed
                  const clearEvent = {
                    target: { name: 'partnerExpectationsText', value: '' }
                  } as any;
                  onChange(clearEvent);
                }}
                className={cn(
                  "text-xs font-semibold px-3 py-1.5 rounded-lg border transition",
                  data.partnerExpectationsMode === 'detailed'
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border-soft text-text-muted hover:border-primary/30"
                )}
              >
                Criteria-wise
              </button>
              <button
                type="button"
                onClick={() => {
                  const syntheticEvent = {
                    target: { name: 'partnerExpectationsMode', value: 'simple' }
                  } as any;
                  onChange(syntheticEvent);
                  // Clear detailed fields when switching to simple
                  const clearAge = { target: { name: 'partnerAge', value: '' } } as any;
                  const clearHeight = { target: { name: 'partnerHeight', value: '' } } as any;
                  const clearLocation = { target: { name: 'partnerLocation', value: '' } } as any;
                  const clearEducation = { target: { name: 'partnerEducation', value: '' } } as any;
                  const clearOccupation = { target: { name: 'partnerOccupation', value: '' } } as any;
                  onChange(clearAge);
                  onChange(clearHeight);
                  onChange(clearLocation);
                  onChange(clearEducation);
                  onChange(clearOccupation);
                }}
                className={cn(
                  "text-xs font-semibold px-3 py-1.5 rounded-lg border transition",
                  data.partnerExpectationsMode === 'simple'
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border-soft text-text-muted hover:border-primary/30"
                )}
              >
                Single Line
              </button>
            </div>
          </div>

          {data.partnerExpectationsMode === 'detailed' ? (
            <div className="space-y-4">
              <p className="text-xs text-text-muted">Specify your preferences (all optional). Leave blank if not applicable.</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField label="Preferred Age Range" name="partnerAge" value={data.partnerAge} onChange={onChange} placeholder="e.g., 24-28" error={errors?.partnerAge} />
                <InputField label="Preferred Height" name="partnerHeight" value={data.partnerHeight} onChange={onChange} placeholder="e.g., 5'2 - 5'8" error={errors?.partnerHeight} />
                <InputField label="Preferred Location" name="partnerLocation" value={data.partnerLocation} onChange={onChange} placeholder="City / State" icon={<MapPin size={14} />} error={errors?.partnerLocation} />
                <InputField label="Preferred Education" name="partnerEducation" value={data.partnerEducation} onChange={onChange} placeholder="e.g., MBA, Engineer" icon={<GraduationCap size={14} />} error={errors?.partnerEducation} />
                <InputField label="Preferred Occupation" name="partnerOccupation" value={data.partnerOccupation} onChange={onChange} placeholder="e.g., IT, Govt Service" error={errors?.partnerOccupation} />
                <SelectField label="Manglik Preference" name="partnerManglik" value={data.partnerManglik} onChange={onChange} placeholder="Select" options={["No Preference", "Manglik", "Non-Manglik", "Anshik Manglik"]} />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-main block">Describe Your Preferences</label>
              <textarea
                name="partnerExpectationsText"
                value={data.partnerExpectationsText}
                onChange={(e) => {
                  const syntheticEvent = {
                    target: { name: 'partnerExpectationsText', value: e.target.value }
                  } as any;
                  onChange(syntheticEvent);
                }}
                placeholder="e.g., Looking for a well-educated, independent woman from Mumbai or nearby areas. Prefer someone with interest in travel and reading. Open to all castes and religions."
                className={cn(
                  "w-full rounded-lg border px-3 py-2.5 text-sm bg-background-light text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none",
                  errors?.partnerExpectationsText ? "border-red-500" : "border-border-soft"
                )}
                rows={4}
              />
              {errors?.partnerExpectationsText && (
                <span className="text-xs text-red-500 font-semibold">{errors.partnerExpectationsText}</span>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-text-main">Contact Numbers</h3>
              <p className="text-xs text-text-muted">Minimum 1, Maximum 3 numbers required</p>
            </div>
            {data.contactNumbers.length < 3 && (
              <button
                type="button"
                onClick={addContactNumber}
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition"
              >
                <Plus size={14} />
                Add Number
              </button>
            )}
          </div>

          {errors?.contactNumbers && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 border border-red-200 flex items-center gap-2">
              <AlertCircle size={14} />
              {errors.contactNumbers}
            </div>
          )}

          <div className="space-y-3">
            {data.contactNumbers.map((contact, index) => (
              <div key={index} className="flex gap-2 items-end">
                <div className="flex-1 space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wide text-text-muted block">Contact {index + 1}</label>
                  <div className="flex gap-2">
                    <select
                      value={contact.type}
                      onChange={(e) => handleContactNumberChange(index, "type", e.target.value)}
                      className="rounded-lg border border-border-soft px-3 py-2.5 text-sm bg-background-light text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary transition w-32"
                    >
                      <option>Self</option>
                      <option>Parent</option>
                      <option>Relative</option>
                    </select>
                    <input
                      type="tel"
                      value={contact.number}
                      onChange={(e) => handleContactNumberChange(index, "number", e.target.value)}
                      placeholder="10-digit number"
                      className="flex-1 rounded-lg border border-border-soft px-3 py-2.5 text-sm bg-background-light text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                    {data.contactNumbers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeContactNumber(index)}
                        className="flex items-center justify-center size-10 text-text-muted hover:text-red-500 transition rounded-lg border border-border-soft hover:border-red-300"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                  {errors?.[`contactNumber_${index}`] && (
                    <span className="text-xs text-red-500 font-semibold">{errors[`contactNumber_${index}`]}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SelectField label="State" name="state" value={data.state} onChange={onChange} placeholder="Select State" options={["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other"]} error={errors?.state} />
        </div>

        <div>
          <InputField label="Watermark / Site Name" name="watermarkText" value={data.watermarkText} onChange={onChange} placeholder="e.g., sangam-biodata.com" optional />
        </div>

        <HelperHint>Provide reachable contact number(s) for serious inquiries. You can include self, parent, or relative numbers.</HelperHint>
      </div>
    );
  }

  return null;
}

function Section({ title, icon, children }: { title: string; icon?: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-text-main">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      {children && <p className="text-sm text-text-muted">{children}</p>}
    </div>
  );
}

function InputField({ label, name, value, onChange, placeholder, type = "text", icon, optional, error }: { label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; icon?: ReactNode; optional?: boolean; error?: string }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-text-main">
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-text-muted">
        {label}
        {optional && <span className="text-[10px] font-semibold text-text-muted">Optional</span>}
      </span>
      <div className={cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition bg-background-light", error ? "border-red-500 focus-within:ring-red-500 focus-within:border-red-500" : "border-border-soft")}>
        {icon && <span className="text-text-muted">{icon}</span>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-text-main outline-none placeholder:text-text-muted"
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 font-semibold">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, value, onChange, placeholder, options, icon, optional, error, touched: isTouched }: { label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void; placeholder?: string; options: string[]; icon?: ReactNode; optional?: boolean; error?: string; touched?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-text-main">
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-text-muted">
        {label}
        {optional && <span className="text-[10px] font-semibold text-text-muted">Optional</span>}
      </span>
      <div className={cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition bg-background-light", error && isTouched ? "border-red-500 focus-within:ring-red-500 focus-within:border-red-500" : "border-border-soft")}>
        {icon && <span className="text-text-muted">{icon}</span>}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-sm text-text-main outline-none"
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="" disabled>
            {placeholder ?? "Select"}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 font-semibold">{error}</span>}
    </label>
  );
}

function HelperHint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-dashed border-border-soft bg-background-light px-4 py-3 text-sm text-text-muted">
      <CheckCircle2 size={14} className="text-primary" />
      <span>{children}</span>
    </div>
  );
}

// New Components for Phase 2

function PhotoUpload({ photos, onChange }: { photos: string[]; onChange: (photos: string[]) => void }) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Convert files to base64 URLs (for demo - in production use proper upload service)
    Array.from(files).forEach((file) => {
      if (photos.length >= 2) {
        alert("Maximum 2 photos allowed");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        onChange([...photos, result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    onChange(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-text-main">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-text-muted">
          Upload Photos
          <span className="text-[10px] font-semibold text-text-muted">(Maximum 2, Optional)</span>
        </span>

        <div className="flex gap-4 flex-wrap">
          {/* Preview uploaded photos */}
          {photos.map((photo, index) => (
            <div key={index} className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-primary/20 group">
              <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          ))}

          {/* Upload button */}
          {photos.length < 2 && (
            <label className="w-32 h-32 border-2 border-dashed border-border-strong rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition text-text-muted hover:text-primary">
              <Upload size={24} />
              <span className="text-xs mt-2 font-medium">Upload Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                multiple={photos.length === 0}
              />
            </label>
          )}
        </div>
      </label>
      <p className="text-xs text-text-muted">Passport size photo recommended. Max file size: 5MB</p>
    </div>
  );
}

function ReligiousSymbolSelector({ selected, onChange }: { selected: string; onChange: (symbol: string) => void }) {
  const symbols = [
    { symbol: "🕉️", name: "Om" },
    { symbol: "☪️", name: "Star & Crescent" },
    { symbol: "✝️", name: "Cross" },
    { symbol: "☸️", name: "Dharma Wheel" },
    { symbol: "🪯", name: "Khanda" },
    { symbol: "✡️", name: "Star of David" },
    { symbol: "None", name: "No Symbol" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-wide text-text-muted">
        Religious Symbol
        <span className="text-[10px] font-semibold text-text-muted ml-2">Optional</span>
      </label>
      <div className="flex gap-2 flex-wrap">
        {symbols.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => onChange(item.symbol)}
            className={cn(
              "px-4 py-2 rounded-lg border-2 transition flex items-center gap-2 text-sm font-medium",
              selected === item.symbol
                ? "border-primary bg-primary/10 text-primary"
                : "border-border-soft text-text-muted hover:border-primary/50"
            )}
          >
            {item.symbol !== "None" && <span className="text-xl">{item.symbol}</span>}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CustomFieldsManager({ fields, onChange }: { fields: Array<{ label: string; value: string }>; onChange: (fields: Array<{ label: string; value: string }>) => void }) {
  const addField = () => {
    if (fields.length >= 5) {
      alert("Maximum 5 custom fields allowed");
      return;
    }
    onChange([...fields, { label: "", value: "" }]);
  };

  const removeField = (index: number) => {
    onChange(fields.filter((_, i) => i !== index));
  };

  const updateField = (index: number, key: "label" | "value", value: string) => {
    const updated = [...fields];
    updated[index][key] = value;
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wide text-text-muted">
          Custom Fields
          <span className="text-[10px] font-semibold text-text-muted ml-2">(Max 5, Optional)</span>
        </label>
        {fields.length < 5 && (
          <button
            type="button"
            onClick={addField}
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition"
          >
            <Plus size={14} />
            Add Field
          </button>
        )}
      </div>

      {fields.length === 0 && (
        <div className="text-sm text-text-muted italic border border-dashed border-border-soft rounded-lg p-4 text-center">
          Add custom fields like "Hobbies", "Languages Known", etc.
        </div>
      )}

      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={index} className="flex gap-2 items-start">
            <input
              type="text"
              placeholder="Field Label (e.g., Hobbies)"
              value={field.label}
              onChange={(e) => updateField(index, "label", e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border-soft rounded-lg bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <input
              type="text"
              placeholder="Field Value (e.g., Reading, Music)"
              value={field.value}
              onChange={(e) => updateField(index, "value", e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border-soft rounded-lg bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <button
              type="button"
              onClick={() => removeField(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionVisibilityToggles({ visible, onChange }: { visible: FormState['visibleSections']; onChange: (section: keyof FormState['visibleSections']) => void }) {
  const sections = [
    { key: 'horoscope' as const, label: 'Horoscope Details', icon: <Sparkles size={16} /> },
    { key: 'education' as const, label: 'Education Details', icon: <GraduationCap size={16} /> },
    { key: 'income' as const, label: 'Income Details', icon: <DollarSign size={16} /> },
    { key: 'preferences' as const, label: 'Partner Preferences', icon: <Heart size={16} /> },
  ];

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs font-bold uppercase tracking-wide text-text-muted">
        Section Visibility
        <span className="text-[10px] font-normal text-text-muted ml-2">(Toggle sections to show/hide in biodata)</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            onClick={() => onChange(section.key)}
            className={cn(
              "flex items-center justify-between px-4 py-3 rounded-lg border-2 transition",
              visible[section.key]
                ? "border-primary bg-primary/5 text-primary"
                : "border-border-soft text-text-muted hover:border-primary/30"
            )}
          >
            <div className="flex items-center gap-2">
              {section.icon}
              <span className="text-sm font-medium">{section.label}</span>
            </div>
            {visible[section.key] ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        ))}
      </div>
    </div>
  );
}