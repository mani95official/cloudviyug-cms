'use client';
import Link from 'next/link';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { projectsData } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text="OUR PROJECT" />
          <h2
            className="display-5 text-white fw-bold mx-auto text-capitalize"
            style={{ maxWidth: '800px', letterSpacing: '-0.02em' }}
          >
            Real projects real impact real <span className="gradient-text-orange">intelligence</span>
          </h2>
        </div>

        {/* 4 Project Visual Cards Grid */}
        <div className="row g-4">
          {projectsData.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div
                className="cv-card p-0 overflow-hidden position-relative group"
                style={{
                  background: '#0c0e16',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Image Box */}
                <div className="position-relative overflow-hidden" style={{ height: '320px' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="project-thumbnail"
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, rgba(6, 7, 10, 0.1) 0%, rgba(6, 7, 10, 0.85) 100%)'
                    }}
                  />

                  {/* Top Category Badge */}
                  <div className="position-absolute" style={{ top: '20px', left: '20px' }}>
                    <span
                      className="badge rounded-pill px-3 py-2 fw-semibold"
                      style={{
                        background: 'rgba(6, 7, 10, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ff7844',
                        backdropFilter: 'blur(8px)',
                        fontSize: '0.8rem',
                        letterSpacing: '0.05em'
                      }}
                    >
                      ✦ {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-4 d-flex align-items-center justify-content-between">
                  <h3 className="text-white fw-bold mb-0 fs-5" style={{ maxWidth: '80%' }}>
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none flex-shrink-0"
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(255, 87, 34, 0.1)',
                      color: '#ff5722',
                      border: '1px solid rgba(255, 87, 34, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ff5722';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translate(2px, -2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 87, 34, 0.1)';
                      e.currentTarget.style.color = '#ff5722';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <ArrowUpRight size={20} />
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
