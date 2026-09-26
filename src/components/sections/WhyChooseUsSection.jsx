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
    <section id="why-us" className="py-5 position-relative section-bg-dark-1">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={whyUsData.badge} />
          <h2 className="section-heading-lg mx-auto mb-3">
            Why Businesses Choose <span className="gradient-text-orange">CloudViyug</span>
          </h2>
          <p className="section-subheading mx-auto mb-0">
            {whyUsData.subtitle}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="row g-4 mb-5">
          {whyUsData.features.map((feat) => (
            <div key={feat.id} className="col-lg-4 col-md-6">
              <div className="cv-card d-flex flex-column justify-content-between h-100 p-4 p-md-5">
                <div>
                  <div className="icon-box-orange mb-4">
                    {getIcon(feat.icon)}
                  </div>

                  <h3 className="text-white fw-bold fs-4 mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-secondary mb-0 fs-6">
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
        <div className="cv-milestone-box mt-4">
          <h3 className="display-6 text-white fw-bold mb-3">
            Transforming Milestones <span className="gradient-text-orange">into Achievements</span>
          </h3>
          <p className="section-subheading mx-auto mb-5">
            {whyUsData.milestonesSubtitle}
          </p>

          <div className="row g-4 justify-content-center">
            {whyUsData.milestones.map((m, mIdx) => (
              <div key={mIdx} className="col-lg-4 col-md-6">
                <div className="milestone-counter-box">
                  <div className="milestone-value">
                    {m.value}
                  </div>
                  <div className="text-white fw-semibold fs-6">
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
