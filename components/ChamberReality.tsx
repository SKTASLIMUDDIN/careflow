import React from 'react';
import { CalendarX2, FlaskConical, Users, MapPin, Activity, Handshake } from 'lucide-react';

export default function ChamberReality() {
  const challenges = [
    {
      icon: CalendarX2,
      title: 'Patients Discontinue Follow-up Too Early',
      description:
        'When initial acute symptoms improve after 4 or 5 days of medicine, patients frequently assume they are cured and fail to return for their crucial 14-day or 30-day clinical review.',
    },
    {
      icon: FlaskConical,
      title: 'Prescribed Investigations Remain Incomplete',
      description:
        'You prescribe an ultrasound, lipid panel, or HbA1c to assess treatment efficacy. Without a reminder, patients postpone the test, leaving you without necessary clinical data.',
    },
    {
      icon: Users,
      title: 'Chambers Have Limited Support Staff',
      description:
        'Your chamber assistant or compounder is fully occupied managing OPD queues, files, and physical tokens. Expecting them to dial 300+ patients monthly is operationally impossible.',
    },
    {
      icon: MapPin,
      title: 'Consulting Across Multiple Locations',
      description:
        'Visiting private chambers in Bankra, Shibpur, or Shyambazar leaves no time between morning and evening clinics to call patients individually regarding their progress.',
    },
    {
      icon: Activity,
      title: 'Chronic Disease Management Drop-offs',
      description:
        'Hypertension, diabetes, thyroid, and cardiac patients require consistent titration and checkups. When follow-ups drop, long-term health outcomes and doctor-patient bonds suffer.',
    },
    {
      icon: Handshake,
      title: 'Operational Support, Not Criticism',
      description:
        'You are doing everything right clinically. CareFlow simply acts as your chamber’s courteous, dedicated coordination extension, closing the administrative loop seamlessly.',
      highlight: true,
    },
  ];

  return (
    <section id="chamber-challenge" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            The Solo Practice Reality
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Understanding the Independent Doctor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            As a medical practitioner in Howrah or Kolkata, your focus is clinical care during busy OPD hours. But after consultations end, patient follow-up coordination often lacks dedicated administrative bandwidth.
          </p>
        </div>

        {/* 6 Clean Minimal Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-7 rounded-2xl transition-all duration-300 border ${
                  item.highlight
                    ? 'bg-gradient-to-br from-teal-50/90 to-emerald-50/60 border-teal-200/90 shadow-sm'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    item.highlight
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 border border-slate-200/60'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className={`text-base font-bold mb-2 ${
                    item.highlight ? 'text-teal-950' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
