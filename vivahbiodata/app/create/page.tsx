"use client";

import type { ChangeEvent, ReactNode, FC } from "react";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { templates, type TemplateMeta } from "@/lib/templates";
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
  IndianRupee,
  MapPin,
  Phone,
  Save,
  Sparkles,
  Star,
  Users,
  LayoutTemplate,
} from "lucide-react";

type StepKey = "personal" | "family" | "horoscope" | "preferences" | "template";

type FormState = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  timeOfBirth: string;
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  gothra: string;
  education: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyLocation: string;
  incomeRange: string;
  familyValues: string;
  birthPlace: string;
  rashi: string;
  nakshatra: string;
  manglik: string;
  bloodGroup: string;
  partnerAge: string;
  partnerHeight: string;
  partnerLocation: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerManglik: string;
  contactNumber: string;
  state: string;
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
  { key: "template", label: "Template & Preview", description: "Pick a design and review", icon: LayoutTemplate },
];

function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function CreateBiodata() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("classic");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [data, setData] = useState<FormState>({
    fullName: "Anjali Sharma",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
    height: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    gothra: "",
    education: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    familyLocation: "",
    incomeRange: "",
    familyValues: "",
    birthPlace: "",
    rashi: "",
    nakshatra: "",
    manglik: "",
    bloodGroup: "",
    partnerAge: "",
    partnerHeight: "",
    partnerLocation: "",
    partnerEducation: "",
    partnerOccupation: "",
    partnerManglik: "",
    contactNumber: "",
    state: "",
  });

  const progress = useMemo(() => Math.round(((currentStep + 1) / steps.length) * 100), [currentStep]);

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 0) {
      if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!data.gender) newErrors.gender = "Gender is required";
    }
    if (currentStep === 1) {
      if (!data.fatherName.trim()) newErrors.fatherName = "Father's name is required";
      if (!data.motherName.trim()) newErrors.motherName = "Mother's name is required";
    }
    if (currentStep === 2) {
      if (data.birthPlace && !data.rashi) newErrors.rashi = "Rashi is recommended if you provided birthplace";
    }
    if (currentStep === 3) {
      if (!data.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
      if (!data.state) newErrors.state = "State is required";
    }
    if (currentStep === 4) {
      if (!selectedTemplate) newErrors.template = "Please select a template";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: keyof FormState, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleChange(name as keyof FormState, value);
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep === steps.length - 1) {
        // Navigate to preview with data
        router.push(`/preview?data=${encodeURIComponent(JSON.stringify(data))}&template=${selectedTemplate}`);
      } else {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
  };
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-background-light text-text-main font-body">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 pt-8 md:px-8 lg:pt-12">
        <HeaderBar />

        <div className="rounded-2xl border border-border-soft bg-white shadow-sm">
          <div className="flex flex-col gap-6 p-6 md:p-8">
            <StepperHeader progress={progress} currentStep={currentStep} />
            <StepTabs currentStep={currentStep} onStepChange={setCurrentStep} />
            <StepCard
              step={steps[currentStep]}
              data={data}
              onChange={handleInputChange}
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
              errors={errors}
              touched={touched}
            />
            <FooterNav
              onBack={prevStep}
              onNext={nextStep}
              isFirst={currentStep === 0}
              isLast={currentStep === steps.length - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-primary">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Heart size={20} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">VivahBio</p>
          <p className="text-base font-bold text-text-main">Biodata Builder</p>
        </div>
      </div>
      <button className="flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10">
        <Save size={14} />
        Save Draft
      </button>
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

function StepTabs({ currentStep, onStepChange }: { currentStep: number; onStepChange: (idx: number) => void }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const active = idx === currentStep;
        const completed = idx < currentStep;
        return (
          <button
            key={step.key}
            onClick={() => idx <= currentStep && onStepChange(idx)}
            disabled={idx > currentStep}
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

function FooterNav({ onBack, onNext, isFirst, isLast }: { onBack: () => void; onNext: () => void; isFirst: boolean; isLast: boolean }) {
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
        <span className="flex items-center gap-2 text-xs text-text-muted">
          <CheckCircle2 size={14} className="text-primary" />
          You can edit later before download
        </span>
        <button
          onClick={onNext}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isLast ? "Complete and go to preview" : "Go to next step"}
        >
          {isLast ? "Review & Continue" : "Next"}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function StepCard({ step, data, onChange, selectedTemplate, onTemplateChange, errors, touched }: { step: Step; errors?: Record<string, string>; touched?: Record<string, boolean>; data: FormState; onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; selectedTemplate?: string; onTemplateChange?: (template: string) => void; }) {
  if (step.key === "personal") {
    return (
      <div className="space-y-6">
        <Section title="Personal Information" icon={<Heart size={18} />}>Basic details to start your profile.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Full Name" name="fullName" value={data.fullName} onChange={onChange} placeholder="e.g., Anjali Sharma" icon={<Users size={14} />} error={errors.fullName} touched={touched.fullName} />
          <SelectField label="Gender" name="gender" value={data.gender} onChange={onChange} placeholder="Select Gender" options={["Male", "Female", "Non-binary"]} error={errors.gender} touched={touched.gender} />
          <InputField label="Date of Birth" name="dateOfBirth" value={data.dateOfBirth} onChange={onChange} type="date" icon={<Calendar size={14} />} />
          <InputField label="Time of Birth" name="timeOfBirth" value={data.timeOfBirth} onChange={onChange} type="time" icon={<Clock3 size={14} />} optional />
          <SelectField label="Height" name="height" value={data.height} onChange={onChange} placeholder="Select Height" options={["5'0\"", "5'2\"", "5'4\"", "5'6\"", "5'8\"", "5'10\"", "6'0\"+"]} />
          <SelectField label="Marital Status" name="maritalStatus" value={data.maritalStatus} onChange={onChange} placeholder="Select Status" options={["Never Married", "Divorced", "Widowed"]} />
          <SelectField label="Religion" name="religion" value={data.religion} onChange={onChange} placeholder="e.g., Hindu" options={["Hindu", "Muslim", "Christian", "Sikh", "Jain", "Buddhist", "Other"]} />
          <InputField label="Caste / Community" name="caste" value={data.caste} onChange={onChange} placeholder="e.g., Brahmin" />
          <InputField label="Gothra" name="gothra" value={data.gothra} onChange={onChange} placeholder="e.g., Kashyapa" optional />
          <InputField label="Education" name="education" value={data.education} onChange={onChange} placeholder="e.g., MBA, B.Tech" icon={<GraduationCap size={14} />} />
        </div>
        <HelperHint>Next step: Family details</HelperHint>
      </div>
    );
  }

  if (step.key === "family") {
    return (
      <div className="space-y-6">
        <Section title="Family Background" icon={<Users size={18} />}>Share immediate family information to build trust.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Father's Name" name="fatherName" value={data.fatherName} onChange={onChange} placeholder="e.g., Rajesh Sharma" />
          <InputField label="Father's Occupation" name="fatherOccupation" value={data.fatherOccupation} onChange={onChange} placeholder="e.g., Business / Govt Service" icon={<Briefcase size={14} />} />
          <InputField label="Mother's Name" name="motherName" value={data.motherName} onChange={onChange} placeholder="e.g., Sunita Sharma" />
          <InputField label="Mother's Occupation" name="motherOccupation" value={data.motherOccupation} onChange={onChange} placeholder="e.g., Homemaker" icon={<Home size={14} />} />
          <InputField label="Siblings Details" name="siblings" value={data.siblings} onChange={onChange} placeholder="e.g., 1 elder sister (married), 1 younger brother" />
          <InputField label="Family Location" name="familyLocation" value={data.familyLocation} onChange={onChange} placeholder="City, State" icon={<MapPin size={14} />} />
          <SelectField label="Yearly Income (Package)" name="incomeRange" value={data.incomeRange} onChange={onChange} placeholder="Select Range" options={["5-10 LPA", "10-20 LPA", "20-35 LPA", "35-50 LPA", "50 LPA +"]} icon={<IndianRupee size={14} />} />
          <SelectField label="Family Values" name="familyValues" value={data.familyValues} onChange={onChange} placeholder="Select" options={["Traditional", "Moderate", "Liberal"]} />
        </div>
        <HelperHint>You can add more family members later.</HelperHint>
      </div>
    );
  }

  if (step.key === "horoscope") {
    return (
      <div className="space-y-6">
        <Section title="Astro & Personal Details" icon={<Sparkles size={18} />}>Optional horoscope and personal attributes.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Birth Place" name="birthPlace" value={data.birthPlace} onChange={onChange} placeholder="City, State" icon={<MapPin size={14} />} />
          <SelectField label="Raas (Rashi)" name="rashi" value={data.rashi} onChange={onChange} placeholder="Select" options={["Mesh", "Vrish", "Mithun", "Kark", "Singh", "Kanya", "Tula", "Vrishchik", "Dhanu", "Makar", "Kumbh", "Meen"]} />
          <InputField label="Nakshatra" name="nakshatra" value={data.nakshatra} onChange={onChange} placeholder="e.g., Rohini" />
          <SelectField label="Manglik Status" name="manglik" value={data.manglik} onChange={onChange} placeholder="Select" options={["Non-Manglik", "Manglik", "Anshik Manglik"]} />
          <SelectField label="Blood Group" name="bloodGroup" value={data.bloodGroup} onChange={onChange} placeholder="Select" options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} />
          <InputField label="Time of Birth" name="timeOfBirth" value={data.timeOfBirth} onChange={onChange} type="time" icon={<Clock3 size={14} />} optional />
        </div>
        <HelperHint>These details help families who consider horoscope matching.</HelperHint>
      </div>
    );
  }

  if (step.key === "preferences") {
    return (
      <div className="space-y-6">
        <Section title="Preferences & Contact" icon={<Star size={18} />}>Describe your partner preferences and share how to reach you.</Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Preferred Age Range" name="partnerAge" value={data.partnerAge} onChange={onChange} placeholder="e.g., 24 - 28" />
          <InputField label="Preferred Height" name="partnerHeight" value={data.partnerHeight} onChange={onChange} placeholder={` 5'2" - 5'8" `} />
          <InputField label="Preferred Location" name="partnerLocation" value={data.partnerLocation} onChange={onChange} placeholder="City / State" icon={<MapPin size={14} />} />
          <InputField label="Preferred Education" name="partnerEducation" value={data.partnerEducation} onChange={onChange} placeholder="e.g., MBA, Engineer" icon={<GraduationCap size={14} />} />
          <InputField label="Preferred Occupation" name="partnerOccupation" value={data.partnerOccupation} onChange={onChange} placeholder="e.g., IT, Govt Service" />
          <SelectField label="Manglik Preference" name="partnerManglik" value={data.partnerManglik} onChange={onChange} placeholder="Select" options={["No Preference", "Manglik", "Non-Manglik", "Anshik Manglik"]} />
          <InputField label="Contact Number" name="contactNumber" value={data.contactNumber} onChange={onChange} placeholder="e.g., +91 98765 43210" icon={<Phone size={14} />} />
          <SelectField label="State" name="state" value={data.state} onChange={onChange} placeholder="Select State" options={["Maharashtra", "Karnataka", "Delhi", "Rajasthan", "Gujarat", "Tamil Nadu", "Uttar Pradesh", "Telangana", "West Bengal", "Other"]} />
        </div>
        <HelperHint>Provide a reachable contact for serious inquiries.</HelperHint>
      </div>
    );
  }

  if (step.key === "template") {
    return (
      <div className="space-y-6">
        <Section title="Select Template & Preview" icon={<LayoutTemplate size={18} />}>Choose a design and review your biodata</Section>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onTemplateChange?.(template.id)}
              className={cn(
                "relative flex flex-col gap-2 rounded-lg border-2 p-3 transition",
                selectedTemplate === template.id
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border-soft hover:border-primary/50"
              )}
            >
              <div className="aspect-[3/4] w-full rounded-md border border-border-soft bg-gradient-to-br from-background-light to-border-soft flex items-center justify-center text-xs text-text-muted font-semibold">
                {template.name}
              </div>
              <span className="text-sm font-semibold text-text-main">{template.name}</span>
              <span className="text-xs text-text-muted">{template.description}</span>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-primary text-white">
                  <CheckCircle2 size={14} />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-bold text-text-main">Preview</h3>
          <div className="flex justify-center">
            <TemplatePreview data={data} templateId={selectedTemplate || "classic"} />
          </div>
        </div>

        <HelperHint>Review your biodata before download. You can edit anytime.</HelperHint>
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
      <div className={cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition bg-background-light", error && touched ? "border-red-500 focus-within:ring-red-500 focus-within:border-red-500" : "border-border-soft")}>
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

function TemplatePreview({ data, templateId }: { data: FormState; templateId: string }) {
  return (
    <div className="relative h-[500px] w-full max-w-sm overflow-auto rounded-lg border border-border-soft bg-white shadow-lg">
      <div className="h-full w-full p-8 font-display text-text-main">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
            <Heart size={24} />
          </div>
          <h2 className="text-2xl font-bold text-primary uppercase">Marriage Biodata</h2>
          <p className="text-xs text-text-muted mt-1">Template: {templates.find(t => t.id === templateId)?.name}</p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm">
          {data.fullName && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Name</span>
              <span className="font-semibold text-primary">{data.fullName}</span>
            </div>
          )}
          {data.gender && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Gender</span>
              <span>{data.gender}</span>
            </div>
          )}
          {data.height && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Height</span>
              <span>{data.height}</span>
            </div>
          )}
          {data.education && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Education</span>
              <span>{data.education}</span>
            </div>
          )}
          {data.religion && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Religion</span>
              <span>{data.religion}</span>
            </div>
          )}
          {data.fatherName && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-border-soft pb-2">
              <span className="font-bold text-text-muted">Father</span>
              <span>{data.fatherName}</span>
            </div>
          )}
          {data.contactNumber && (
            <div className="grid grid-cols-[100px_1fr] gap-2 border-t border-border-soft pt-4 mt-4">
              <span className="font-bold text-text-muted">Contact</span>
              <span>{data.contactNumber}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 w-full text-center text-xs text-text-muted italic px-4">
          Profile created on VivahBio
        </div>
      </div>
    </div>
  );
}