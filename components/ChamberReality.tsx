import React from 'react';

export default function ChamberReality() {
  const challenges = [
    {
      icon: '📅',
      title: 'Patients Discontinue Follow-up Too Early',
      description:
        'When initial acute symptoms improve after 4 or 5 days of medicine, patients frequently assume they are cured and fail to return for their crucial 14-day or 30-day clinical review.',
    },
    {
      icon: '🧪',
      title: 'Prescribed Investigations Remain Incomplete',
      description:
        'You prescribe an ultrasound, lipid panel, or HbA1c to assess treatment efficacy. Without a reminder, patients postpone the test, leaving you without necessary clinical data.',
    },
    {
      icon: '⏳',
      title: 'Chambers Have Limited Support Staff',
      description:
        'Your chamber assistant or compounder is fully occupied managing OPD queues, files, and physical tokens. Expecting them to dial 300+ patients monthly is operationally impossible.',
    },
    {
      icon: '🚗',
      title: 'Consulting Across Multiple Locations',
      description:
        'Visiting private chambers in Bankra, Shibpur, or Shyambazar leaves no time between morning and evening clinics to call patients individually regarding their progress.',
    },
    {
      icon: '💊',
      title: 'Chronic Disease Management Drop-offs',
      description:
        'Hypertension, diabetes, thyroid, and cardiac patients require consistent titration and checkups. When follow-ups drop, long-term health outcomes and doctor-patient bonds suffer.',
    },
    {
      icon: '🤝',
      title: 'CareFlow is Operational Support, Not Criticism',
      description:
        'You are doing everything right clinically. CareFlow simply acts as your chamber’s courteous, dedicated coordination extension, closing the administrative loop seamlessly.',
      highlight: true,
    },
  ];

  return (
    <section id="chamber-challenge" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-200">
            For Solo Practitioners &amp; Individual Chambers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            The Everyday Reality of an Independent Practice
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            As an independent doctor in Howrah or Kolkata, you give your complete clinical dedication to every patient. But once the consultation ends, managing the follow-up loop is an uphill battle without dedicated administrative staff.
          </p>
        </div>

        {/* 6 Doctor Chamber Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className={`p-7 rounded-2xl shadow-sm border transition-all duration-300 capsic-card-hover ${
                item.highlight
                  ? 'bg-gradient-to-br from-teal-50 to-emerald-50/60 border-teal-200'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-4 ${
                  item.highlight
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-50 border border-teal-200 text-teal-700'
                }`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-base sm:text-lg font-bold mb-2 ${
                  item.highlight ? 'text-teal-950' : 'text-slate-900'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
