'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export default function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section id="overview" className="relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28">
      {/* Background Gradients & Glow matching Capsic Care */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-slate-50 z-0"></div>
      <div className="absolute top-0 right-0 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Doctor-Targeted Messaging */}
          <div className="lg:col-span-7">
            
            {/* Badges & Identity */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-teal-100 text-teal-800 font-bold tracking-wider rounded-full text-xs sm:text-sm border border-teal-200 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                CAREFLOW — BY CAPSIC CARE
              </span>

              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-slate-100 text-slate-700 font-bold text-[11px] sm:text-xs rounded-full border border-slate-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Howrah &amp; Kolkata Private Chambers
              </span>
            </div>

            {/* Positioning & Tagline */}
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-teal-700">
                Patient Follow-up &amp; Care Coordination • Care Beyond Consultation.
              </span>
            </div>

            {/* Mandatory Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-slate-900 leading-[1.15] mb-5 tracking-tight">
              You Take Care of Your Patients. <br className="hidden sm:inline" />
              <span className="text-teal-600">We&apos;ll Help You Stay Connected.</span>
            </h1>

            {/* Mandatory Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 max-w-2xl leading-relaxed font-normal">
              CareFlow helps independent doctors manage post-consultation follow-ups, patient reminders and prescribed diagnostic coordination through a dedicated patient-care support team.
            </p>

            {/* Mandatory Trust Statement */}
            <div className="flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-slate-600 bg-white/80 border border-slate-200/90 rounded-xl px-3.5 py-2.5 max-w-xl shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span><strong>Built for Independent Doctors and Private Chambers in Howrah &amp; Kolkata.</strong></span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              {/* Main CTA */}
              <button
                onClick={onOpenTrialModal}
                className="px-7 py-3.5 sm:px-8 sm:py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/25 text-center flex items-center justify-center gap-2 text-sm sm:text-base active:scale-98"
              >
                <span>Start Your 3-Month Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <Link
                href="#calculator"
                className="px-7 py-3.5 sm:px-8 sm:py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Calculator className="w-4 h-4 text-teal-600" />
                <span>Calculate Your Practice&apos;s Potential Benefit</span>
              </Link>
            </div>

            {/* Micro Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-teal-600 font-bold">✓</span> 90 Days 100% Free Trial
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-teal-600 font-bold">✓</span> Zero Software to Install
              </div>
              <div className="flex items-center gap-2 font-medium col-span-2 sm:col-span-1">
                <span className="text-teal-600 font-bold">✓</span> Bengali &amp; Hindi Calling
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Chamber Coordination Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 relative overflow-hidden capsic-card-hover">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-lg">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Chamber Care Desk</h3>
                    <p className="text-[11px] text-slate-500">Live Post-Consultation Workflow</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active Desk
                </span>
              </div>

              {/* Realistic Timeline Stream for Solo Chamber */}
              <div className="space-y-4 text-xs">
                
                {/* Step A */}
                <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-800">OPD Consultation Done</span>
                      <span className="text-[10px] text-slate-600">Day 1</span>
                    </div>
                    <p className="text-slate-600 mt-0.5">Doctor advises 14-day follow-up review + Fasting Blood Sugar &amp; Lipid Profile test.</p>
                  </div>
                </div>

                {/* Step B */}
                <div className="flex gap-3 items-start p-3 bg-teal-50/70 rounded-xl border border-teal-200/80">
                  <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-teal-900">CareFlow Coordinator Call</span>
                      <span className="text-[10px] text-teal-800 font-semibold">Day 4</span>
                    </div>
                    <p className="text-teal-900 mt-0.5 leading-relaxed">
                      &quot;Nomoshkar, we are calling on behalf of Dr. Roy&apos;s Chamber. Did you have any difficulty finding your prescribed medicines?&quot;
                    </p>
                  </div>
                </div>

                {/* Step C */}
                <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-800">Prescribed Test Reminder</span>
                      <span className="text-[10px] text-slate-600">Day 10</span>
                    </div>
                    <p className="text-slate-600 mt-0.5">Patient reminded to complete tests. Home sample collection arranged in Howrah via Capsic Care if patient prefers.</p>
                  </div>
                </div>

                {/* Step D */}
                <div className="flex gap-3 items-start p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-emerald-900">Chamber Return Confirmed</span>
                      <span className="text-[10px] text-emerald-800 font-bold">Day 14 (Review Date)</span>
                    </div>
                    <p className="text-emerald-900 mt-0.5 font-medium">Patient arrives on time with blood reports ready on doctor&apos;s desk. Complete clinical cycle.</p>
                  </div>
                </div>

              </div>

              {/* Card Bottom Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Coordination by Capsic Care trained desk</span>
                <span className="text-teal-700 font-bold">Zero doctor administrative time</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
