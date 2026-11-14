'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export default function Header({ onOpenTrialModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy to highlight active nav link
      const sections = ['overview', 'chamber-challenge', 'how-it-works', 'calculator', 'coverage', 'faq'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: 'Overview', id: 'overview' },
    { href: '#chamber-challenge', label: 'Chamber Reality', id: 'chamber-challenge' },
    { href: '#how-it-works', label: 'How It Works', id: 'how-it-works' },
    { href: '#calculator', label: 'Practice Calculator', id: 'calculator', isHighlight: true },
    { href: '#coverage', label: 'Howrah & Kolkata', id: 'coverage' },
    { href: '#faq', label: 'Doctor FAQ', id: 'faq' },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${isScrolled ? 'shadow-md shadow-slate-900/5' : ''}`}>
      <nav className="glass bg-white/95 backdrop-blur-xl border-b border-slate-200/80 rounded-b-2xl md:rounded-b-3xl shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Brand Logo: Capsic Care + CareFlow Wordmark */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.capsic.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Capsic Care Main Site"
                className="flex items-center gap-2 group hover:opacity-90 transition-opacity shrink-0"
              >
                <img
                  src="/assets/brand/capsic-logo.png"
                  alt="Capsic Care Logo"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-xl object-contain shadow-sm border border-slate-100"
                />
              </a>

              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

              <Link href="#overview" className="flex flex-col group">
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                  Care<span className="text-teal-600">Flow</span>
                </span>
                <span className="text-[9.5px] font-extrabold text-slate-500 uppercase tracking-wider leading-tight mt-0.5">
                  BY CAPSIC CARE
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 ml-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                      link.isHighlight
                        ? 'text-teal-700 bg-teal-50/80 hover:bg-teal-100 border border-teal-200/60 shadow-2xs'
                        : isActive
                        ? 'text-teal-700 bg-slate-100/80'
                        : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Header Right Action & Hotline */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Doctor Hotline Pill */}
              <a
                href="tel:+918337077656"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 bg-slate-100/90 hover:bg-slate-200/80 rounded-lg border border-slate-200/70 transition-all"
                title="Call Doctor Support"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>+91 8337077656</span>
              </a>

              {/* High-Impact CTA */}
              <button
                onClick={onOpenTrialModal}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-teal-600/25 transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-teal-200" />
                <span>Start 3-Month Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:+918337077656"
                className="p-2 text-teal-700 bg-teal-50 rounded-lg border border-teal-200"
                aria-label="Call Doctor Support"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  link.isHighlight
                    ? 'text-teal-800 bg-teal-50 border border-teal-200'
                    : 'text-slate-800 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Quick Action Buttons */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href="tel:+918337077656"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call 8337077656</span>
                </a>
                <a
                  href="https://wa.me/918337077656?text=Hello%20Capsic%20Care%2C%20I%20am%20a%20doctor%20inquiring%20about%20CareFlow."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-bold shadow-md shadow-teal-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Start Your 3-Month Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
