'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [docName, setDocName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [chamber, setChamber] = useState('');
  const [phone, setPhone] = useState('');
  const [patients, setPatients] = useState('250-500');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waText = encodeURIComponent(
    `Hello Capsic Care CareFlow team, I am Dr. ${docName} (${specialty}) from ${chamber}. I would like to start the 3-Month Free Trial for CareFlow patient follow-up coordination. My contact number is ${phone}.`
  );
  const waLink = `https://wa.me/918337077656?text=${waText}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <span className="inline-block px-2.5 py-0.5 bg-teal-100 text-teal-800 text-[11px] font-bold uppercase rounded-full mb-2">
            3-Month Free Trial • No Credit Card Required
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
            Start Your Chamber Free Trial
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            For independent doctors &amp; individual chambers in Howrah &amp; Kolkata.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="m-doc-name">
                Doctor Name *
              </label>
              <input
                id="m-doc-name"
                type="text"
                required
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                placeholder="e.g. Dr. Subhash Chandra Roy"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="m-specialty">
                  Degree / Specialty *
                </label>
                <input
                  id="m-specialty"
                  type="text"
                  required
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  placeholder="e.g. MBBS / MD / DNB"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="m-phone">
                  Mobile / WhatsApp *
                </label>
                <input
                  id="m-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit number"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="m-chamber">
                Chamber Name &amp; Area (Howrah / Kolkata) *
              </label>
              <input
                id="m-chamber"
                type="text"
                required
                value={chamber}
                onChange={(e) => setChamber(e.target.value)}
                placeholder="e.g. Roy Chamber, Bankra Bazar, Howrah"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="m-patients">
                Approximate Monthly Patients Consulted
              </label>
              <select
                id="m-patients"
                value={patients}
                onChange={(e) => setPatients(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
              >
                <option value="100-250">100 – 250 patients / month</option>
                <option value="250-500">250 – 500 patients / month</option>
                <option value="500-800">500 – 800 patients / month</option>
                <option value="800+">800+ patients / month</option>
              </select>
            </div>

            <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 leading-relaxed">
              🔒 <strong>Practitioner Assurance:</strong> Your contact details and patient registers are kept strictly confidential under Capsic Care clinical privacy protocols.
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-sm shadow-md transition-all active:scale-98"
            >
              Activate 3-Month Free Trial Now
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-slate-900">Trial Request Confirmed!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, Doctor. Our dedicated care coordination desk will reach out to schedule a brief 10-minute workflow setup for your chamber.
            </p>
            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast-Track on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
