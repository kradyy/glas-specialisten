import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-stone-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          {/* Angle Cut */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-stone-100 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold mb-6 tracking-wide uppercase">
                 <span className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></span>
                 Sveriges ledande leverantör
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-stone-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block xl:inline">Skapa din</span>{' '}
                <span className="block text-brand-600 xl:inline">drömvy idag.</span>
              </h1>
              <p className="mt-3 text-base text-stone-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium">
                Högkvalitativa glasräcken, skräddarsydda för det nordiska klimatet. Förvandla din balkong eller altan med våra lättmonterade premiumlösningar.
              </p>
              
              <div className="mt-4 space-y-2 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center lg:justify-start text-sm text-stone-500">
                  <div className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-500"/> Designa online</div>
                  <div className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-500"/> Fri frakt</div>
                  <div className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-500"/> Snabb leverans</div>
              </div>

              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#products"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-all duration-200 shadow-lg shadow-brand-200 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Designa ditt räcke
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a
                    href="#inspiration"
                    className="w-full flex items-center justify-center px-8 py-4 border-2 border-stone-200 text-base font-bold rounded-xl text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-300 md:text-lg transition-all duration-200"
                  >
                    Se inspiration
                  </a>
                </div>
              </div>
              
              <div className="mt-10 flex items-center gap-3 text-sm text-stone-500 sm:justify-center lg:justify-start border-t border-stone-200 pt-6 w-max">
                 <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
                 </div>
                 <div>
                    <span className="flex items-center text-stone-900 font-bold">
                        4.8/5 <span className="text-yellow-400 ml-1 text-lg">★★★★★</span>
                    </span>
                    <span className="text-xs">Baserat på 2 400+ omdömen</span>
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-stone-200 h-full">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern house with glass balcony railing"
        />
        {/* Gradient overlays for text readability on smaller screens and blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100 to-transparent lg:via-stone-100/10 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100 via-transparent to-transparent lg:hidden"></div>
      </div>
    </div>
  );
};

export default Hero;