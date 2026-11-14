import React from 'react';

export default function DoctorTestimonials() {
  const doctors = [
    {
      name: 'Dr. Tooneer Mallik',
      role: 'Consultant Physician',
      image: '/assets/doctors/dr-tooneer-mallik.png',
      quote:
        'In a solo chamber, 40% of patients forget their review date once acute pain subsides. CareFlow’s structured reminders ensure clinical continuity without placing a burden on my assistant.',
    },
    {
      name: 'Dr. Wasim Karim',
      role: 'General Practitioner',
      image: '/assets/doctors/dr-wasim-karim.jpg',
      quote:
        'The biggest advantage is that I do not have to touch any app or software. My chamber staff simply forwards the day’s review dates, and CareFlow coordinates the rest.',
    },
    {
      name: 'Dr. Priti Medda',
      role: 'Consultant Specialist',
      image: '/assets/doctors/dr-priti-medda.jpg',
      quote:
        'When diabetic or antenatal patients get polite reminders in Bengali, they feel personally cared for. Our return compliance increased dramatically during the trial.',
    },
    {
      name: 'Dr. Parvez Ahmed Khan',
      role: 'Clinical Consultant',
      image: '/assets/doctors/dr-parvez-ahmed-khan.jpg',
      quote:
        'Patients frequently delayed prescribed blood tests. With coordination, reports are ready when the patient steps into the chamber for review.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-200">
            Practitioner Perspectives
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Built with Real Doctor Feedback
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            How structured post-consultation support changes the dynamic of an independent chamber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center capsic-card-hover"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-teal-500 mb-4 shadow-sm"
              />
              <h3 className="text-sm font-bold text-slate-900">{doc.name}</h3>
              <span className="text-[11px] text-teal-700 font-semibold mb-3">{doc.role}</span>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &quot;{doc.quote}&quot;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
