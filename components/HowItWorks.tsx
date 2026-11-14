import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-200">
            Frictionless Chamber Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How CareFlow Works in an Independent Chamber
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            We designed CareFlow specifically so that doctors and compounders do not have to learn complex software, log into heavy dashboards, or change their consultation habits.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-teal-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-600/30">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">You Consult as Usual</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Write your prescription, note the advised review date (e.g. &quot;Review in 14 days&quot;), and list any required investigations (e.g. HbA1c, LFT, CBC).
            </p>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-teal-700">Chamber Action:</span> At the end of the OPD session, your assistant sends the daily patient contact list or prescription slips via secure WhatsApp / chamber sheet. Zero software needed.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-teal-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-600/30">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">CareFlow Coordinates with Care</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Our trained patient-care coordinators reach out courteously in Bengali, Hindi, or English on behalf of your chamber:
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span> <span>Check medicine tolerance &amp; availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span> <span>Remind patient of prescribed blood tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span> <span>Confirm the upcoming follow-up appointment</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-teal-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-emerald-600/30">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Patient Returns Prepared</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Your patient arrives on the scheduled review date with their investigation reports ready. No dropped follow-ups, no discontinued treatment cycles.
            </p>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              <span className="font-bold">Clinical Outcome:</span> Enhanced doctor-patient trust, timely therapy adjustments, and predictable chamber appointment schedules.
            </div>
          </div>

        </div>

        {/* Diagnostic Coordination Notice */}
        <div className="mt-10 p-5 bg-gradient-to-r from-teal-50 to-slate-50 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              🧪
            </div>
            <div>
              <span className="font-bold text-slate-900">Prescribed Diagnostic Coordination:</span>
              <p className="text-slate-600 mt-0.5">
                Patients can complete prescribed blood tests via Capsic Care&apos;s Free Home Sample Collection (Howrah &amp; Kolkata) or at any laboratory of their choice. We simply ensure the doctor receives the reports on time.
              </p>
            </div>
          </div>
          <Link
            href="#calculator"
            className="shrink-0 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs transition-colors"
          >
            Calculate Impact
          </Link>
        </div>

      </div>
    </section>
  );
}
