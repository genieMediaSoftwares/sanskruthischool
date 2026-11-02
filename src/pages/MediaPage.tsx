import React, { useState } from 'react';
import { PageRoute, GalleryItem } from '../types';
import { GALLERY_ITEMS, ACHIEVEMENTS_DATA, NEWS_AND_CIRCULARS } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { LightboxModal } from '../components/common/LightboxModal';
import { CampusImage } from '../components/common/CampusImage';
import { 
  Image, Video, Award, FileText, Download, Eye, 
  ExternalLink, Calendar, Sparkles, Filter 
} from 'lucide-react';

interface MediaPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate, subSection }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'campus' | 'academics' | 'sports' | 'cultural' | 'kindergarten' | 'residential'>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-0">
      <PageHero
        title="Media Centre, Gallery & Circulars"
        subtitle="Explore high-resolution photography, video highlights, verified academic & sports achievements, and official school circulars."
        category="Public Archives"
        breadcrumbs={[{ label: 'Media Centre' }]}
        onNavigate={onNavigate}
        ctaText="View Circulars"
        onCtaClick={() => {
          const el = document.getElementById('circulars');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interactive Photo Gallery Section */}
      <section id="photo-gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Visual Archives
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                Photo Gallery
              </h2>
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              {(['all', 'campus', 'academics', 'sports', 'cultural', 'kindergarten', 'residential'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer capitalize whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-white text-[#0B1930] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'all' ? 'All Images' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid with rich visual scenes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => {
              const visualTypeMap: Record<string, any> = {
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
              const vType = visualTypeMap[item.id] || item.category || 'campus';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CampusImage
                    type={vType}
                    alt={item.title}
                    aspectRatio="4:3"
                    showBadge={false}
                    customSrc={item.imageUrl}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#0B2514]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-[#0B2514] font-bold text-xs shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#D01C24]" />
                      <span>View Full Image</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Gallery & Virtual Tour */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Video Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
              Campus Walkthrough & Special Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <CampusImage
                  type="campus"
                  alt="Campus Aerial Tour"
                  aspectRatio="16:9"
                  showBadge={false}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-12 h-12 rounded-full bg-[#D01C24] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <Video className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#0B1930]">
                    Glimpse of Sanskruthi Global School Campus
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Panoramic view of academic blocks, equestrian manege, athletic track, and boarding amenities.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-[#114B25] pt-2">
                  Duration: 3m 45s · HD Video
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <CampusImage
                  type="equestrian"
                  alt="Annual Sports Meet"
                  aspectRatio="16:9"
                  showBadge={false}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-12 h-12 rounded-full bg-[#D01C24] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <Video className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#0B1930]">
                    Equestrian & Archery Showcase 2025
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Students presenting dressage, show jumping, precision archery, and martial arts drills.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-[#114B25] pt-2">
                  Duration: 5m 12s · HD Video
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <CampusImage
                  type="stem"
                  alt="THINKEDGE Innovation Fair"
                  aspectRatio="16:9"
                  showBadge={false}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-12 h-12 rounded-full bg-[#D01C24] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <Video className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#0B1930]">
                    Young Innovators & STEM Prototyping
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Working student projects in micro-controllers, green energy, and environmental mechanics.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-[#114B25] pt-2">
                  Duration: 4m 20s · HD Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Achievements Archive */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Institutional Honors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
              Verified School Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#142B49]">{ach.category}</span>
                    <span className="font-mono text-slate-500">{ach.year}</span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B1930]">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {ach.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circulars & Notices Archive */}
      <section id="circulars" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Administrative Bulletin
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
              Official Circulars & Notices (2025–26 & 2026–27)
            </h2>
          </div>

          <div className="space-y-3">
            {NEWS_AND_CIRCULARS.map((circ) => (
              <div
                key={circ.id}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-[#C6A15B] uppercase">{circ.category}</span>
                    <span>·</span>
                    <span>{circ.date}</span>
                  </div>
                  <h4 className="text-sm font-bold font-heading text-[#0B1930]">
                    {circ.title}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    {circ.summary}
                  </p>
                </div>

                <button
                  onClick={() => alert(`Downloading official PDF: ${circ.title} (${circ.fileSize})`)}
                  className="px-4 py-2 bg-[#0B1930] hover:bg-[#142B49] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Download Circular</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
};
