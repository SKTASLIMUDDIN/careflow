'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DoctorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Will my patients think someone else is giving them medical advice?',
      a: 'Absolutely not. CareFlow coordinators never offer medical advice, alter doses, or interpret clinical findings. They introduce themselves strictly as administrative care coordinators from your chamber ("Dr. [Your Name]\'s Chamber Coordination Desk"), following your exact written follow-up date and investigation checklist. If a patient asks a clinical question, they are advised to consult you.',
    },
    {
      q: 'Does my chamber assistant or compounder need to learn complex software?',
      a: 'No. There is zero software to install. Your chamber staff can simply take a photo of the day\'s patient register / token slips or share the names and review dates via our dedicated WhatsApp chamber desk. Our team takes care of all digitisation and calling.',
    },
    {
      q: 'How does the 3-Month Free Trial work? Are there hidden fees?',
      a: 'The 3-Month Free Trial is completely free of charge. No credit card, bank deposit, or advance payment is required. You can test CareFlow on your actual chamber patients for a full 90 days. If you find it valuable, you can choose to continue at our nominal per-managed-patient rate (typically ₹35–₹50); if not, service terminates with zero obligation.',
    },
    {
      q: 'Are patients forced to use Capsic Care for prescribed blood tests?',
      a: 'Never. Patients have total freedom to complete tests at any diagnostic centre of their preference. For convenience, Capsic Care offers Free Home Sample Collection in Howrah and Kolkata if the test amount exceeds ₹2,000, which many patients appreciate. Our primary goal is simply ensuring the patient completes the prescribed tests before their review consultation.',
    },
    {
      q: 'How do you protect patient privacy and contact confidentiality?',
      a: 'Patient data is strictly confidential and used solely for coordinating follow-ups on your chamber\'s behalf. It is never sold, shared, or used for commercial marketing. All communication logs are encrypted and maintained with clinical-grade discretion.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-200">
            Clear Answers for Clinicians
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions by Independent Doctors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about CareFlow&apos;s coordination service and 3-month free trial.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base hover:text-teal-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
