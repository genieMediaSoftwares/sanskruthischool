import React from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GalleryItem } from '../../types';
import { REAL_IMAGE_MAP, VisualType } from './CampusImage';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  const defaultImg = REAL_IMAGE_MAP[item.category as VisualType]?.src || '/images/Slider_20230727040104AM_20220709_140451.jpg';
  const displaySrc = item.imageUrl || defaultImg;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container with Real Photograph */}
      <div className="max-w-5xl w-full flex flex-col items-center max-h-[92vh]">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center max-h-[75vh]">
          <img
            src={displaySrc}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain object-center"
          />
        </div>

        {/* Real Photo Caption Bar */}
        <div className="mt-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center text-white max-w-2xl w-full">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-0.5">
            {item.category.toUpperCase()} · SANSKRUTHI GLOBAL SCHOOL VISAKHAPATNAM
          </div>
          <h3 className="text-base sm:text-lg font-bold font-heading text-white">
            {item.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
