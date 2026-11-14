import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function TopNoticeBar() {
  return (
    <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-950 text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-teal-600/30 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
        
        {/* Notice Badge & Text */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="bg-teal-500/25 text-teal-300 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase border border-teal-400/30 shrink-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse"></span>
            Doctor Chamber Initiative
          </span>
          <span className="text-slate-100">
            🩺 <strong className="text-white">CareFlow by CAPSIC CARE</strong>: 3-Month Free Trial for Independent Doctors &amp; Chambers in <strong className="text-amber-300">Howrah &amp; Kolkata</strong>.
          </span>
        </div>

        {/* Doctor Desk Contact Links */}
        <div className="flex items-center gap-2.5 text-teal-200 text-[11px] font-semibold shrink-0">
          <span className="hidden md:inline text-slate-300">Doctor Chamber Desk:</span>
          
          <a
            href="tel:+918337077656"
            className="hover:text-white flex items-center gap-1 underline decoration-teal-400 underline-offset-2 transition-colors font-bold text-white bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded"
            title="Call CareFlow Chamber Desk"
          >
            <Phone className="w-3 h-3 text-teal-300" />
            <span>+91 8337077656</span>
          </a>

          <span className="text-slate-500">|</span>

          <a
            href="https://wa.me/918337077656?text=Hello%20Capsic%20Care%2C%20I%20am%20a%20doctor%20in%20Howrah%2FKolkata%20inquiring%20about%20CareFlow%20patient%20follow-up%20coordination."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-md text-[10px] font-bold transition-all shadow-sm flex items-center gap-1 active:scale-95"
            title="Chat with Doctor Desk on WhatsApp"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp Desk</span>
          </a>
        </div>

      </div>
    </div>
  );
}
