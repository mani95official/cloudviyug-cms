'use client';
import { useState } from 'react';
import Image from 'next/image';
import { whatWeDoBestData } from '@/data/whatWeDoBestData';
import { Plus, Minus } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function WhatWeDoBestSection() {
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="what-we-do-best" className="py-5 position-relative section-bg-dark-2">
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* Left Column: Visual Illustration / Photo */}
          <div className="col-lg-5 text-center">
            <div className="cv-card p-4 p-md-5 d-flex align-items-center justify-content-center position-relative overflow-hidden">
              <Image
                src={getAssetPath('/images/gallery-9.jpg')}
                alt="Cloud Architecture & Engineering Team"
                width={400}
                height={300}
                className="rounded-4 img-fluid"
                priority
              />
            </div>
          </div>

          {/* Right Column: Title & 4 Accordions */}
          <div className="col-lg-7">
            <h2 className="section-heading-lg mb-4">
              {whatWeDoBestData.title}
            </h2>

            <div className="d-flex flex-column gap-3">
              {whatWeDoBestData.items.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`cv-accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="cv-accordion-btn"
                    >
                      <span className="cv-accordion-title">
                        {item.title}
                      </span>
                      <div className="cv-accordion-icon">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="cv-accordion-body">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
