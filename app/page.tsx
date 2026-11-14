'use client';

import React, { useState } from 'react';
import TopNoticeBar from '@/components/TopNoticeBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ChamberReality from '@/components/ChamberReality';
import HowItWorks from '@/components/HowItWorks';
import PracticeCalculator from '@/components/PracticeCalculator';
import FreeTrialSpotlight from '@/components/FreeTrialSpotlight';
import LocalCoverage from '@/components/LocalCoverage';
import DoctorTestimonials from '@/components/DoctorTestimonials';
import DoctorFAQ from '@/components/DoctorFAQ';
import Footer from '@/components/Footer';
import TrialModal from '@/components/TrialModal';

export default function CareFlowPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleOpenTrialModal = () => setIsTrialModalOpen(true);
  const handleCloseTrialModal = () => setIsTrialModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Capsic Care Notice Bar */}
      <TopNoticeBar />

      {/* 2. Glass Navigation Header */}
      <Header onOpenTrialModal={handleOpenTrialModal} />

      {/* 3. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* Solo Chamber Reality & Challenges */}
        <ChamberReality />

        {/* 3-Step Non-Intrusive Workflow */}
        <HowItWorks />

        {/* Practice Planning & Financial Calculator */}
        <PracticeCalculator onOpenTrialModal={handleOpenTrialModal} />

        {/* 3-Month Free Trial Spotlight & Guarantee */}
        <FreeTrialSpotlight onOpenTrialModal={handleOpenTrialModal} />

        {/* Local Geographic Coverage: Howrah & Kolkata */}
        <LocalCoverage />

        {/* Doctor Testimonials & Authentic Capsic Credentials */}
        <DoctorTestimonials />

        {/* Clinician FAQ Accordion */}
        <DoctorFAQ />
      </main>

      {/* 4. Footer Matching Capsic Care */}
      <Footer onOpenTrialModal={handleOpenTrialModal} />

      {/* 5. 3-Month Free Trial Registration Modal */}
      <TrialModal isOpen={isTrialModalOpen} onClose={handleCloseTrialModal} />
    </div>
  );
}
