'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export default function Header({ onOpenTrialModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#chamber-challenge', label: 'The Challenge' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#calculator', label: 'Practice Calculator' },
    { href: '#coverage', label: 'Locations' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-slate-200/70' : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          
          {/* Brand Logo: Clean, Proportional, Minimal */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.capsic.in/"
              target="_blank"
              rel="noopener noreferrer"
              title="Capsic Care Official Site"
              className="flex items-center gap-2 group transition-opacity hover:opacity-85"
            >
              <img
                src="/assets/brand/capsic-logo.png"
                alt="Capsic Care Logo"
                className="w-8 h-8 rounded-lg object-contain border border-slate-200/60 shadow-2xs"
              />
            </a>

            <div className="h-6 w-px bg-slate-200"></div>

            <Link href="#overview" className="flex flex-col group">
              <span className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                Care<span className="text-teal-600">Flow</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                BY CAPSIC CARE
              </span>
            </Link>
          </div>

          {/* Desktop Center Navigation: Minimal & Uncluttered */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-xs md:text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions: Clean, High-Conversion */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918337077656"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>+91 8337077656</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs md:text-sm font-semibold transition-all shadow-xs flex items-center gap-1.5 active:scale-98"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-semibold"
            >
              Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 py-5 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+918337077656"
              className="py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
            >
              Call Hotline: +91 8337077656
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-2.5 bg-teal-600 text-white rounded-lg text-xs font-bold shadow-xs text-center"
            >
              Start 3-Month Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
