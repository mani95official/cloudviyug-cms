'use client';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import { servicesData } from '@/data/servicesData';
import { Lightbulb, ArrowUpRight, Cpu, Shield, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb size={24} className="text-danger" />;
      case 'arrow-up-right':
        return <ArrowUpRight size={24} className="text-danger" />;
      case 'cpu':
        return <Cpu size={24} className="text-danger" />;
      case 'shield':
        return <Shield size={24} className="text-danger" />;
      default:
        return <Cpu size={24} className="text-danger" />;
    }
  };

  return (
    <section id="services" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={servicesData.badge} />
          <h2 className="display-5 text-white fw-bold mx-auto mb-3" style={{ maxWidth: '780px', letterSpacing: '-0.02em' }}>
            {servicesData.title}
          </h2>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '680px', fontSize: '1.05rem' }}>
            {servicesData.subtitle}
          </p>
        </div>

        {/* 4 Cloud Services Cards Grid */}
        <div className="row g-4">
          {servicesData.services.map((svc) => (
            <div key={svc.id} className="col-lg-6">
              <div className="cv-card d-flex flex-column justify-content-between h-100 p-4 p-md-5">
                <div>
                  {/* Top Header & Icon */}
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="text-white fw-bold fs-4 mb-0" style={{ letterSpacing: '-0.01em' }}>
                      {svc.title}
                    </h3>
                    <div
                      className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        background: 'rgba(255, 87, 34, 0.08)',
                        border: '1px solid rgba(255, 87, 34, 0.2)'
                      }}
                    >
                      {getServiceIcon(svc.icon)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary mb-4" style={{ fontSize: '0.96rem', lineHeight: '1.7' }}>
                    {svc.description}
                  </p>

                  {/* Bullet Points Inset Box */}
                  <div className="cv-card-inner-box my-4">
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      {svc.points.map((pt, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-center gap-2 text-light" style={{ fontSize: '0.9rem' }}>
                          <span className="text-danger fw-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-3 border-top border-secondary border-opacity-10 mt-auto">
                  <Link
                    href={svc.href}
                    className="d-inline-flex align-items-center gap-2 text-danger fw-bold text-decoration-none"
                    style={{ fontSize: '0.92rem' }}
                  >
                    <span>{svc.linkText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
