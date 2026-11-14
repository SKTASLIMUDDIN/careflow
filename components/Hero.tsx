'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export default function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section id="overview" className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      {/* Background Soft Glow - Minimal & Subdued */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/50 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Doctor-Targeted Messaging */}
          <div className="lg:col-span-7">
            
            {/* Minimal Sub-Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 font-semibold tracking-wide rounded-full text-xs border border-teal-200/80">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                CareFlow • By CAPSIC CARE
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 text-slate-600 font-medium text-xs rounded-full border border-slate-200">
                <MapPin className="w-3 h-3 text-slate-500" />
                Howrah &amp; Kolkata Practice Network
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 leading-[1.14] mb-5 tracking-tight">
              You Take Care of Your Patients. <br className="hidden sm:inline" />
              <span className="text-teal-600">We&apos;ll Help You Stay Connected.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed font-normal">
              CareFlow helps independent doctors manage post-consultation follow-ups, patient reminders and prescribed diagnostic coordination through a dedicated patient-care support team.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <button
                onClick={onOpenTrialModal}
                className="px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base active:scale-98"
              >
                <span>Start Your 3-Month Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="#calculator"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Calculator className="w-4 h-4 text-slate-500" />
                <span>Calculate Practice Benefit</span>
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Built for Independent Doctors and Private Chambers in Howrah &amp; Kolkata. Zero software learning curve.</span>
            </div>

          </div>

          {/* Right Column: Clean Chamber Flow Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-900/5 border border-slate-200/90 relative">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700">Chamber Coordination Flow</h2>
                  <p className="text-xs text-slate-500">Post-Consultation Patient Adherence</p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  90-Day Free Pilot
                </span>
              </div>

              {/* 4 Minimal Timeline Nodes */}
              <div className="space-y-3 text-xs">
                
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Consultation Completed</span>
                    <span className="text-slate-500 text-[11px]">Doctor advises review in 14 days + routine blood tests.</span>
                  </div>
                </div>

                <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                  <div>
                    <span className="font-semibold text-teal-950 block">Care Coordinator Reach-out (Day 4)</span>
                    <span className="text-slate-600 text-[11px]">Polite call in Bengali/Hindi checking medication tolerance on your chamber&apos;s behalf.</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Diagnostic Test Reminder (Day 10)</span>
                    <span className="text-slate-500 text-[11px]">Patient reminded to complete tests. Home sample collection available across Howrah &amp; Kolkata.</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-semibold text-emerald-950 block">Review Visit Completed (Day 14)</span>
                    <span className="text-slate-600 text-[11px]">Patient arrives on schedule with investigation reports ready on the doctor&apos;s desk.</span>
                  </div>
                </div>

              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Coordination desk by Capsic Care</span>
                <span className="text-teal-700 font-semibold">Zero administrative effort for doctor</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
