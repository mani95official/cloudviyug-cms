'use client';
import Link from 'next/link';
import Image from 'next/image';
import { tickerBadges } from '@/data/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden bg-grid-mesh d-flex flex-column justify-content-center"
      style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        minHeight: '100vh'
      }}
    >
      {/* Floating 3D Geometric Shape Left */}
      <div
        className="position-absolute d-none d-lg-block animate-float-1 pointer-events-none"
        style={{ top: '16%', left: '3%', zIndex: 1, opacity: 0.8 }}
      >
        <Image
          src="/images/section-bg-shape-4.png"
          alt="Floating glowing asset"
          width={110}
          height={110}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Floating 3D Geometric Shape Right */}
      <div
        className="position-absolute d-none d-lg-block animate-float-2 pointer-events-none"
        style={{ top: '22%', right: '4%', zIndex: 1, opacity: 0.8 }}
      >
        <Image
          src="/images/section-bg-shape-2.png"
          alt="Floating glowing asset"
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Central Ambient Glow */}
      <div
        className="position-absolute"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '420px',
          background: 'radial-gradient(ellipse, rgba(255, 87, 34, 0.16) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center text-center">
          <div className="col-xl-10 col-lg-11">
            {/* Top Pill Badge */}
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
              style={{
                background: 'rgba(255, 87, 34, 0.08)',
                border: '1px solid rgba(255, 87, 34, 0.25)',
                color: '#ff8a50',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <span>✦ CLOUD &amp; DEVOPS EXPERTS ✦</span>
            </div>

            {/* Main Headline from PDF */}
            <h1
              className="display-4 fw-bolder text-white mb-4"
              style={{
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                fontWeight: 800
              }}
            >
              AWS Cloud Migration,{' '}
              <span className="gradient-text-orange">DevOps</span> &amp;{' '}
              <span className="gradient-text-ai">Managed Services</span> Experts
            </h1>

            {/* Subheading from PDF */}
            <p
              className="lead text-secondary mx-auto mb-4"
              style={{
                maxWidth: '780px',
                fontSize: '1.15rem',
                lineHeight: 1.7
              }}
            >
              Helping businesses modernize infrastructure, automate deployments, optimize cloud costs, and achieve 24/7 operational excellence.
            </p>

            {/* Delivering Scalability Dynamic Tagline */}
            <div className="mb-4">
              <span className="text-secondary fw-semibold" style={{ fontSize: '0.95rem' }}>
                Delivering{' '}
                <span className="gradient-text-orange fw-bold">Scalability</span>
              </span>
            </div>

            {/* CTA Buttons from PDF */}
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-5">
              <Link href="#contact" className="btn-cv-gradient text-decoration-none px-4 py-3">
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="#case-studies" className="btn-cv-outline text-decoration-none px-4 py-3">
                <span>View Case Studies</span>
              </Link>
            </div>

            {/* AWS Partner Badge Card */}
            <div className="d-flex justify-content-center mb-5">
              <div
                className="d-inline-flex align-items-center gap-3 px-4 py-2 rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}
              >
                <span className="fw-bolder text-warning fs-5" style={{ letterSpacing: '0.05em' }}>
                  aws
                </span>
                <div className="text-start border-start border-secondary border-opacity-25 ps-3">
                  <div className="fw-bolder text-white text-uppercase" style={{ fontSize: '0.88rem', letterSpacing: '0.08em' }}>
                    PARTNER
                  </div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>
                    Advanced Tier Services
                  </div>
                </div>
              </div>
            </div>

            {/* Ticker Badges Bar from PDF */}
            <div
              className="p-3 rounded-4 mt-4"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-4">
                {tickerBadges.map((badge, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-2 text-secondary fw-medium" style={{ fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} className="text-danger flex-shrink-0" />
                    <span className="text-light">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
