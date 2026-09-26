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
    <section id="faq" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={faqsData.badge} />
          <h2 className="display-5 text-white fw-bold mx-auto mb-3" style={{ maxWidth: '820px', letterSpacing: '-0.02em' }}>
            Frequently Asked <span className="gradient-text-orange">Questions</span>
          </h2>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
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
                    className="rounded-4 overflow-hidden transition-all"
                    style={{
                      background: isOpen ? '#0e111a' : '#08090f',
                      border: isOpen ? '1px solid rgba(255, 87, 34, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                      boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255, 87, 34, 0.08)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-100 p-4 bg-transparent border-0 d-flex align-items-center justify-content-between text-start text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      <span
                        className="fw-bold fs-6"
                        style={{
                          color: isOpen ? '#ff6b35' : '#ffffff',
                          transition: 'color 0.2s ease',
                          paddingRight: '16px'
                        }}
                      >
                        {faq.question}
                      </span>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: isOpen ? 'rgba(255, 87, 34, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          color: isOpen ? '#ff5722' : '#94a3b8'
                        }}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-secondary" style={{ fontSize: '0.94rem', lineHeight: '1.7' }}>
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
            <div
              className="p-4 p-md-5 rounded-4 text-center d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 23, 35, 0.9) 0%, rgba(10, 12, 18, 0.95) 100%)',
                border: '1px solid rgba(255, 87, 34, 0.3)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.5)'
              }}
            >
              <div className="text-md-start">
                <h3 className="text-white fw-bold fs-4 mb-2">{faqsData.calloutTitle}</h3>
                <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
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
