import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export default function Footer({ onOpenTrialModal }: FooterProps) {
  return (
    <>
      {/* Final CTA Banner */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950 px-3.5 py-1 rounded-full border border-teal-800">
            Start Before Your Next Chamber Session
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
            Stay Connected with Every Patient You Treat.
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join independent doctors across Howrah and Kolkata who trust CareFlow to manage post-consultation follow-ups and care continuity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl text-sm sm:text-base transition-colors shadow-lg shadow-teal-500/25 flex items-center gap-2"
            >
              <span>Start Your 3-Month Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+918337077656"
              className="px-7 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold text-sm sm:text-base transition-colors flex items-center gap-2"
            >
              <span>📞 Call Doctor Desk: 8337077656</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Capsic Care 4-Column Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            
            {/* Col 1 */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/assets/brand/capsic-logo.png"
                  alt="Capsic Care Logo"
                  className="w-10 h-10 rounded-lg object-contain"
                />
                <div>
                  <span className="font-bold text-base md:text-lg text-white block leading-tight">Capsic Care</span>
                  <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">CareFlow Vertical</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                CareFlow by CAPSIC CARE: Patient follow-up and care coordination support tailored for independent doctors and private chambers in Howrah &amp; Kolkata.
              </p>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-teal-300">Doctor Chamber Helpline:</p>
                <p>
                  Contact: <a href="tel:+918337077656" className="text-white hover:text-teal-300 font-bold underline">8337077656</a> or{' '}
                  <a
                    href="https://wa.me/918337077656?text=Hello%20Capsic%20Care%2C%20I%20have%20an%20inquiry%20regarding%20CareFlow."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm md:text-base">CareFlow Solutions</h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                <li><Link href="#overview" className="hover:text-teal-400 transition-colors">Overview</Link></li>
                <li><Link href="#chamber-challenge" className="hover:text-teal-400 transition-colors">The Chamber Reality</Link></li>
                <li><Link href="#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</Link></li>
                <li><Link href="#calculator" className="hover:text-teal-400 transition-colors">Practice Benefit Calculator</Link></li>
                <li><Link href="#coverage" className="hover:text-teal-400 transition-colors">Howrah &amp; Kolkata Chambers</Link></li>
                <li>
                  <button onClick={onOpenTrialModal} className="text-teal-400 font-semibold hover:text-teal-300 transition-colors text-left">
                    3-Month Free Trial
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Capsic Care Services</h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                <li><a href="https://www.capsic.in/services" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Doctor Consultation</a></li>
                <li><a href="https://www.capsic.in/lab-tests" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Lab Tests &amp; Diagnostics</a></li>
                <li><a href="https://www.capsic.in/health-packages" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Preventive Health Packages</a></li>
                <li><a href="https://www.capsic.in/doctors" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Specialist Network</a></li>
                <li><a href="https://www.capsic.in/business-opportunity" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">Partner With Us</a></li>
                <li><a href="https://www.capsic.in/contact" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Clinic &amp; Centre Address</h4>
              <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
                <p className="font-semibold text-slate-200">Capsic Care Centre</p>
                <p>Bankra Bazar, Dewan Para Road</p>
                <p>Domjur, Howrah – 711403</p>
                <p className="pt-2 text-slate-300">
                  <strong>Email:</strong> <a href="mailto:capsiccare@gmail.com" className="hover:text-teal-300">capsiccare@gmail.com</a>
                </p>
                <p className="text-slate-300">
                  <strong>Phone:</strong> <a href="tel:+918337077656" className="hover:text-teal-300">+91 8337077656</a>
                </p>
                <p className="text-slate-400 text-[11px] pt-1">
                  Serving Howrah &amp; Kolkata, West Bengal, India
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="border-t border-slate-800 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <p>© 2024–2026 Capsic Care. All rights reserved. CareFlow is an official business vertical of Capsic Care.</p>
            <p className="text-[11px] text-slate-400">
              Isolated Next.js route: <code className="text-teal-400">/careflow/</code> • Main site:{' '}
              <a href="https://www.capsic.in/" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400">
                capsic.in
              </a>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
