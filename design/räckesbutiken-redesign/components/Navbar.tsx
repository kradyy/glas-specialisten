import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Phone, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      {/* Top Utility Bar */}
      <div className="bg-brand-600 text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium tracking-wide uppercase">
        <span>Beställ nu: Få 10% rabatt på ditt första anpassade glas med koden GLAS10</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
             <div className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-stone-900 tracking-tight leading-none">Glas Specialisten</span>
                <span className="text-[10px] text-stone-400 tracking-widest uppercase font-semibold leading-none">Sverige</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-600 hover:text-brand-600 px-1 py-2 text-sm font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-brand-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <div className="hidden xl:flex flex-col items-end mr-4 border-r border-stone-100 pr-6">
                 <span className="text-[10px] text-stone-400 font-bold uppercase">Kundservice</span>
                 <span className="text-sm font-bold text-stone-800">040-12 34 56</span>
            </div>

            <button className="p-2 text-stone-600 hover:text-brand-600 hover:bg-stone-50 rounded-full transition-all">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-stone-600 hover:text-brand-600 hover:bg-stone-50 rounded-full transition-all">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 relative text-stone-600 hover:text-brand-600 hover:bg-stone-50 rounded-full transition-all group">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-500 hover:text-brand-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-600 hover:text-brand-600 hover:bg-stone-50 block px-4 py-4 rounded-lg text-base font-bold border-b border-stone-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <div className="mt-4 px-4 py-4 bg-stone-50 rounded-lg flex items-center gap-3">
                 <Phone className="h-5 w-5 text-brand-600" />
                 <div>
                     <div className="text-xs text-stone-500 font-bold uppercase">Kundservice</div>
                     <div className="font-bold text-stone-800">040-12 34 56</div>
                 </div>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;