import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TopNoticeBar() {
  return (
    <aside aria-label="Announcement" className="bg-slate-950 text-slate-200 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800/80 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Subtle Brand Initiative Tag */}
        <div className="flex items-center gap-2.5 truncate">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 text-[10px] font-semibold tracking-wide border border-teal-500/20 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            Chamber Pilot
          </span>
          <span className="text-slate-300 truncate text-[11px] sm:text-xs">
            3-Month Free Trial for Independent Doctors &amp; Private Chambers in Howrah &amp; Kolkata
          </span>
        </div>

        {/* Minimal Direct Contacts */}
        <div className="flex items-center gap-3 shrink-0 text-[11px] font-medium">
          <a
            href="tel:+918337077656"
            className="text-slate-300 hover:text-white transition-colors hidden sm:inline"
            title="Call CareFlow Chamber Desk"
          >
            +91 8337077656
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href="https://wa.me/918337077656?text=Hello%20Capsic%20Care%2C%20I%20am%20a%20doctor%20in%20Howrah%2FKolkata%20inquiring%20about%20CareFlow."
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-0.5 font-semibold"
          >
            <span>WhatsApp Desk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </aside>
  );
}
