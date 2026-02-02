

import { Heart, User, CheckCircle } from 'lucide-react';

const Hero = () => {

  return (
    <div className="w-full max-w-[960px] px-4 md:px-10 py-12 md:py-20">
      <div className="@container">
        <div className="flex flex-col gap-8 md:gap-12 md:flex-row items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold tracking-wider text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full mx-auto md:mx-0">
                Trusted by 50,000+ Families
              </span>
              <h1 className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Create your Marriage Biodata in <span className="text-primary italic">3 minutes</span>
              </h1>
              <h2 className="text-text-muted text-lg font-medium leading-relaxed max-w-[600px] mx-auto md:mx-0 font-body">
                Professional PDF formats designed for WhatsApp sharing. No public profile required—your data stays private and secure.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href='/templates' className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-background-dark dark:text-background-dark text-base font-bold">
                Create Biodata
              </a>
              <a href='/samples' className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-base font-bold">
                View Samples
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mt-2">
              <CheckCircle size={18} />
              <span>No sign-up required for preview</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-5/12 flex justify-center relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl transform rotate-3 scale-90 group-hover:rotate-6 transition-transform duration-500"></div>
            <div
              className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden border-4 border-white"
              data-alt="Indian bride in traditional red saree holding a document"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-qWpm9gV-Nt1fp25e1xzuzZMZb_vBUen4O0n5XtKf0Y4F44zGry7eNHqwUaQm4kmLjr8M6VNehj4mySeTblLzn0Kg478c_uwyJBMCFARRbUzIaFkundvusyNSlTx3TZK9I31YqKYtrjAezg_I7Sq7xYcqKv9OhvjQ8ZOxmCaru3mUncUdJh3IqvCesWAO3DJCvUenCOEorfCiq0EqwJlL8Bnpgw2KkB55kiMCql397Du8zmmemMKyZnZshU1NHUFl9I1n4NanHwlE")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="bg-white dark:bg-midnight-accent/95 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-2">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-body">Ananya Sharma</p>
                      <p className="text-xs text-gray-500 font-body">26 Yrs • 5'6" • Software Engineer</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-green-600 flex items-center gap-1 font-body">
                      <CheckCircle size={14} /> Verified
                    </span>
                    <span className="text-xs text-gray-400 font-body">Biodata #2049</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;