import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-100">
            
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                <button className="flex items-center gap-2 text-sm font-bold text-stone-900 border border-stone-200 px-4 py-2 rounded hover:bg-stone-50 transition-colors whitespace-nowrap">
                    <Filter className="w-4 h-4" /> Filter
                </button>
                
                <div className="flex items-center gap-2">
                    {['Alla', 'Anpassat Glas', 'Rostfritt Glas', 'Glas Design'].map((cat, idx) => (
                        <button 
                            key={cat} 
                            className={`text-sm font-bold px-4 py-2 rounded transition-colors whitespace-nowrap ${
                                idx === 0 ? 'bg-brand-600 text-white' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6">
                <span className="text-sm text-stone-500 font-medium hidden sm:block">{PRODUCTS.length} produkter</span>
                <button className="flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-brand-600">
                    Sortera <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-200 text-sm font-bold rounded text-stone-900 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 uppercase tracking-wide">
            Visa fler
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;