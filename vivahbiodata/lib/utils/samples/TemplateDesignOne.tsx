
export default function TemplateDesignOne() {
  return (
    <>
      <div className="flex-1 bg-[#e0e0e0] dark:bg-[#121212] overflow-auto p-8 md:p-12 flex justify-center items-start min-h-[calc(100vh-64px)]">
        <div className="relative w-full max-w-[800px] aspect-[1/1.414] bg-paper-cream shadow-2xl rounded-sm flex flex-col overflow-hidden text-[#2c241b]">
          <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none"></div>
          <div className="absolute inset-3 border border-[#d4af37] opacity-60 pointer-events-none"></div>
          <div className="absolute inset-4 border-[2px] border-[#d4af37] pointer-events-none"></div>
          <div className="absolute top-4 left-4 w-16 h-16 pointer-events-none">
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
          <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none rotate-90">
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
          <div className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none -rotate-90">
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
          <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none rotate-180">
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
          <div className="relative z-10 px-16 py-12 flex flex-col h-full">
            <div className="text-center mb-8 relative">
              <div className="flex justify-center mb-4 text-[#b8860b]">
                <span className="text-4xl">🕉️</span>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-32 hidden md:block"></div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold uppercase tracking-widest text-[#4a3b2a] mb-2 font-display">
                    Biodata
                  </h1>
                  <h2 className="text-2xl font-medium text-[#b8860b] italic">
                    Rohan Sharma
                  </h2>
                </div>
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative border-4 border-[#d4af37] shadow-md bg-white p-1 ml-4 md:ml-0 md:absolute md:right-0 md:top-6">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-alt="Portrait of a young Indian man in traditional attire"
                    style={{ backgroundImage: "url('https" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-[#b8860b] mb-4 decorative-divider font-display">
                <span className="text-lg font-bold uppercase tracking-wider whitespace-nowrap">
                  Personal Details
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-sm md:text-base leading-relaxed">
                <div className="font-bold text-[#5c5542]">Date of Birth :</div>
                <div className="text-[#2c241b]">15th August 1995</div>
                <div className="font-bold text-[#5c5542]">Time of Birth :</div>
                <div className="text-[#2c241b]">09:30 AM</div>
                <div className="font-bold text-[#5c5542]">Place of Birth :</div>
                <div className="text-[#2c241b]">Jaipur, Rajasthan</div>
                <div className="font-bold text-[#5c5542]">Height :</div>
                <div className="text-[#2c241b]">5' 10" (178 cm)</div>
                <div className="font-bold text-[#5c5542]">Complexion :</div>
                <div className="text-[#2c241b]">Fair</div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-[#b8860b] mb-4 decorative-divider font-display">
                <span className="text-lg font-bold uppercase tracking-wider whitespace-nowrap">
                  Astrological Details
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-sm md:text-base leading-relaxed">
                <div className="font-bold text-[#5c5542]">
                  Rasi (Moon Sign) :
                </div>
                <div className="text-[#2c241b]">Mesha (Aries)</div>
                <div className="font-bold text-[#5c5542]">Nakshatra :</div>
                <div className="text-[#2c241b]">Bharani</div>
                <div className="font-bold text-[#5c5542]">Gotra :</div>
                <div className="text-[#2c241b]">Vashishtha</div>
                <div className="font-bold text-[#5c5542]">Manglik :</div>
                <div className="text-[#2c241b]">No (Non-Manglik)</div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-[#b8860b] mb-4 decorative-divider font-display">
                <span className="text-lg font-bold uppercase tracking-wider whitespace-nowrap">
                  Education & Profession
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-sm md:text-base leading-relaxed">
                <div className="font-bold text-[#5c5542]">Education :</div>
                <div className="text-[#2c241b]">
                  B.Tech in Computer Science (IIT Bombay)
                  <br />
                  MBA (IIM Ahmedabad)
                </div>
                <div className="font-bold text-[#5c5542]">Occupation :</div>
                <div className="text-[#2c241b]">Senior Product Manager</div>
                <div className="font-bold text-[#5c5542]">Company :</div>
                <div className="text-[#2c241b]">
                  Tech Solutions Pvt Ltd, Bangalore
                </div>
                <div className="font-bold text-[#5c5542]">Annual Income :</div>
                <div className="text-[#2c241b]">35 LPA</div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-[#b8860b] mb-4 decorative-divider font-display">
                <span className="text-lg font-bold uppercase tracking-wider whitespace-nowrap">
                  Family Details
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-sm md:text-base leading-relaxed">
                <div className="font-bold text-[#5c5542]">Father :</div>
                <div className="text-[#2c241b]">
                  Mr. Rajesh Sharma (Govt. Officer, Retired)
                </div>
                <div className="font-bold text-[#5c5542]">Mother :</div>
                <div className="text-[#2c241b]">
                  Mrs. Sunita Sharma (Homemaker)
                </div>
                <div className="font-bold text-[#5c5542]">Siblings :</div>
                <div className="text-[#2c241b]">
                  1 Elder Sister (Married), 1 Younger Brother (Student)
                </div>
                <div className="font-bold text-[#5c5542]">Contact :</div>
                <div className="text-[#2c241b]">+91 98765 43210</div>
                <div className="font-bold text-[#5c5542]">Address :</div>
                <div className="text-[#2c241b]">
                  123, Civil Lines, Jaipur, Rajasthan
                </div>
              </div>
            </div>
            <div className="mt-auto pt-8 flex justify-center opacity-70">
              <img
                alt="Decorative vintage floral text divider"
                className="h-6 w-auto text-[#d4af37] filter sepia brightness-50 contrast-100 hue-rotate-15"
                data-alt="Decorative floral divider ornament"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjf1XMBmO6UuVRumHYNldmVPLZ_sUqWgun3rJEJpCxFwNkwL6dJcTvxSw_fDznJhPYIs-GJTrSU9W4ihH5jrDcuDIrB9MDcd_IxKXaEvrsVlwPOgrT64jYWpMGB-djThba8-ff3KE8i6zRhtCA2UYEtPZLGwyDoggHVkJcevumKHwJgegvhQse5Z1pZ-y5ZtNWlAk8zudp_0YN8NVKJfFUaDPRaT0x4w8vQQP_80XhymWFrYk9oov3nj_REu-lnwNLHJybJK0qAUG"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
