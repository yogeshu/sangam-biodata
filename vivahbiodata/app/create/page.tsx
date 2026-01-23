"use client";

import { useState } from "react";
import { ChevronRight, Download, Save, User, Users, Phone } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you created this in the previous step

// --- Types ---
type BiodataState = {
  fullName: string;
  age: string;
  height: string;
  education: string;
  job: string;
  income: string;
  fatherName: string;
  motherName: string;
  contactNumber: string;
  address: string;
};

export default function CreateBiodata() {
  const [activeTab, setActiveTab] = useState<"personal" | "family" | "contact">("personal");
  
  const [data, setData] = useState<BiodataState>({
    fullName: "Amit Sharma",
    age: "28 Years",
    height: "5'10\"",
    education: "B.Tech (CS), MBA",
    job: "Senior Software Engineer @ Google",
    income: "35 LPA",
    fatherName: "Mr. Rajesh Sharma (Businessman)",
    motherName: "Mrs. Sunita Sharma (Homemaker)",
    contactNumber: "+91 98765 43210",
    address: "Mumbai, Maharashtra",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen flex-col bg-background-light text-text-main font-body lg:flex-row overflow-hidden">
      
      {/* --- LEFT PANEL: EDITOR --- */}
      <div className="flex w-full flex-col border-r border-border-strong bg-white lg:w-1/2 xl:w-2/5">
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border-soft px-6 py-4">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">edit_document</span>
            <h1 className="text-lg font-bold font-display">Edit Biodata</h1>
          </div>
          <button className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary/20">
            <Save size={16} />
            <span>Save Draft</span>
          </button>
        </header>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border-soft px-6 pt-4">
          <TabButton 
            active={activeTab === "personal"} 
            onClick={() => setActiveTab("personal")} 
            icon={<User size={16} />} 
            label="Personal" 
          />
          <TabButton 
            active={activeTab === "family"} 
            onClick={() => setActiveTab("family")} 
            icon={<Users size={16} />} 
            label="Family" 
          />
          <TabButton 
            active={activeTab === "contact"} 
            onClick={() => setActiveTab("contact")} 
            icon={<Phone size={16} />} 
            label="Contact" 
          />
        </div>

        {/* Form Area */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          <div className="space-y-6">
            
            {activeTab === "personal" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                <InputGroup label="Full Name" name="fullName" value={data.fullName} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Age / DOB" name="age" value={data.age} onChange={handleInputChange} />
                  <InputGroup label="Height" name="height" value={data.height} onChange={handleInputChange} />
                </div>
                <InputGroup label="Education" name="education" value={data.education} onChange={handleInputChange} />
                <InputGroup label="Occupation / Job" name="job" value={data.job} onChange={handleInputChange} />
                <InputGroup label="Annual Income" name="income" value={data.income} onChange={handleInputChange} />
              </div>
            )}

            {activeTab === "family" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                <InputGroup label="Father's Name & Occupation" name="fatherName" value={data.fatherName} onChange={handleInputChange} />
                <InputGroup label="Mother's Name & Occupation" name="motherName" value={data.motherName} onChange={handleInputChange} />
                <div className="rounded-lg bg-orange-50 p-4 border border-orange-100 text-sm text-orange-800">
                  <p>💡 Tip: Mentioning siblings adds credibility to the profile.</p>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                <InputGroup label="Contact Number" name="contactNumber" value={data.contactNumber} onChange={handleInputChange} />
                <InputGroup label="Residential Address" name="address" value={data.address} onChange={handleInputChange} />
              </div>
            )}

          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border-soft p-6">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark font-bold">
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>

      {/* --- RIGHT PANEL: PREVIEW --- */}
      <div className="hidden flex-1 items-center justify-center bg-gray-100 p-8 lg:flex">
        <div className="relative h-[800px] w-[565px] bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          
          {/* This is the PDF Look-alike HTML */}
          <div className="h-full w-full border-[12px] border-primary/5 p-8 font-display text-text-main relative overflow-hidden">
            
            {/* Corner Decor */}
            <div className="absolute top-0 left-0 size-24 border-l-4 border-t-4 border-primary/40 rounded-tl-xl m-4"></div>
            <div className="absolute bottom-0 right-0 size-24 border-r-4 border-b-4 border-primary/40 rounded-br-xl m-4"></div>
            
            {/* Header */}
            <div className="text-center mb-10 mt-6">
               <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">temple_hindu</span>
               </div>
               <h2 className="text-3xl font-bold text-primary uppercase tracking-wider border-b-2 border-primary/20 pb-4 inline-block px-8">Marriage Biodata</h2>
            </div>

            {/* Content Table */}
            <div className="space-y-6 px-4">
              <PreviewRow label="Name" value={data.fullName} highlight />
              <PreviewRow label="Date of Birth" value={data.age} />
              <PreviewRow label="Height" value={data.height} />
              <PreviewRow label="Education" value={data.education} />
              <PreviewRow label="Occupation" value={data.job} />
              <PreviewRow label="Income" value={data.income} />
              
              <div className="my-6 border-t border-dashed border-border-strong"></div>
              
              <PreviewRow label="Father" value={data.fatherName} />
              <PreviewRow label="Mother" value={data.motherName} />
              
              <div className="my-6 border-t border-dashed border-border-strong"></div>
              
              <PreviewRow label="Contact" value={data.contactNumber} highlight />
              <PreviewRow label="Address" value={data.address} />
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-0 w-full text-center">
              <p className="text-xs text-text-muted italic">Profile created on VivahBiodata</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all rounded-t-lg",
        active
          ? "border-b-2 border-primary bg-primary/5 text-primary"
          : "text-text-muted hover:bg-gray-50 hover:text-text-main"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function InputGroup({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: (e: any) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-wider text-text-muted">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-border-strong bg-background-light px-4 py-2.5 text-sm font-medium text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-300"
        placeholder="Enter details..."
      />
    </div>
  );
}

function PreviewRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-4">
      <span className="text-sm font-bold text-text-muted uppercase tracking-wide">{label}</span>
      <span className={cn("text-base font-medium", highlight ? "text-primary font-bold text-lg" : "text-text-main")}>
        {value}
      </span>
    </div>
  );
}