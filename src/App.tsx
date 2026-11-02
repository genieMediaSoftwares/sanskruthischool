import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { CampusPage } from './pages/CampusPage';
import { SportsPage } from './pages/SportsPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { MediaPage } from './pages/MediaPage';
import { PaymentPage } from './pages/PaymentPage';
import { DisclosurePage } from './pages/DisclosurePage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [subSection, setSubSection] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser URL path
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      const validRoutes: PageRoute[] = [
        'home', 'about', 'academics', 'campus', 
        'sports-and-activities', 'student-life', 'admissions', 
        'media', 'online-payment', 'mandatory-public-disclosure', 'contact'
      ];
      if (path && validRoutes.includes(path as PageRoute)) {
        setCurrentRoute(path as PageRoute);
      } else {
        setCurrentRoute('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track scroll position for "Back to Top" button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navigateTo = (route: PageRoute, targetSection?: string) => {
    setCurrentRoute(route);
    setSubSection(targetSection);

    // Update browser history URL
    const targetUrl = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }

    // Scroll handling
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update document title for SEO
    const pageTitles: Record<PageRoute, string> = {
      'home': 'Sanskruthi Global School | CBSE Residential & Day School, Visakhapatnam',
      'about': 'About Us | Sanskruthi Global School, Bonangi',
      'academics': 'Academics & CBSE Curriculum | Sanskruthi Global School',
      'campus': '10-Acre Campus & Infrastructure | Sanskruthi Global School',
      'sports-and-activities': 'Sports Academies & Clubs | Sanskruthi Global School',
      'student-life': 'Student Life & Houses | Sanskruthi Global School',
      'admissions': 'Admissions 2026–27 & TC Verification | Sanskruthi Global School',
      'media': 'Media Centre, Gallery & Circulars | Sanskruthi Global School',
      'online-payment': 'Online Fee Payment | Sanskruthi Global School',
      'mandatory-public-disclosure': 'CBSE Mandatory Public Disclosure | Sanskruthi Global School',
      'contact': 'Contact Us & Campus Location | Sanskruthi Global School'
    };
    document.title = pageTitles[route] || 'Sanskruthi Global School';
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} subSection={subSection} />;
      case 'academics':
        return <AcademicsPage onNavigate={navigateTo} subSection={subSection} />;
      case 'campus':
        return <CampusPage onNavigate={navigateTo} subSection={subSection} />;
      case 'sports-and-activities':
        return <SportsPage onNavigate={navigateTo} subSection={subSection} />;
      case 'student-life':
        return <StudentLifePage onNavigate={navigateTo} subSection={subSection} />;
      case 'admissions':
        return <AdmissionsPage onNavigate={navigateTo} subSection={subSection} />;
      case 'media':
        return <MediaPage onNavigate={navigateTo} subSection={subSection} />;
      case 'online-payment':
        return <PaymentPage onNavigate={navigateTo} />;
      case 'mandatory-public-disclosure':
        return <DisclosurePage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#202B38] font-sans antialiased selection:bg-[#C6A15B]/30 selection:text-[#0B1930]">
      {/* Utility Top Bar */}
      <TopBar onNavigate={navigateTo} />

      {/* Main Sticky Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Page Content Viewport */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Quick Contacts (WhatsApp & Phone & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white text-[#0B1930] shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Quick Action */}
        <a
          href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Sanskruthi%20Global%20School,%20I%20am%20interested%20in%20admissions...`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-xl hover:bg-emerald-700 transition-transform hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Admissions Help</span>
        </a>
      </div>
    </div>
  );
}
