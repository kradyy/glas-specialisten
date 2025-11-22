import React from "react";
import { PlayCircle, Download } from "lucide-react";

const HowTo: React.FC = () => {
  return (
    <div className="bg-white py-20 sm:py-24 text-stone-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-100 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-3">
              Monteringsguide
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Designat för dig. <br />
              <span className="text-brand-600">Byggt för att hålla.</span>
            </h3>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Du behöver inte vara snickare för att installera ditt anpassade glas. Vi
              erbjuder smarta mätverktyg, 3D-konfigurator och detaljerade
              videoguider för varje steg i processen.
            </p>

            <div className="space-y-6">
              <div className="flex group">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-200 text-brand-600 font-bold border border-stone-300 group-hover:border-brand-500 group-hover:text-brand-400 transition-colors">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Mät</h4>
                  <p className="mt-1 text-stone-500 text-sm">
                    Använd vår digitala guide för att få exakta mått på din
                    uteplats.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-200 text-brand-600 font-bold border border-stone-300 group-hover:border-brand-500 group-hover:text-brand-400 transition-colors">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Designa</h4>
                  <p className="mt-1 text-stone-500 text-sm">
                    Välj glastyp, handledare och fästen direkt i vårt
                    3D-verktyg.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-200 text-brand-600 font-bold border border-stone-300 group-hover:border-brand-500 group-hover:text-brand-400 transition-colors">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Montera</h4>
                  <p className="mt-1 text-stone-500 text-sm">
                    Följ de medföljande instruktionerna. Allt klickas eller
                    skruvas enkelt ihop.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-100/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative rounded-2xl bg-stone-100 border border-stone-200 p-3 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Installation process"
                  className="w-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors cursor-pointer">
                  <button className="bg-white/60 backdrop-blur-md border border-white/40 rounded-full p-5 text-brand-600 hover:bg-white hover:text-brand-700 transition-all hover:scale-110 shadow-xl">
                    <PlayCircle className="w-12 h-12 fill-current" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="flex items-center px-6 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-sm font-bold text-brand-700 border border-stone-300 transition-colors">
                <Download className="w-4 h-4 mr-2 text-brand-600" />
                Ladda ner monteringsanvisning (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
