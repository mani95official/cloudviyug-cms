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
    <section id="services" className="py-5 position-relative section-bg-dark-2">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={servicesData.badge} />
          <h2 className="section-heading-lg mx-auto mb-3">
            {servicesData.title}
          </h2>
          <p className="section-subheading mx-auto mb-0">
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
                    <h3 className="text-white fw-bold fs-4 mb-0">
                      {svc.title}
                    </h3>
                    <div className="icon-box-orange">
                      {getServiceIcon(svc.icon)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary mb-4 fs-6">
                    {svc.description}
                  </p>

                  {/* Bullet Points Inset Box */}
                  <div className="cv-card-inner-box my-4">
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      {svc.points.map((pt, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-center gap-2 text-light fs-6">
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
                    className="d-inline-flex align-items-center gap-2 text-danger fw-bold text-decoration-none fs-6"
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
