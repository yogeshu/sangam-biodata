
'use client';

import { useState } from "react";
import {
  User,
  Calendar,
  Heart,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function MatrimonyForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Step Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Step {step} of 4</h2>
        <div className="w-1/2 bg-gray-200 h-2 rounded">
          <div
            className="bg-red-600 h-2 rounded transition-all"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-6">
        {step === 1 && <PersonalDetails />}
        {step === 2 && <EducationCareer />}
        {step === 3 && <FamilyDetails />}
        {step === 4 && <Preferences />}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(s => Math.max(1, s - 1))}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg"
        >
          <ChevronLeft size={18} /> Back
        </button>

        <button
          onClick={() => setStep(s => Math.min(4, s + 1))}
          className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- Sections ---------------- */

function Field({ icon: Icon, placeholder }: any) {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
      <Icon size={18} className="text-gray-500" />
      <input
        placeholder={placeholder}
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field icon={User} placeholder="Full Name" />
      <Field icon={Heart} placeholder="Gender" />
      <Field icon={Calendar} placeholder="Date of Birth" />
      <Field icon={Calendar} placeholder="Time of Birth (optional)" />
    </div>
  );
}

function EducationCareer() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field icon={GraduationCap} placeholder="Education" />
      <Field icon={Briefcase} placeholder="Occupation" />
      <Field icon={Briefcase} placeholder="Company Name" />
      <Field icon={Home} placeholder="Job Location" />
    </div>
  );
}

function FamilyDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field icon={Users} placeholder="Father's Name" />
      <Field icon={Users} placeholder="Mother's Name" />
      <Field icon={Home} placeholder="Residential Address" />
      <Field icon={Users} placeholder="Siblings Details" />
    </div>
  );
}

function Preferences() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field icon={Heart} placeholder="Preferred Age Range" />
      <Field icon={Home} placeholder="Preferred Location" />
      <Field icon={GraduationCap} placeholder="Education Preference" />
      <Field icon={Briefcase} placeholder="Occupation Preference" />
    </div>
  );
}
