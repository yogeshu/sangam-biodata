"use client";

import { useState } from "react";
import { Download, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CommonLayout from "@/components/common/CommonLayout";

const SAMPLE_BIODATAS = [
  {
    id: 1,
    name: "Rohan Sharma",
    gender: "Male",
    dob: "15th August 1995",
    birthTime: "09:30 AM",
    birthPlace: "Jaipur, Rajasthan",
    height: "5' 10\" (178 cm)",
    complexion: "Fair",
    rasi: "Mesha (Aries)",
    nakshatra: "Bharani",
    gotra: "Vashishtha",
    manglik: "No (Non-Manglik)",
    education: ["B.Tech in Computer Science (IIT Bombay)", "MBA (IIM Ahmedabad)"],
    occupation: "Senior Product Manager",
    company: "Tech Solutions Pvt Ltd, Bangalore",
    income: "35 LPA",
    father: "Mr. Rajesh Sharma (Govt. Officer, Retired)",
    mother: "Mrs. Sunita Sharma (Homemaker)",
    siblings: "1 Elder Sister (Married), 1 Younger Brother (Student)",
    contact: "+91 98765 43210",
    address: "123, Civil Lines, Jaipur, Rajasthan",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel",
    gender: "Female",
    dob: "22nd March 1998",
    birthTime: "06:15 AM",
    birthPlace: "Ahmedabad, Gujarat",
    height: "5' 4\" (163 cm)",
    complexion: "Wheatish",
    rasi: "Vrishabha (Taurus)",
    nakshatra: "Rohini",
    gotra: "Kashyapa",
    manglik: "No",
    education: ["B.Tech in Electronics (NIT Surat)", "M.S. in Data Science (USA)"],
    occupation: "Data Scientist",
    company: "Global Tech Corp, San Francisco",
    income: "₹45 LPA",
    father: "Mr. Ashok Patel (Business Owner)",
    mother: "Mrs. Meera Patel (Teacher)",
    siblings: "1 Younger Brother (Engineer)",
    contact: "+91 98234 56789",
    address: "456, Satellite Road, Ahmedabad, Gujarat",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Aditya Gupta",
    gender: "Male",
    dob: "10th November 1994",
    birthTime: "11:45 PM",
    birthPlace: "Delhi",
    height: "5' 11\" (180 cm)",
    complexion: "Fair",
    rasi: "Simha (Leo)",
    nakshatra: "Magha",
    gotra: "Bharadvaja",
    manglik: "Yes (Mild)",
    education: ["B.Com (Delhi University)", "CA (ICAI)"],
    occupation: "Chartered Accountant",
    company: "Gupta & Associates, Delhi",
    income: "₹30 LPA",
    father: "Mr. Ramesh Gupta (CA, Partner)",
    mother: "Mrs. Anjali Gupta (Homemaker)",
    siblings: "1 Elder Brother (Doctor, Married)",
    contact: "+91 98111 22333",
    address: "789, Defence Colony, New Delhi",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Ananya Reddy",
    gender: "Female",
    dob: "5th June 1996",
    birthTime: "02:30 PM",
    birthPlace: "Hyderabad, Telangana",
    height: "5' 5\" (165 cm)",
    complexion: "Fair",
    rasi: "Kanya (Virgo)",
    nakshatra: "Hasta",
    gotra: "Atri",
    manglik: "No",
    education: ["MBBS (AIIMS Delhi)", "MD in Pediatrics"],
    occupation: "Pediatrician",
    company: "Apollo Hospitals, Hyderabad",
    income: "₹25 LPA",
    father: "Dr. Venkat Reddy (Cardiologist)",
    mother: "Mrs. Lakshmi Reddy (Professor)",
    siblings: "None (Only Child)",
    contact: "+91 98765 11223",
    address: "321, Banjara Hills, Hyderabad, Telangana",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
  },
];

export default function SamplesPage() {
  const router = useRouter();
  const [selectedSample, setSelectedSample] = useState(SAMPLE_BIODATAS[0]);

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main font-body">
        {/* Header */}
        <header className="border-b border-border-soft bg-white dark:bg-background-dark shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </button>
              <div className="flex-1 md:text-center">
                <h1 className="text-3xl font-bold text-text-main">Sample Biodatas</h1>
                <p className="text-sm text-text-muted mt-1">See examples of beautiful biodata formats</p>
              </div>
              <button
                onClick={() => router.push("/templates")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition w-full md:w-auto justify-center shadow-md hover:shadow-lg"
              >
                Create Your Own
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sample List */}
          <div className="space-y-3">
            {SAMPLE_BIODATAS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  selectedSample.id === sample.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border-soft hover:border-primary/50"
                }`}
              >
                <p className="font-bold text-text-main">{sample.name}</p>
                <p className="text-sm text-text-muted mt-1">{sample.occupation}</p>
                <p className="text-xs text-text-muted">{sample.birthPlace}</p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border-soft bg-white dark:bg-midnight-accent shadow-lg overflow-hidden">
              <SamplePreview sample={selectedSample} />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-midnight-accent border border-border-soft text-text-main font-semibold rounded-lg hover:border-primary hover:text-primary transition">
                <Download size={18} />
                Download Sample
              </button>
              <button
                onClick={() => router.push("/templates")}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-md hover:shadow-lg"
              >
                Create Similar
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </CommonLayout>
  );
}

function SamplePreview({ sample }: { sample: (typeof SAMPLE_BIODATAS)[0] }) {
  return (
    <div className="relative w-full aspect-[1/1.414] bg-[#f5f1e8] shadow-2xl rounded-sm flex flex-col overflow-hidden text-[#2c241b]">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#f5f1e8] to-[#e8dcc8] opacity-50 pointer-events-none"></div>
      
      {/* Decorative borders */}
      <div className="absolute inset-3 border border-[#d4af37] opacity-60 pointer-events-none"></div>
      <div className="absolute inset-4 border-[2px] border-[#d4af37] pointer-events-none"></div>
      
      {/* Corner decorations */}
      <CornerDecoration className="absolute top-4 left-4 w-16 h-16" rotation="rotate-0" />
      <CornerDecoration className="absolute top-4 right-4 w-16 h-16" rotation="rotate-90" />
      <CornerDecoration className="absolute bottom-4 left-4 w-16 h-16" rotation="-rotate-90" />
      <CornerDecoration className="absolute bottom-4 right-4 w-16 h-16" rotation="rotate-180" />
      
      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 py-12 flex flex-col h-full overflow-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="flex justify-center mb-4 text-[#b8860b]">
            <span className="text-4xl">🕉️</span>
          </div>
          <div className="flex justify-between items-start">
            <div className="w-32 hidden md:block"></div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#4a3b2a] mb-2">
                Biodata
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-[#b8860b] italic">
                {sample.name}
              </h2>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 relative border-4 border-[#d4af37] shadow-md bg-white p-1 ml-4">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${sample.photoUrl}')` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <DetailSection title="Personal Details">
          <DetailRow label="Date of Birth" value={sample.dob} />
          <DetailRow label="Time of Birth" value={sample.birthTime} />
          <DetailRow label="Place of Birth" value={sample.birthPlace} />
          <DetailRow label="Height" value={sample.height} />
          <DetailRow label="Complexion" value={sample.complexion} />
        </DetailSection>

        {/* Astrological Details */}
        <DetailSection title="Astrological Details">
          <DetailRow label="Rasi (Moon Sign)" value={sample.rasi} />
          <DetailRow label="Nakshatra" value={sample.nakshatra} />
          <DetailRow label="Gotra" value={sample.gotra} />
          <DetailRow label="Manglik" value={sample.manglik} />
        </DetailSection>

        {/* Education & Profession */}
        <DetailSection title="Education & Profession">
          <DetailRow 
            label="Education" 
            value={
              <div className="space-y-1">
                {sample.education.map((edu, idx) => (
                  <div key={idx}>{edu}</div>
                ))}
              </div>
            } 
          />
          <DetailRow label="Occupation" value={sample.occupation} />
          <DetailRow label="Company" value={sample.company} />
          <DetailRow label="Annual Income" value={sample.income} />
        </DetailSection>

        {/* Family Details */}
        <DetailSection title="Family Details">
          <DetailRow label="Father" value={sample.father} />
          <DetailRow label="Mother" value={sample.mother} />
          <DetailRow label="Siblings" value={sample.siblings} />
          <DetailRow label="Contact" value={sample.contact} />
          <DetailRow label="Address" value={sample.address} />
        </DetailSection>

        {/* Footer ornament */}
        <div className="mt-auto pt-8 flex justify-center opacity-70">
          <svg className="h-6 w-auto text-[#d4af37]" viewBox="0 0 200 20" fill="currentColor">
            <path d="M10,10 Q20,0 30,10 T50,10 T70,10 T90,10 T110,10 T130,10 T150,10 T170,10 T190,10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="10" r="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CornerDecoration({ className, rotation }: { className: string; rotation: string }) {
  return (
    <div className={`${className} ${rotation} pointer-events-none`}>
      <svg
        className="w-full h-full text-[#d4af37]"
        fill="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2 L30 2 L30 10 L10 10 L10 30 L2 30 Z"
          fill="currentColor"
        ></path>
        <path
          d="M5 5 L50 5 M5 5 L5 50"
          stroke="currentColor"
          strokeWidth="1"
        ></path>
      </svg>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 text-[#b8860b] mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
        <span className="text-base md:text-lg font-bold uppercase tracking-wider whitespace-nowrap">
          {title}
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
      </div>
      <div className="space-y-2 text-xs md:text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-y-2">
      <div className="font-bold text-[#5c5542]">{label} :</div>
      <div className="text-[#2c241b]">{value}</div>
    </div>
  );
}
