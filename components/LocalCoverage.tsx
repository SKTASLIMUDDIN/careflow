import React from 'react';
import { MapPin } from 'lucide-react';

export default function LocalCoverage() {
  const howrahAreas = [
    'Bankra Bazar',
    'Domjur',
    'Kona Expressway',
    'Shibpur',
    'Kadamtala',
    'Santragachi',
    'Bally',
    'Uluberia',
  ];

  const kolkataAreas = [
    'Shyambazar',
    'Park Circus',
    'Gariahat',
    'Salt Lake',
    'Behala',
    'Dum Dum',
    'Newtown',
    'Jadavpur',
  ];

  return (
    <section id="coverage" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-200">
            Initial Geographical Focus
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Serving Independent Doctors in Howrah &amp; Kolkata
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            CareFlow understands the unique rhythm of private chambers, polyclinics, and neighbourhood doctor chambers across the twin cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Howrah Region */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm capsic-card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Howrah Private Practice Network</h3>
                <p className="text-xs text-slate-500">Chamber Coordination &amp; Home Diagnostics</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Dedicated support for solo MBBS practitioners, general physicians, and specialist chambers across prominent medical pockets:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700 mb-5">
              {howrahAreas.map((area, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                  {area}
                </span>
              ))}
            </div>
            <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-900">
              <strong>Capsic Care Center Presence:</strong> Supported by our central hub at Bankra Bazar, Dewan Para Road, Domjur, Howrah.
            </div>
          </div>

          {/* Kolkata Region */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm capsic-card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Kolkata Doctor Chambers</h3>
                <p className="text-xs text-slate-500">Private Chambers &amp; Individual Consultations</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Structured patient reminders and follow-up tracking tailored for busy evening OPDs and private chambers throughout Kolkata:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700 mb-5">
              {kolkataAreas.map((area, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                  {area}
                </span>
              ))}
            </div>
            <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-900">
              <strong>Local Linguistic Touch:</strong> Courteous communication matching local patient demographics in fluent Bengali, Hindi, and English.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
