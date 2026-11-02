import React from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GalleryItem } from '../../types';
import { CampusImage, VisualType } from './CampusImage';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  const visualTypeMap: Record<string, VisualType> = {
    'g-1': 'campus',
    'g-2': 'equestrian',
    'g-3': 'swimming',
    'g-4': 'stem',
    'g-5': 'archery',
    'g-6': 'shooting',
    'g-7': 'classroom',
    'g-8': 'organic-farm',
    'g-9': 'kindergarten',
    'g-10': 'hostel',
    'g-11': 'sports',
    'g-12': 'cultural'
  };

  const vType = visualTypeMap[item.id] || (item.category as VisualType) || 'campus';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 hidden sm:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 hidden sm:block"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container with rich CampusImage */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <CampusImage
            type={vType}
            alt={item.title}
            aspectRatio="16:9"
            showBadge={true}
            className="w-full h-full"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center text-white max-w-2xl w-full">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-0.5">
            {item.category.toUpperCase()} · SANSKRUTHI GLOBAL SCHOOL
          </div>
          <h3 className="text-lg font-bold font-heading text-white">
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
