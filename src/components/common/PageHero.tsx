import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../../types';

interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
  breadcrumbs: BreadcrumbItem[];
  onNavigate: (route: PageRoute) => void;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  category = "Sanskruthi Global School",
  breadcrumbs,
  onNavigate,
  ctaText,
  onCtaClick
}) => {
  return (
    <div className="relative bg-[#0B1930] text-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#C6A15B] overflow-hidden">
      {/* Subtle geometric and atmospheric background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#244D78]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-300/80 mb-4" aria-label="Breadcrumb">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#E8D6AD] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Home</span>
          </button>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {crumb.route ? (
                <button
                  onClick={() => onNavigate(crumb.route!)}
                  className="hover:text-[#E8D6AD] transition-colors cursor-pointer"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#E8D6AD] font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Category kicker */}
        <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] mb-2">
          {category}
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight max-w-4xl text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Optional Action CTA */}
        {ctaText && onCtaClick && (
          <div className="mt-6">
            <button
              onClick={onCtaClick}
              className="px-5 py-2.5 rounded-lg bg-[#C6A15B] text-[#0B1930] hover:bg-[#E8D6AD] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
