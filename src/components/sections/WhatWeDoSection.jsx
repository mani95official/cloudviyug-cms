'use client';
import Link from 'next/link';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { whatWeDoData } from '@/data/whatWeDoData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* Left Column: Copy & Checklist Badges */}
          <div className="col-lg-6">
            <SectionBadge text={whatWeDoData.badge} />
            <h2
              className="display-5 text-white fw-bold mb-4"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.25 }}
            >
              Innovative AI services, <span className="gradient-text-orange">real-world results</span>
            </h2>
            <p className="lead text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              {whatWeDoData.description}
            </p>

            {/* Checkmark Badges Grid */}
            <div className="row g-3 mb-5">
              {whatWeDoData.capabilities.map((cap, idx) => (
                <div key={idx} className="col-sm-6">
                  <div
                    className="d-flex align-items-center gap-2 p-2 rounded-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <CheckCircle2 size={18} className="text-danger flex-shrink-0" />
                    <span className="text-light fw-medium" style={{ fontSize: '0.9rem' }}>
                      {cap}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="#contact" className="btn-cv-gradient text-decoration-none">
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Illustration Visual */}
          <div className="col-lg-6 text-center">
            <div
              className="p-4 rounded-5 position-relative d-inline-block w-100"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.08) 0%, rgba(13, 15, 23, 0.9) 70%)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Image
                src={whatWeDoData.image}
                alt="CloudViyug AI capabilities overview"
                width={520}
                height={280}
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 0 25px rgba(255, 87, 34, 0.2))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
