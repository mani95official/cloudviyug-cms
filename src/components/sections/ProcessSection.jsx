'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { processSteps } from '@/data/processData';
import { Compass, Database, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'compass':
        return <Compass size={20} className="text-danger" />;
      case 'database':
        return <Database size={20} className="text-danger" />;
      case 'cpu':
        return <Cpu size={20} className="text-danger" />;
      case 'shield-check':
        return <ShieldCheck size={20} className="text-danger" />;
      default:
        return <Compass size={20} className="text-danger" />;
    }
  };

  return (
    <section id="process" className="py-5 position-relative" style={{ background: '#07080d' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text="HOW IT WORK" />
          <h2 className="display-5 text-white fw-bold mx-auto" style={{ maxWidth: '750px', letterSpacing: '-0.02em' }}>
            Our process for <span className="gradient-text-orange">smarter AI solutions</span>
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="row g-5 align-items-center">
          {/* Left Column: 4 Step Cards */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="p-4 rounded-4 transition-all"
                    style={{
                      background: isActive ? 'linear-gradient(135deg, #111420 0%, #0c0e17 100%)' : '#0a0c13',
                      border: isActive ? '1px solid rgba(255, 87, 34, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(255, 87, 34, 0.1)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span
                        className="badge rounded-pill px-3 py-1 fw-bold"
                        style={{
                          background: isActive ? 'rgba(255, 87, 34, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: isActive ? '#ff5722' : '#94a3b8',
                          fontSize: '0.78rem',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {step.step}
                      </span>
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: '36px',
                          height: '36px',
                          background: isActive ? 'rgba(255, 87, 34, 0.15)' : 'rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        {getStepIcon(step.icon)}
                      </div>
                    </div>

                    <h4 className="text-white fw-bold fs-5 mb-2">{step.title}</h4>
                    <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Photo & Callout Box */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Photo Frame */}
              <div
                className="rounded-5 overflow-hidden position-relative"
                style={{
                  height: '480px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}
              >
                <Image
                  src="/images/gallery-9.jpg"
                  alt="AI development process team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(6, 7, 10, 0.85) 100%)'
                  }}
                />
              </div>

              {/* Floating Bottom Callout Card */}
              <div
                className="position-absolute p-4 rounded-4"
                style={{
                  bottom: '-25px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(14, 16, 25, 0.95)',
                  border: '1px solid rgba(255, 87, 34, 0.3)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
                }}
              >
                <p className="text-white fw-medium mb-2" style={{ fontSize: '0.95rem' }}>
                  We help businesses design, build, and deploy intelligent solutions that drive real results.
                </p>
                <Link
                  href="#contact"
                  className="d-inline-flex align-items-center gap-2 text-danger fw-bold text-decoration-none"
                  style={{ fontSize: '0.9rem' }}
                >
                  <span className="border-bottom border-danger pb-1">Contact Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
