import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-brand-900 tracking-tight">Glas Specialisten</span>
             </div>
             <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                Skräddarsytt, anpassat glas för ditt hem. Beställ online och få det levererat direkt hem utan mellanhänder.
             </p>
             <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-brand-600 hover:text-white transition-all"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-brand-600 hover:text-white transition-all"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-brand-600 hover:text-white transition-all"><Linkedin className="h-5 w-5" /></a>
             </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Produkter</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Anpassat Glas</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Rostfritt Glas</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Alu Modern</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Accessoarer</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Vindskydd</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Kundservice</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Monteringsanvisningar</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Vanliga frågor (FAQ)</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Kontakta oss</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Köpvillkor</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Returer & Reklamation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-stone-900 tracking-wider uppercase mb-4">Om Oss</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Vår historia</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Jobba hos oss</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Hållbarhet</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-brand-600 hover:underline decoration-2 underline-offset-4">Integritetspolicy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-stone-400 font-medium">
                &copy; 2024 Glas Specialisten Sweden AB. Org.nr: 556000-0000.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Klarna_logo.svg/2560px-Klarna_logo.svg.png" className="h-5 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" alt="Klarna" />
                <div className="h-4 w-px bg-stone-300 mx-2"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;