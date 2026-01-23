"use client";

import { useState } from "react";
import { 
  Users, 
  CheckCircle, 
  User, 
  Sparkles, 
  Baby, 
  Phone, 
  ZoomIn, 
  LockOpen, 
  ShieldCheck, 
  Download, 
  Share2, 
  ShieldAlert, 
  Menu,
  X
} from "lucide-react";

const FinalPreview = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsVerified(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f6f6] dark:bg-[#221013] text-[#1b0d10] dark:text-gray-100 font-serif transition-colors duration-200 flex flex-col">
      
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-[#f3e7e9] dark:border-white/10 px-6 lg:px-10 py-3 bg-white dark:bg-[#1a0b0d] sticky top-0 z-50">
        <div className="flex items-center gap-3 text-[#1b0d10] dark:text-white">
          <div className="text-[#d41132]">
            <Users className="size-8" />
          </div>
          <h2 className="text-xl font-bold tracking-tight font-sans">Biodata Generator</h2>
        </div>
        
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center font-sans">
          <nav className="flex items-center gap-6">
            {['Home', 'Templates', 'Pricing', 'Help'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-[#d41132] transition-colors dark:text-gray-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#1b0d10] dark:text-white">
          <Menu className="size-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10 lg:px-20">
        <div className="w-full max-w-[1200px]">
          
          {/* Progress Bar */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex justify-between items-center font-sans">
              <p className="text-base font-medium">Step 4 of 4: Final Preview</p>
              <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 border border-green-200">
                <CheckCircle className="size-3.5" /> Ready to Export
              </span>
            </div>
            <div className="rounded-full bg-[#e7cfd3] dark:bg-white/10 h-2 w-full overflow-hidden">
              <div className="h-full bg-[#d41132] w-full animate-pulse rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: A4 Preview */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative group perspective-1000">
                {/* A4 Paper Container */}
                <div className={`relative w-full max-w-[500px] aspect-[210/297] bg-white shadow-2xl rounded-sm overflow-hidden text-slate-800 transition-all duration-500 ease-out ${isVerified ? 'scale-100' : 'hover:scale-[1.01]'}`}>
                  
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#d41132]/30 rounded-tl-xl m-4" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#d41132]/30 rounded-tr-xl m-4" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#d41132]/30 rounded-bl-xl m-4" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#d41132]/30 rounded-br-xl m-4" />

                  {/* Watermark - Disappears when verified */}
                  {!isVerified && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 select-none overflow-hidden bg-white/10 backdrop-blur-[0.5px]">
                      <p className="text-[60px] sm:text-[80px] font-black text-slate-300/50 -rotate-45 tracking-widest whitespace-nowrap border-4 border-slate-300/50 p-4 rounded-xl">
                        PREVIEW ONLY
                      </p>
                    </div>
                  )}

                  {/* Paper Content */}
                  <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col items-center border-b border-[#d41132]/20 pb-6 mb-6">
                      <div className="w-28 h-28 rounded-full border-4 border-[#d41132]/10 overflow-hidden mb-4 shadow-inner bg-slate-100">
                        {/* Placeholder Image */}
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h1 className="text-3xl font-bold text-[#d41132] mb-1">Priya Sharma</h1>
                      <p className="text-slate-500 font-sans text-sm tracking-wide font-medium">26 Yrs • 5'6" • Software Engineer</p>
                    </div>

                    {/* Details Grid */}
                    <div className="flex-1 space-y-6 text-sm">
                      {/* Section 1 */}
                      <section>
                        <h3 className="text-[#d41132] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                          <User className="size-3.5" /> Personal Details
                        </h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 pl-2 font-sans text-slate-700">
                          <div className="col-span-1"><span className="font-semibold text-slate-900">DOB:</span> 14 Aug 1998</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Time:</span> 10:30 AM</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Place:</span> Mumbai, MH</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Height:</span> 5' 6"</div>
                          <div className="col-span-2"><span className="font-semibold text-slate-900">Complexion:</span> Fair</div>
                        </div>
                      </section>

                      {/* Section 2 */}
                      <section>
                        <h3 className="text-[#d41132] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                          <Sparkles className="size-3.5" /> Horoscope
                        </h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 pl-2 font-sans text-slate-700">
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Raasi:</span> Tula (Libra)</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Nakshatra:</span> Swati</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Gotra:</span> Kashyap</div>
                          <div className="col-span-1"><span className="font-semibold text-slate-900">Manglik:</span> No</div>
                        </div>
                      </section>

                      {/* Section 3 */}
                      <section>
                        <h3 className="text-[#d41132] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                          <Baby className="size-3.5" /> Family Background
                        </h3>
                        <div className="space-y-2 pl-2 font-sans text-slate-700">
                          <p><span className="font-semibold text-slate-900">Father:</span> Mr. Rajesh Sharma (Businessman)</p>
                          <p><span className="font-semibold text-slate-900">Mother:</span> Mrs. Anjali Sharma (Homemaker)</p>
                          <p><span className="font-semibold text-slate-900">Siblings:</span> 1 Younger Brother (Student)</p>
                        </div>
                      </section>

                      {/* Contact Footer */}
                      <section className="mt-auto pt-4 border-t border-dashed border-slate-300">
                        <div className="flex items-center gap-2 text-[#d41132] font-bold justify-center">
                          <Phone className="size-4 fill-current" /> +91 98765 43210
                        </div>
                      </section>
                    </div>

                    {/* Paper Bottom Decor */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-16 h-1 bg-[#d41132]/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Zoom Hint */}
                <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 text-sm opacity-70 font-sans">
                  <ZoomIn className="size-4" />
                  <span>Hover to zoom preview</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6 font-sans">
              
              {/* Heading */}
              <div>
                <h1 className="text-[#d41132] dark:text-red-500 text-3xl md:text-4xl font-black leading-tight tracking-tight mb-3">
                  {isVerified ? "Biodata Unlocked!" : "Your Biodata is Ready!"}
                </h1>
                <p className="text-[#9a4c59] dark:text-red-200 text-lg leading-relaxed">
                  {isVerified 
                    ? "You can now download the high-quality PDF without watermarks or share it directly."
                    : "Review your final document. Verify your number to remove the watermark and download the high-quality PDF."
                  }
                </p>
              </div>

              {/* Verification Card (Hidden if Verified) */}
              {!isVerified && (
                <div className="bg-white dark:bg-[#2f161a] rounded-xl shadow-lg border border-[#f3e7e9] dark:border-white/5 p-6 md:p-8 animate-in slide-in-from-bottom-5 fade-in duration-500">
                  <div className="flex items-center gap-2 mb-6">
                    <LockOpen className="text-[#d41132] size-6" />
                    <h3 className="text-xl font-bold text-[#1b0d10] dark:text-white">Verify to Download</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="phone">Mobile Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-slate-500 text-sm font-semibold">+91</span>
                        </div>
                        <input 
                          id="phone" 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 00000" 
                          className="block w-full pl-12 pr-20 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d41132] focus:border-transparent transition-all"
                        />
                        <button className="absolute inset-y-1.5 right-1.5 px-3 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white text-xs font-bold rounded hover:bg-slate-300 dark:hover:bg-white/20 transition-colors uppercase tracking-wide">
                          Send OTP
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="otp">Enter OTP Code</label>
                      <input 
                        id="otp" 
                        type="text" 
                        maxLength={4} 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="• • • •" 
                        className="block w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d41132] focus:border-transparent tracking-[0.5em] text-center font-bold text-lg transition-all"
                      />
                    </div>
                    
                    <button 
                      onClick={handleVerify}
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 bg-[#d41132] hover:bg-[#b00e2a] text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-[#d41132]/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <ShieldCheck className="size-5" />
                          Verify & Unlock
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons (Locked/Unlocked State) */}
              <div className={`space-y-4 transition-all duration-500 ${!isVerified ? 'opacity-60 pointer-events-none grayscale' : 'opacity-100'}`}>
                
                {/* Overlay for Locked State */}
                {!isVerified && (
                   <div className="hidden group-hover:flex absolute z-20 items-center justify-center">
                     {/* Tooltip logic handled by parent opacity in this simple version */}
                   </div>
                )}

                <button className="w-full flex items-center justify-center gap-3 bg-[#d41132] hover:bg-[#b00e2a] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-md border-b-4 border-[#9e0c25] active:border-b-0 active:translate-y-1 transition-all">
                  <Download className="size-6" />
                  Download High-Quality PDF
                </button>
                
                <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-md border-b-4 border-[#1da851] active:border-b-0 active:translate-y-1 transition-all">
                  <Share2 className="size-6" />
                  Share on WhatsApp
                </button>
              </div>

              {/* Security Note */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/40">
                <ShieldAlert className="text-orange-400 shrink-0 size-5 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-orange-800 dark:text-orange-200 uppercase mb-0.5">Secure & Private</p>
                  <p className="text-sm text-orange-700 dark:text-orange-300 leading-snug">
                    This biodata is private to you. The download link and file will expire automatically in 30 days.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinalPreview;