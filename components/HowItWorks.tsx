import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'You Consult as Usual',
      desc: 'Write your prescription with review timeline and advised investigations just as you do today.',
      action: 'Chamber Action: Your assistant shares the daily OPD review list via secure WhatsApp. Zero new software.',
    },
    {
      num: '02',
      title: 'CareFlow Coordinates with Care',
      desc: 'Our trained care coordination desk reaches out courteously in Bengali, Hindi, or English on behalf of your chamber.',
      bullets: [
        'Check medication tolerance & availability',
        'Remind patient of prescribed blood tests',
        'Confirm upcoming follow-up appointment date',
      ],
    },
    {
      num: '03',
      title: 'Patient Returns Prepared',
      desc: 'Your patient arrives on schedule with completed investigation reports in hand for clinical titration.',
      action: 'Clinical Outcome: Stronger doctor-patient adherence and predictable chamber schedules.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Frictionless Chamber Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How CareFlow Works in Your Chamber
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Designed specifically so you and your staff never have to change consultation habits or manage complex dashboard software.
          </p>
        </div>

        {/* 3 Clean Minimal Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold font-mono text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md mb-5 inline-block">
                  STEP {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {step.desc}
                </p>

                {step.bullets && (
                  <ul className="space-y-2 text-xs text-slate-600 mb-5">
                    {step.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {step.action && (
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-teal-800">{step.action.split(':')[0]}:</span>
                  <span>{step.action.substring(step.action.indexOf(':') + 1)}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Diagnostic Coordination Minimal Banner */}
        <div className="mt-10 p-5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center shrink-0 text-teal-700">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900">Prescribed Diagnostic Coordination:</span>
              <p className="text-slate-600 mt-0.5 text-xs">
                Patients may complete tests via Capsic Care Free Home Sample Collection (Howrah &amp; Kolkata above ₹2,000) or at any laboratory of their choice. Reports are delivered directly for your review.
              </p>
            </div>
          </div>
          <Link
            href="#calculator"
            className="shrink-0 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 rounded-lg text-xs transition-colors flex items-center gap-1"
          >
            <span>See Financial Impact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
