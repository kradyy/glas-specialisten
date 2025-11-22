import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col">
      {/* Image Area - Transparent & Clean */}
      <div className="w-full aspect-square mb-4 relative flex items-center justify-center bg-transparent">
        <img
          src={product.image}
          alt={product.name}
          className="w-[85%] h-[85%] object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-xl"
        />
        
        {/* Minimal Badge - Top Left */}
        {product.badge && (
          <div className="absolute top-0 left-0">
            <span className={`inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm
              ${product.badge === 'Kampanj' ? 'bg-red-600 text-white' : 'bg-stone-900 text-white'}`}>
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Details - Left Aligned Clean Store Look */}
      <div className="flex flex-col gap-1 text-left">
        <h3 className="text-base font-bold text-stone-900 leading-tight group-hover:text-brand-600 transition-colors">
            {product.name}
        </h3>
        <p className="text-xs text-stone-500 uppercase tracking-wide">{product.category}</p>
        
        <div className="text-sm font-bold text-stone-900 mt-1 mb-3">
            {product.priceStart.toLocaleString('sv-SE')} kr
        </div>

        {/* Button */}
        <button className="w-full py-2.5 bg-brand-600 text-white font-bold text-sm rounded-lg hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md">
            Beräkna pris
        </button>
      </div>
    </div>
  );
};

export default ProductCard;