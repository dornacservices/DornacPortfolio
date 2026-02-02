import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from '@shared/ui/navigation/Navbar/Navbar';
import MenuOverlay from '@shared/ui/navigation/MenuOverlay/MenuOverlay';
import Footer from '@shared/ui/layout/Footer/Footer';

// Homepage Sections
import Hero from '@shared/ui/layout/Hero/Hero';
import Partners from '@entities/partner/ui/Partners';
import HomepageAbout from '@shared/ui/layout/About/HomepageAbout';
import FeatureList from '@entities/service/ui/FeatureList'; // Functions as Services
import PortfolioSection from '@entities/project/ui/PortfolioSection';
import Process from '@shared/ui/layout/Process/Process';
import Testimonials from '@entities/testimonial/ui/Testimonials';
import BlogSection from '@entities/blog/ui/BlogSection';
import TeamSection from '@entities/team/ui/TeamSection';
import ContactPage from '@features/contact/ui/ContactPage';

// New Enhanced Sections
import ValueProposition from '@shared/ui/layout/ValueProp/ValueProposition';
import TechStack from '@shared/ui/layout/TechStack/TechStack';
import SuccessMetrics from '@shared/ui/layout/Metrics/SuccessMetrics';
import Awards from '@shared/ui/layout/Awards/Awards';
import FAQ from '@shared/ui/layout/FAQ/FAQ';
import Newsletter from '@features/newsletter/ui/Newsletter';
import LandingCTA from '@shared/ui/layout/CTA/LandingCTA';

// Inner Pages
import ServicePage from '@entities/service/ui/ServicePage';
import IndustryPage from '@pages/Industry/IndustryPage';
import CompanyPage from '@pages/Company/CompanyPage';
import ProjectPage from '@entities/project/ui/ProjectPage';
import TeamMemberPage from '@entities/team/ui/TeamMemberPage';

// Index Pages
import ServicesIndex from '@entities/service/ui/ServicesIndex';
import ProjectsIndex from '@entities/project/ui/ProjectsIndex';
import BlogPostPage from '@entities/blog/ui/BlogPostPage';

import { useAnimations } from '@shared/hooks/useAnimations';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Save current scroll position before navigating away
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    // Add event listener to save scroll position before leaving
    window.addEventListener('beforeunload', saveScrollPosition);

    // If navigating forward (PUSH/REPLACE), scroll to top
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    } else {
      // If navigating back (POP), restore saved scroll position
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedPosition) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }, 0);
      }
    }

    // Save scroll position when component unmounts (navigating away)
    return () => {
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, navType]);

  return null;
}

import TechBackground from '@shared/ui/layout/TechBackground/TechBackground';
import ParticleBackground from '@shared/ui/effects/ParticleBackground/ParticleBackground';

import GlobalLoader from '@shared/ui/loader/GlobalLoader';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useAnimations();

  return (
    <>
      <GlobalLoader />
      <ParticleBackground />
      <TechBackground />
      <ScrollToTop />
      <Navbar isOpen={isMenuOpen} onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="ui-layer" style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={
            <>
              {/* 1. Hero (Z-pattern) */}
              <Hero />
              {/* 2. Partners */}
              <Partners />
              {/* 3. Value Proposition (F-pattern) - NEW */}
              <ValueProposition />
              {/* 4. About & Stats (Z-pattern) */}
              <HomepageAbout />
              {/* 5. Services (Grid) */}
              <FeatureList />
              {/* 6. Technology Stack (Grid) - NEW */}
              <TechStack />
              {/* 7. Portfolio */}
              <PortfolioSection />
              {/* 8. Process (Z-pattern) */}
              <Process />
              {/* 9. Success Metrics (Z-pattern) - NEW */}
              <SuccessMetrics />
              {/* 10. Testimonials */}
              <Testimonials />
              {/* 11. Awards & Recognition (Z-pattern) - NEW */}
              <Awards />
              {/* 12. Team */}
              <TeamSection />
              {/* 13. FAQ (F-pattern) - NEW */}
              <FAQ />
              {/* 14. Blog */}
              <BlogSection />
              {/* 15. Newsletter (Z-pattern) - NEW */}
              <Newsletter />
              {/* 16. CTA */}
              <LandingCTA />
            </>
          } />

          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/projects" element={<ProjectsIndex />} />

          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/team/:slug" element={<TeamMemberPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/company/:slug" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}
