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
    <section id="what-we-do-best" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* Left Column: Visual Illustration / Photo */}
          <div className="col-lg-5 text-center">
            <div
              className="cv-card p-4 p-md-5 d-flex align-items-center justify-content-center position-relative overflow-hidden"
              style={{ minHeight: '420px' }}
            >
              <Image
                src={getAssetPath('/images/gallery-9.jpg')}
                alt="Cloud Architecture & Engineering Team"
                width={400}
                height={300}
                className="rounded-4"
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  height: 'auto',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>

          {/* Right Column: Title & 4 Accordions */}
          <div className="col-lg-7">
            <h2 className="display-5 text-white fw-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              {whatWeDoBestData.title}
            </h2>

            <div className="d-flex flex-column gap-3">
              {whatWeDoBestData.items.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-4 overflow-hidden transition-all"
                    style={{
                      background: isOpen ? '#0e111a' : '#08090f',
                      border: isOpen ? '1px solid rgba(255, 87, 34, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                      boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255, 87, 34, 0.08)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-100 p-4 bg-transparent border-0 d-flex align-items-center justify-content-between text-start text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      <span
                        className="fw-bold fs-5"
                        style={{
                          color: isOpen ? '#ff6b35' : '#ffffff',
                          transition: 'color 0.2s ease',
                          paddingRight: '16px'
                        }}
                      >
                        {item.title}
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
                      <div className="px-4 pb-4 text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
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
