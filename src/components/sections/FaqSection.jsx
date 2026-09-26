'use client';
import { useState } from 'react';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import { faqsData } from '@/data/faqsData';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-5 position-relative section-bg-dark-2">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={faqsData.badge} />
          <h2 className="section-heading-lg mx-auto mb-3">
            Frequently Asked <span className="gradient-text-orange">Questions</span>
          </h2>
          <p className="section-subheading mx-auto mb-0">
            {faqsData.subtitle}
          </p>
        </div>

        {/* 7 FAQs Accordion List */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 col-xl-9">
            <div className="d-flex flex-column gap-3">
              {faqsData.faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`cv-accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="cv-accordion-btn"
                    >
                      <span className="cv-accordion-title fs-6">
                        {faq.question}
                      </span>
                      <div className="cv-accordion-icon">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="cv-accordion-body">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Callout Box from PDF Page 4 */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="cv-callout-box text-center d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div className="text-md-start">
                <h3 className="text-white fw-bold fs-4 mb-2">{faqsData.calloutTitle}</h3>
                <p className="text-secondary mb-0 fs-6">
                  {faqsData.calloutSubtitle}
                </p>
              </div>
              <Link href={faqsData.calloutBtnHref} className="btn-cv-gradient text-nowrap px-4 py-3 text-decoration-none">
                <span>{faqsData.calloutBtnText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
