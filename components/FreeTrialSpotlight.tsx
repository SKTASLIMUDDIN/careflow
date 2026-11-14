'use client';

import React, { useState } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

interface FreeTrialSpotlightProps {
  onOpenTrialModal: () => void;
}

export default function FreeTrialSpotlight({ onOpenTrialModal }: FreeTrialSpotlightProps) {
  const [docName, setDocName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [chamber, setChamber] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waText = encodeURIComponent(
    `Hello Capsic Care CareFlow team, I am Dr. ${docName} (${specialty}) from ${chamber}. I would like to activate my 3-Month Free Trial for CareFlow. Contact: ${phone}.`
  );
  const waLink = `https://wa.me/918337077656?text=${waText}`;

  return (
    <section className="py-16 sm:py-20 bg-teal-900 text-white relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-teal-950 via-teal-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-teal-500/30 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-teal-800/80 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-teal-600/40">
                Zero Risk • Zero Advance Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Test CareFlow in Your Chamber for 3 Months. Completely Free.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We invite independent doctors and private chambers in Howrah and Kolkata to experience structured patient follow-up coordination with zero financial risk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Full 90-Day Access:</strong> Real coordinators calling and reminding your patients.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>No Payment Details Needed:</strong> No advance check, credit card, or deposit.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>No Obligation to Continue:</strong> Continue after 3 months only if you see genuine patient benefit.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Dedicated Local Coordinators:</strong> Polite staff communicating in Bengali and Hindi.</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenTrialModal}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-colors shadow-lg shadow-emerald-500/20"
                >
                  Claim 3-Month Free Trial
                </button>
                <a
                  href="https://wa.me/918337077656?text=Hello%20Capsic%20Care%2C%20I%20am%20interested%20in%20the%20CareFlow%203-month%20free%20trial%20for%20my%20chamber."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-teal-800/80 hover:bg-teal-700/80 text-white font-bold rounded-xl text-sm transition-all border border-teal-600/40 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column Quick Trial Form */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-7 rounded-2xl shadow-xl">
              <h3 className="text-base font-bold text-slate-900 mb-1">Doctor Chamber Trial Sign-up</h3>
              <p className="text-xs text-slate-500 mb-4">Takes less than 60 seconds to activate</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Doctor Name *</label>
                    <input
                      type="text"
                      required
                      value={docName}
                      onChange={(e) => setDocName(e.target.value)}
                      placeholder="e.g. Dr. A. K. Banerjee"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Degree / Specialization *</label>
                    <input
                      type="text"
                      required
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      placeholder="e.g. MBBS, General Physician or MD Medicine"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Chamber Location (Howrah / Kolkata) *</label>
                    <input
                      type="text"
                      required
                      value={chamber}
                      onChange={(e) => setChamber(e.target.value)}
                      placeholder="e.g. Bankra / Shibpur / Shyambazar"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors mt-2"
                  >
                    Activate 3-Month Free Trial
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-sm">Trial Request Received!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our doctor coordination coordinator will connect with you within 2 business hours to configure your chamber workflow.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Fast-Track on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
