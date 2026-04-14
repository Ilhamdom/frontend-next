import React from 'react';
import { Button } from './Button';

export interface CardProps {
  variant?: 'basic' | 'horizontal' | 'overlay';
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaVariant?: 'primary' | 'secondary' | 'tertiary';
  onCtaClick?: () => void;
  avatarIcon?: React.ReactNode;
  className?: string;
}

export function Card({
  variant = 'basic',
  title,
  description,
  image,
  ctaText,
  ctaVariant = 'primary',
  onCtaClick,
  avatarIcon,
  className = '',
}: CardProps) {
  
  // Basic & Overlay width limits - keeping it flexible per container but strictly constrained when needed
  const verticalLimits = "min-w-[240px] max-w-[400px]";
  const horizontalLimits = "min-w-[320px] max-w-[720px]";

  if (variant === 'overlay') {
    return (
      <div className={`relative flex flex-col justify-end overflow-hidden outline-gray-200 outline outline-1 rounded-xl shadow-md ${verticalLimits} ${className} min-h-[380px] w-full`}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform hover:scale-105 duration-700"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-slate-800 z-0" />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        
        <div className="relative z-20 flex flex-col p-6 w-full text-white mt-auto">
          {avatarIcon && (
            <div className="mb-4 flex shrink-0 justify-center items-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
              {avatarIcon}
            </div>
          )}
          <h3 className="text-xl font-bold mb-2 leading-snug">{title}</h3>
          <p className="text-sm text-gray-200 line-clamp-3 leading-relaxed mb-6">
            {description}
          </p>
          {ctaText && (
            <Button 
              variant={ctaVariant === 'primary' ? 'primary' : 'secondary'} 
              size="40" 
              onClick={onCtaClick} 
              className={ctaVariant === 'secondary' ? "w-fit bg-white/10 text-white border-white/40 hover:bg-white/20" : "w-fit"}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-col sm:flex-row rounded-xl shadow-md outline outline-1 outline-gray-200 overflow-hidden bg-white ${horizontalLimits} ${className} w-full`}>
        {image && (
          <div className="w-full sm:w-[200px] shrink-0">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover aspect-video sm:aspect-auto"
            />
          </div>
        )}
        <div className="flex flex-col p-6 w-full">
          {avatarIcon && (
            <div className="mb-4 flex shrink-0">
              {avatarIcon}
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          {ctaText && (
            <Button variant={ctaVariant} size="40" onClick={onCtaClick} className="w-fit mt-auto">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Basic Variant
  return (
    <div className={`flex flex-col rounded-xl shadow-md outline outline-1 outline-gray-200 overflow-hidden bg-white ${verticalLimits} ${className} w-full`}>
      {image && (
        <div className="w-full aspect-video overflow-hidden shrink-0 bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-col p-6 w-full flex-grow">
        {avatarIcon && (
          <div className="mb-4 flex shrink-0">
            {avatarIcon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {ctaText && (
          <Button variant={ctaVariant} size="40" onClick={onCtaClick} className="w-fit mt-auto">
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}
