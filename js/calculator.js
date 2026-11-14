/**
 * CareFlow Practice Financial & Care Coordination Calculator
 * Specially designed for Independent Doctors and Private Chambers in Howrah & Kolkata.
 */

(function () {
  'use strict';

  // DOM Elements
  const el = {
    // Inputs & Sliders
    patientsSlider: document.getElementById('calc-patients'),
    patientsVal: document.getElementById('calc-patients-val'),
    
    followupNeedSlider: document.getElementById('calc-followup-need'),
    followupNeedVal: document.getElementById('calc-followup-need-val'),
    
    currentReturnSlider: document.getElementById('calc-current-return'),
    currentReturnVal: document.getElementById('calc-current-return-val'),
    
    newReturnSlider: document.getElementById('calc-new-return'),
    newReturnVal: document.getElementById('calc-new-return-val'),
    
    consultFeeSlider: document.getElementById('calc-consult-fee'),
    consultFeeVal: document.getElementById('calc-consult-fee-val'),
    
    cfFeeVal: document.getElementById('calc-cf-fee-val'),
    
    contactRateSlider: document.getElementById('calc-contact-rate'),
    contactRateVal: document.getElementById('calc-contact-rate-val'),
    
    // Outputs
    outAdditionalVisits: document.getElementById('out-additional-visits'),
    outAdditionalRevenue: document.getElementById('out-additional-revenue'),
    outServiceCost: document.getElementById('out-service-cost'),
    outTrialServiceCost: document.getElementById('out-trial-service-cost'),
    outNetContribution: document.getElementById('out-net-contribution'),
    outAnnualVisits: document.getElementById('out-annual-visits'),
    outAnnualNet: document.getElementById('out-annual-net'),
    
    // Chamber presets
    presetButtons: document.querySelectorAll('.calc-preset-btn'),
    trialToggle: document.getElementById('calc-trial-toggle')
  };

  if (!el.patientsSlider) return;

  // Format Indian Currency (e.g. ₹24,500)
  function formatINR(amount) {
    const rounded = Math.round(amount);
    return '₹' + rounded.toLocaleString('en-IN');
  }

  function calculate() {
    const monthlyPatients = parseFloat(el.patientsSlider.value) || 0;
    const followupNeedPct = (parseFloat(el.followupNeedSlider.value) || 0) / 100;
    const currentReturnPct = (parseFloat(el.currentReturnSlider.value) || 0) / 100;
    let newReturnPct = (parseFloat(el.newReturnSlider.value) || 0) / 100;

    // Ensure new return rate is not less than current return rate
    if (newReturnPct < currentReturnPct) {
      newReturnPct = currentReturnPct;
      el.newReturnSlider.value = Math.round(newReturnPct * 100);
      if (el.newReturnVal) el.newReturnVal.textContent = Math.round(newReturnPct * 100) + '%';
    }

    const consultFee = parseFloat(el.consultFeeSlider.value) || 0;
    const contactRatePct = (parseFloat(el.contactRateSlider.value) || 0) / 100;

    // Follow-up candidate pool
    const followupCandidates = monthlyPatients * followupNeedPct;
    const contactedPatients = followupCandidates * contactRatePct;

    // Additional visits generated per month
    const returnRateDelta = Math.max(0, newReturnPct - currentReturnPct);
    const additionalVisits = Math.round(contactedPatients * returnRateDelta);

    // Potential additional consultation revenue per month
    const additionalRevenue = additionalVisits * consultFee;

    // Auto-computed minimal CareFlow Fee formula
    const baseRate = consultFee * 0.045;
    const volumeDiscount = contactedPatients >= 250 ? 5 : contactedPatients >= 130 ? 3 : 0;
    const bookingDiscount = additionalVisits >= 45 ? 4 : additionalVisits >= 25 ? 2 : 0;
    const calculatedCfFee = Math.max(20, Math.min(45, Math.round(baseRate - volumeDiscount - bookingDiscount)));

    // Service cost based on auto-calculated minimal fee
    const serviceCost = Math.round(contactedPatients * calculatedCfFee);

    // Check if 3-Month Free Trial is active
    const isTrialActive = el.trialToggle ? el.trialToggle.checked : true;
    const effectiveServiceCost = isTrialActive ? 0 : serviceCost;
    const netContribution = Math.max(0, additionalRevenue - effectiveServiceCost);

    // Annualized projections
    const annualVisits = additionalVisits * 12;
    const annualNet = isTrialActive 
      ? (additionalRevenue * 3) + ((additionalRevenue - serviceCost) * 9)
      : netContribution * 12;

    // Update UI elements
    if (el.patientsVal) el.patientsVal.textContent = Math.round(monthlyPatients);
    if (el.followupNeedVal) el.followupNeedVal.textContent = Math.round(followupNeedPct * 100) + '%';
    if (el.currentReturnVal) el.currentReturnVal.textContent = Math.round(currentReturnPct * 100) + '%';
    if (el.newReturnVal) el.newReturnVal.textContent = Math.round(newReturnPct * 100) + '%';
    if (el.consultFeeVal) el.consultFeeVal.textContent = formatINR(consultFee);
    if (el.cfFeeVal) el.cfFeeVal.textContent = formatINR(calculatedCfFee);
    if (el.contactRateVal) el.contactRateVal.textContent = Math.round(contactRatePct * 100) + '%';

    if (el.outAdditionalVisits) el.outAdditionalVisits.textContent = `+${additionalVisits}`;
    if (el.outAdditionalRevenue) el.outAdditionalRevenue.textContent = formatINR(additionalRevenue);
    
    if (el.outServiceCost) {
      el.outServiceCost.textContent = formatINR(serviceCost);
    }
    
    if (el.outTrialServiceCost) {
      el.outTrialServiceCost.textContent = isTrialActive ? '₹0 (Free Trial)' : formatINR(serviceCost);
      if (isTrialActive) {
        el.outTrialServiceCost.className = 'font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded text-sm font-mono';
      } else {
        el.outTrialServiceCost.className = 'font-bold text-slate-200 text-sm font-mono';
      }
    }

    if (el.outNetContribution) el.outNetContribution.textContent = formatINR(netContribution);
    if (el.outAnnualVisits) el.outAnnualVisits.textContent = `~${annualVisits.toLocaleString('en-IN')}`;
    if (el.outAnnualNet) el.outAnnualNet.textContent = formatINR(annualNet);
  }

  // Bind inputs to real-time calculation
  const sliders = [
    el.patientsSlider,
    el.followupNeedSlider,
    el.currentReturnSlider,
    el.newReturnSlider,
    el.consultFeeSlider,
    el.contactRateSlider
  ];

  sliders.forEach(slider => {
    if (slider) {
      slider.addEventListener('input', calculate);
    }
  });

  if (el.trialToggle) {
    el.trialToggle.addEventListener('change', calculate);
  }

  // Presets definition
  const presets = {
    general: {
      patients: 350,
      followupNeed: 50,
      currentReturn: 25,
      newReturn: 60,
      consultFee: 400,
      contactRate: 85
    },
    specialist: {
      patients: 220,
      followupNeed: 65,
      currentReturn: 35,
      newReturn: 70,
      consultFee: 800,
      contactRate: 90
    },
    polyclinic: {
      patients: 500,
      followupNeed: 45,
      currentReturn: 30,
      newReturn: 65,
      consultFee: 500,
      contactRate: 85
    }
  };

  el.presetButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const type = this.getAttribute('data-preset');
      const data = presets[type];
      if (!data) return;

      // Update active state on buttons
      el.presetButtons.forEach(b => {
        b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      this.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
      this.classList.add('bg-teal-600', 'text-white', 'border-teal-600', 'shadow-md');

      // Set values
      el.patientsSlider.value = data.patients;
      el.followupNeedSlider.value = data.followupNeed;
      el.currentReturnSlider.value = data.currentReturn;
      el.newReturnSlider.value = data.newReturn;
      el.consultFeeSlider.value = data.consultFee;
      el.contactRateSlider.value = data.contactRate;

      calculate();
    });
  });

  // Initial calculation on page load
  calculate();
})();
