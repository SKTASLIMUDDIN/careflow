'use client';

import React, { useState } from 'react';
import { ArrowRight, Settings2, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

interface PracticeCalculatorProps {
  onOpenTrialModal: () => void;
}

export default function PracticeCalculator({ onOpenTrialModal }: PracticeCalculatorProps) {
  // Practice inputs (user-configurable)
  const [patients, setPatients] = useState<number>(220);
  const [followupNeed, setFollowupNeed] = useState<number>(65);
  const [currentReturn, setCurrentReturn] = useState<number>(35);
  const [newReturn, setNewReturn] = useState<number>(70);
  const [consultFee, setConsultFee] = useState<number>(800);
  const [contactRate, setContactRate] = useState<number>(90);
  const [isTrial, setIsTrial] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<string>('specialist');

  // Format currency in Indian Rupees (₹)
  const formatINR = (val: number) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  // Chamber Presets
  const applyPreset = (type: 'general' | 'specialist' | 'polyclinic') => {
    setActivePreset(type);
    if (type === 'general') {
      setPatients(350);
      setFollowupNeed(50);
      setCurrentReturn(25);
      setNewReturn(60);
      setConsultFee(400);
      setContactRate(85);
    } else if (type === 'specialist') {
      setPatients(220);
      setFollowupNeed(65);
      setCurrentReturn(35);
      setNewReturn(70);
      setConsultFee(800);
      setContactRate(90);
    } else if (type === 'polyclinic') {
      setPatients(500);
      setFollowupNeed(45);
      setCurrentReturn(30);
      setNewReturn(65);
      setConsultFee(500);
      setContactRate(85);
    }
  };

  // 1. Follow-up candidate pool and contacted cohort
  const followupCandidates = patients * (followupNeed / 100);
  const contactedPatients = followupCandidates * (contactRate / 100);

  // 2. Return rate delta and additional visits booked
  const effectiveNewReturn = Math.max(currentReturn, newReturn);
  const returnRateDelta = Math.max(0, (effectiveNewReturn - currentReturn) / 100);
  const additionalVisits = Math.round(contactedPatients * returnRateDelta);

  // 3. Potential gross consultation revenue
  const additionalRevenue = additionalVisits * consultFee;

  // 4. CareFlow Fee Formula (User CANNOT edit - Auto-calculated & strictly minimal):
  // Based on:
  // - Doctor consultation price (base ~4.5%)
  // - Volume of patients managed (efficiency tier)
  // - Number of follow-ups booked (active care outcome reward)
  // Strictly bounded between ₹20 and ₹45 per managed patient
  const baseRate = consultFee * 0.045;
  const volumeDiscount = contactedPatients >= 250 ? 5 : contactedPatients >= 130 ? 3 : 0;
  const bookingDiscount = additionalVisits >= 45 ? 4 : additionalVisits >= 25 ? 2 : 0;
  const calculatedCfFee = Math.max(20, Math.min(45, Math.round(baseRate - volumeDiscount - bookingDiscount)));

  // 5. Service Cost & Practice Net Contribution
  const standardServiceCost = Math.round(contactedPatients * calculatedCfFee);
  const effectiveServiceCost = isTrial ? 0 : standardServiceCost;
  const netContribution = Math.max(0, additionalRevenue - effectiveServiceCost);

  // 6. Annualized projections
  const annualVisits = additionalVisits * 12;
  const annualNet = isTrial
    ? additionalRevenue * 3 + (additionalRevenue - standardServiceCost) * 9
    : netContribution * 12;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Calculator Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1 rounded-full border border-teal-700/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            Financial &amp; Care Planning Tool
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Calculate Your Practice&apos;s Potential Benefit
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Tailored specifically for solo medical practitioners and private chambers in Howrah &amp; Kolkata. Estimate additional follow-up visits, revenue, and practice retention.
          </p>

          {/* Quick Chamber Presets */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-1">Chamber Presets:</span>
            
            <button
              onClick={() => applyPreset('general')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activePreset === 'general'
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              MBBS General Practice
            </button>

            <button
              onClick={() => applyPreset('specialist')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activePreset === 'specialist'
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Specialist Chamber (MD/MS)
            </button>

            <button
              onClick={() => applyPreset('polyclinic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activePreset === 'polyclinic'
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Evening High-Volume OPD
            </button>
          </div>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Practice Inputs (6 Sliders + Locked Auto Fee Card) */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-6">
            
            <div className="border-b border-slate-700 pb-3 flex items-center justify-between">
              <h3 className="text-base font-bold text-teal-300 flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-teal-400" />
                <span>Practice Parameters</span>
              </h3>
              <span className="text-xs text-slate-400">Slide to match your OPD volume</span>
            </div>

            {/* 1. Average patients consulted per month */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-patients" className="font-medium text-slate-200">
                  Average Patients Consulted per Month:
                </label>
                <span className="font-mono font-bold text-teal-300 text-base">{patients}</span>
              </div>
              <input
                type="range"
                id="calc-patients"
                min="50"
                max="1000"
                step="10"
                value={patients}
                onChange={(e) => {
                  setPatients(Number(e.target.value));
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>50 patients</span>
                <span>500 patients</span>
                <span>1,000 patients</span>
              </div>
            </div>

            {/* 2. Percentage of patients requiring follow-up */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-followup-need" className="font-medium text-slate-200">
                  Patients Requiring a Follow-up Review:
                </label>
                <span className="font-mono font-bold text-teal-300 text-base">{followupNeed}%</span>
              </div>
              <input
                type="range"
                id="calc-followup-need"
                min="20"
                max="90"
                step="5"
                value={followupNeed}
                onChange={(e) => {
                  setFollowupNeed(Number(e.target.value));
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>20% (Acute care)</span>
                <span>50% (Standard)</span>
                <span>90% (Chronic/Titration)</span>
              </div>
            </div>

            {/* 3. Current return percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-current-return" className="font-medium text-slate-200">
                  Current Return Rate (Without Coordination):
                </label>
                <span className="font-mono font-bold text-amber-300 text-base">{currentReturn}%</span>
              </div>
              <input
                type="range"
                id="calc-current-return"
                min="10"
                max="60"
                step="5"
                value={currentReturn}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setCurrentReturn(val);
                  if (newReturn < val) setNewReturn(val);
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>10% (Low return)</span>
                <span>35% (Chamber average)</span>
                <span>60%</span>
              </div>
            </div>

            {/* 4. Expected return with CareFlow */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-new-return" className="font-medium text-slate-200">
                  Expected Return with CareFlow Coordination:
                </label>
                <span className="font-mono font-bold text-emerald-400 text-base">{effectiveNewReturn}%</span>
              </div>
              <input
                type="range"
                id="calc-new-return"
                min="30"
                max="95"
                step="5"
                value={effectiveNewReturn}
                onChange={(e) => {
                  setNewReturn(Math.max(currentReturn, Number(e.target.value)));
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>30%</span>
                <span>65% (CareFlow benchmark)</span>
                <span>95%</span>
              </div>
            </div>

            {/* 5. Doctor Consultation Fee */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-consult-fee" className="font-medium text-slate-200">
                  Average Doctor Consultation Fee (₹):
                </label>
                <span className="font-mono font-bold text-teal-300 text-base">{formatINR(consultFee)}</span>
              </div>
              <input
                type="range"
                id="calc-consult-fee"
                min="200"
                max="2500"
                step="50"
                value={consultFee}
                onChange={(e) => {
                  setConsultFee(Number(e.target.value));
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>₹200</span>
                <span>₹800</span>
                <span>₹2,500</span>
              </div>
            </div>

            {/* 6. Successful patient contact percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="calc-contact-rate" className="font-medium text-slate-200">
                  Successful Patient Contact Reach:
                </label>
                <span className="font-mono font-bold text-teal-300 text-base">{contactRate}%</span>
              </div>
              <input
                type="range"
                id="calc-contact-rate"
                min="60"
                max="98"
                step="2"
                value={contactRate}
                onChange={(e) => {
                  setContactRate(Number(e.target.value));
                  setActivePreset('');
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>60%</span>
                <span>85% - 90% (Usual reach)</span>
                <span>98%</span>
              </div>
            </div>

            {/* 7. CareFlow Fee (LOCKED & AUTO-CALCULATED VIA TRANSPARENT FORMULA) */}
            <div className="p-4 bg-slate-900/90 rounded-xl border border-teal-500/40 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-xs font-bold text-slate-200">
                    CareFlow Fee per Managed Patient (Post-Trial):
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-700/50">
                    Auto-Formula (Locked)
                  </span>
                  <span className="font-mono font-black text-emerald-400 text-base">
                    {formatINR(calculatedCfFee)}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                <strong className="text-teal-300">Minimal Formula:</strong> Auto-computed from your consultation fee ({formatINR(consultFee)} × ~4.5%), minus volume discount ({Math.round(contactedPatients)} managed) and booked return reward (+{additionalVisits} visits). Capped strictly minimal between <strong>₹20 and ₹45</strong>.
              </div>

              {isTrial && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded border border-emerald-700/40">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>During 3-Month Free Trial: ₹0 service fee applies.</span>
                </div>
              )}
            </div>

            {/* Free Trial Toggle */}
            <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="calc-trial-toggle"
                  checked={isTrial}
                  onChange={(e) => setIsTrial(e.target.checked)}
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 bg-slate-900 border-slate-600 cursor-pointer"
                />
                <label htmlFor="calc-trial-toggle" className="text-xs sm:text-sm font-semibold text-slate-200 cursor-pointer">
                  Apply 3-Month Free Trial (₹0 Service Fee)
                </label>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                Active Offer
              </span>
            </div>

          </div>

          {/* Right Column: Practice Projections & Financial Impact */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-gradient-to-b from-slate-800 to-slate-850 p-6 sm:p-7 rounded-2xl border border-teal-500/30 shadow-xl relative overflow-hidden">
              <div className="border-b border-slate-700 pb-3 mb-5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-teal-400">Estimated Monthly Impact</span>
                <h4 className="text-lg font-bold text-white mt-0.5">Chamber Projection Summary</h4>
              </div>

              {/* Metric 1 */}
              <div className="mb-4 p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Estimated Additional Follow-up Visits:</p>
                  <span className="text-xs text-teal-400 font-medium">Patients who return on review date</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  +{additionalVisits}
                </div>
              </div>

              {/* Metric 2 */}
              <div className="mb-4 p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Potential Additional Consultation Revenue:</p>
                  <span className="text-xs text-slate-500">Gross monthly consult fees</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  {formatINR(additionalRevenue)}
                </div>
              </div>

              {/* Metric 3 */}
              <div className="mb-4 p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Estimated CareFlow Service Cost:</p>
                  <span className="text-xs text-slate-500">During 3-Month Free Trial:</span>
                </div>
                <div className={`font-bold px-2 py-0.5 rounded text-sm font-mono ${
                  isTrial ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-200'
                }`}>
                  {isTrial ? '₹0 (Free Trial)' : formatINR(standardServiceCost)}
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-5 bg-teal-950/70 rounded-xl border border-teal-500/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">Net Chamber Contribution</span>
                    <p className="text-[11px] text-teal-200/70">After service cost</p>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    {formatINR(netContribution)}
                  </div>
                </div>
                <p className="text-[11px] text-teal-200/80 mt-2">
                  *During your 3-Month Free Trial, 100% of this additional revenue stays directly with your chamber.
                </p>
              </div>

              {/* Annualized Projection */}
              <div className="mt-5 pt-4 border-t border-slate-700">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Annualised Illustrative Projection</span>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block">Annual Additional Visits</span>
                    <span className="text-base sm:text-lg font-bold text-teal-300 font-mono">~{annualVisits.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block">Annual Practice Value</span>
                    <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">{formatINR(annualNet)}</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Start 3-Month Free Trial with These Numbers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Mandatory Disclaimer */}
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
              <span className="font-bold text-slate-300">Important Disclaimer:</span>
              The calculator provides an illustrative estimate based on practice parameters and typical coordination rates. It does not constitute a guaranteed clinical or financial result. Actual return rates vary based on patient demographics, seasonality, and clinical conditions.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
