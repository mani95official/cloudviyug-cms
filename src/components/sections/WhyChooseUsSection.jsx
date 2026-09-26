'use client';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import { whyUsData } from '@/data/whyUsData';
import { ShieldCheck, UserCheck, DollarSign, Zap, Clock, Layers, ArrowRight } from 'lucide-react';

export default function WhyChooseUsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'shield-check':
        return <ShieldCheck size={26} className="text-danger" />;
      case 'user-check':
        return <UserCheck size={26} className="text-danger" />;
      case 'dollar-sign':
        return <DollarSign size={26} className="text-danger" />;
      case 'zap':
        return <Zap size={26} className="text-danger" />;
      case 'clock':
        return <Clock size={26} className="text-danger" />;
      case 'layers':
        return <Layers size={26} className="text-danger" />;
      default:
        return <ShieldCheck size={26} className="text-danger" />;
    }
  };

  return (
    <section id="why-us" className="py-5 position-relative" style={{ background: '#07080d' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={whyUsData.badge} />
          <h2 className="display-5 text-white fw-bold mx-auto mb-3" style={{ maxWidth: '820px', letterSpacing: '-0.02em' }}>
            Why Businesses Choose <span className="gradient-text-orange">CloudViyug</span>
          </h2>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '680px', fontSize: '1.05rem' }}>
            {whyUsData.subtitle}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="row g-4 mb-5">
          {whyUsData.features.map((feat) => (
            <div key={feat.id} className="col-lg-4 col-md-6">
              <div className="cv-card d-flex flex-column justify-content-between h-100 p-4 p-md-5">
                <div>
                  <div
                    className="rounded-3 p-3 mb-4 d-inline-flex align-items-center justify-content-center"
                    style={{
                      background: 'rgba(255, 87, 34, 0.08)',
                      border: '1px solid rgba(255, 87, 34, 0.2)'
                    }}
                  >
                    {getIcon(feat.icon)}
                  </div>

                  <h3 className="text-white fw-bold fs-4 mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {feat.title}
                  </h3>

                  <p className="text-secondary mb-0" style={{ fontSize: '0.94rem', lineHeight: '1.7' }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-5 pb-3">
          <Link href={whyUsData.ctaHref} className="btn-cv-gradient text-decoration-none px-5 py-3">
            <span>{whyUsData.ctaText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Milestones Section Block from PDF */}
        <div
          className="rounded-5 p-4 p-md-5 mt-4 text-center position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 17, 26, 0.95) 0%, rgba(8, 10, 15, 0.95) 100%)',
            border: '1px solid rgba(255, 87, 34, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <h3 className="display-6 text-white fw-bold mb-3">
            Transforming Milestones <span className="gradient-text-orange">into Achievements</span>
          </h3>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '680px', fontSize: '1.02rem', lineHeight: '1.7' }}>
            {whyUsData.milestonesSubtitle}
          </p>

          <div className="row g-4 justify-content-center">
            {whyUsData.milestones.map((m, mIdx) => (
              <div key={mIdx} className="col-lg-4 col-md-6">
                <div
                  className="p-4 rounded-4"
                  style={{
                    background: 'rgba(0, 0, 0, 0.55)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div
                    className="fw-bold mb-2"
                    style={{
                      fontSize: '3.4rem',
                      fontFamily: 'var(--font-heading)',
                      color: '#ff5722',
                      lineHeight: 1
                    }}
                  >
                    {m.value}
                  </div>
                  <div className="text-white fw-semibold" style={{ fontSize: '1rem' }}>
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
