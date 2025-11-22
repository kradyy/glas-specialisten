import React from 'react';
import { PlayCircle, Download } from 'lucide-react';

const HowTo: React.FC = () => {
  return (
    <div className="bg-stone-900 py-20 sm:py-24 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
             <h2 className="text-brand-400 font-bold tracking-wider uppercase text-xs mb-3">Monteringsguide</h2>
             <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
               Designat för dig. <br/>
               <span className="text-stone-400">Byggt för att hålla.</span>
             </h3>
             <p className="text-lg text-stone-300 mb-8 leading-relaxed">
               Du behöver inte vara snickare för att montera våra räcken. Vi erbjuder smarta mätverktyg, 3D-konfigurator och detaljerade videoguider för varje steg i processen.
             </p>
             
             <div className="space-y-6">
               <div className="flex group">
                 <div className="flex-shrink-0 mr-4">
                   <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-800 text-brand-400 font-bold border border-stone-700 group-hover:border-brand-500 group-hover:text-brand-300 transition-colors">
                     1
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-white">Mät</h4>
                   <p className="mt-1 text-stone-400 text-sm">Använd vår digitala guide för att få exakta mått på din uteplats.</p>
                 </div>
               </div>
               
               <div className="flex group">
                 <div className="flex-shrink-0 mr-4">
                   <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-800 text-brand-400 font-bold border border-stone-700 group-hover:border-brand-500 group-hover:text-brand-300 transition-colors">
                     2
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-white">Designa</h4>
                   <p className="mt-1 text-stone-400 text-sm">Välj glastyp, handledare och fästen direkt i vårt 3D-verktyg.</p>
                 </div>
               </div>

               <div className="flex group">
                 <div className="flex-shrink-0 mr-4">
                   <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-stone-800 text-brand-400 font-bold border border-stone-700 group-hover:border-brand-500 group-hover:text-brand-300 transition-colors">
                     3
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-white">Montera</h4>
                   <p className="mt-1 text-stone-400 text-sm">Följ de medföljande instruktionerna. Allt klickas eller skruvas enkelt ihop.</p>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="relative">
             {/* Decorative Blobs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/20 blur-[100px] rounded-full pointer-events-none"></div>

             <div className="relative rounded-2xl bg-stone-800 border border-stone-700 p-3 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative rounded-xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Installation process"
                        className="w-full opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors cursor-pointer">
                        <button className="bg-white/20 backdrop-blur-md border border-white/40 rounded-full p-5 text-white hover:bg-white hover:text-brand-600 transition-all hover:scale-110 shadow-xl">
                            <PlayCircle className="w-12 h-12 fill-current" />
                        </button>
                    </div>
                </div>
             </div>
             
             <div className="mt-8 flex justify-center">
                <button className="flex items-center px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-sm font-bold text-white border border-stone-700 transition-colors">
                    <Download className="w-4 h-4 mr-2 text-brand-400" />
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