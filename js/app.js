/**
 * CareFlow Main UI & Interactions
 * Designed for Independent Doctors & Chambers in Howrah & Kolkata
 */

(function () {
  'use strict';

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    }

    // Close mobile menu when clicking navigation links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Header shadow on scroll
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('shadow-md');
    } else {
      siteHeader?.classList.remove('shadow-md');
    }
  });

  // 3. FAQ Accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.faq-item');
      const content = parent.querySelector('.faq-content');
      const icon = toggle.querySelector('.faq-icon');

      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) {
          const itemToggle = item.querySelector('.faq-toggle');
          const itemContent = item.querySelector('.faq-content');
          const itemIcon = item.querySelector('.faq-icon');
          if (itemToggle) itemToggle.setAttribute('aria-expanded', 'false');
          if (itemContent) itemContent.classList.add('hidden');
          if (itemIcon) itemIcon.classList.remove('rotate-180');
        }
      });

      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 4. Modal Management: "Start Your 3-Month Free Trial"
  const trialModal = document.getElementById('trial-modal');
  const modalOpenBtns = document.querySelectorAll('.open-trial-modal');
  const modalCloseBtns = document.querySelectorAll('.close-trial-modal');
  const trialForm = document.getElementById('trial-form');
  const trialSuccessMsg = document.getElementById('trial-success');

  function openModal() {
    if (trialModal) {
      trialModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeModal() {
    if (trialModal) {
      trialModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (trialModal) {
    trialModal.addEventListener('click', (e) => {
      if (e.target === trialModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !trialModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // 5. Free Trial Form Submission
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const docName = document.getElementById('modal-doc-name')?.value || '';
      const docPhone = document.getElementById('modal-doc-phone')?.value || '';
      const docChamber = document.getElementById('modal-doc-chamber')?.value || '';
      const docSpecialty = document.getElementById('modal-doc-specialty')?.value || '';
      const docPatients = document.getElementById('modal-doc-patients')?.value || '';

      // Prepare WhatsApp verification link
      const waText = encodeURIComponent(
        `Hello Capsic Care CareFlow team, I am Dr. ${docName} (${docSpecialty}) from ${docChamber}. I would like to start the 3-Month Free Trial for CareFlow patient follow-up coordination. My contact number is ${docPhone}.`
      );
      const waLink = `https://wa.me/918337077656?text=${waText}`;

      // Update success state
      if (trialSuccessMsg) {
        trialForm.classList.add('hidden');
        trialSuccessMsg.classList.remove('hidden');
        
        const waBtn = document.getElementById('modal-wa-confirm-btn');
        if (waBtn) {
          waBtn.href = waLink;
        }
      }
    });
  }

  // 6. Inline Trial Form Handler (in the main body page)
  const inlineTrialForm = document.getElementById('inline-trial-form');
  const inlineSuccess = document.getElementById('inline-trial-success');
  if (inlineTrialForm) {
    inlineTrialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const docName = document.getElementById('inline-doc-name')?.value || '';
      const docPhone = document.getElementById('inline-doc-phone')?.value || '';
      const docChamber = document.getElementById('inline-doc-chamber')?.value || '';
      const docSpecialty = document.getElementById('inline-doc-specialty')?.value || '';

      const waText = encodeURIComponent(
        `Hello Capsic Care CareFlow team, I am Dr. ${docName} (${docSpecialty}) from ${docChamber}. I would like to activate my 3-Month Free Trial for CareFlow. Contact: ${docPhone}.`
      );
      const waLink = `https://wa.me/918337077656?text=${waText}`;

      if (inlineSuccess) {
        inlineTrialForm.classList.add('hidden');
        inlineSuccess.classList.remove('hidden');
        const waInlineBtn = document.getElementById('inline-wa-confirm-btn');
        if (waInlineBtn) {
          waInlineBtn.href = waLink;
        }
      }
    });
  }

})();
