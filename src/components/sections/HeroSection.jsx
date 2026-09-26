'use client';
import Link from 'next/link';
import Image from 'next/image';
import { tickerBadges } from '@/data/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section hero-exact-bg">
      {/* Radial Concentric Arcs / Orbital Dome Lines */}
      <div className="hero-radial-rings" aria-hidden="true">
        <svg
          viewBox="0 0 1600 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-rings-svg"
        >
          <circle cx="800" cy="580" r="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="800" cy="580" r="310" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle cx="800" cy="580" r="460" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="800" cy="580" r="620" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="800" cy="580" r="790" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="800" cy="580" r="980" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </svg>
      </div>

      {/* 4 Floating 3D Geometric Shapes (Exact Matching from PDF/Screenshots) */}
      {/* Top-Left: Glassy angled prism */}
      <div className="hero-shape-tl d-none d-lg-block">
        <Image
          src={getAssetPath('/images/section-bg-shape-4.png')}
          alt="Floating 3D Asset"
          width={115}
          height={115}
          priority
        />
      </div>

      {/* Top-Right: Metallic 3D curved knot */}
      <div className="hero-shape-tr d-none d-lg-block">
        <Image
          src={getAssetPath('/images/section-bg-shape-2.png')}
          alt="Floating 3D Asset"
          width={110}
          height={110}
          priority
        />
      </div>

      {/* Bottom-Left: Metallic 3D cross */}
      <div className="hero-shape-bl d-none d-lg-block">
        <Image
          src={getAssetPath('/images/section-bg-shape-1.png')}
          alt="Floating 3D Asset"
          width={100}
          height={100}
        />
      </div>

      {/* Bottom-Right: Metallic coiled spring */}
      <div className="hero-shape-br d-none d-lg-block">
        <Image
          src={getAssetPath('/images/section-bg-shape-3.png')}
          alt="Floating 3D Asset"
          width={105}
          height={105}
        />
      </div>

      {/* Content Container */}
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row justify-content-center text-center">
          <div className="col-xl-10 col-lg-11">
            {/* Top Pill Badge */}
            <div>
              <div className="hero-pill-badge">
                <span>✦ CLOUD &amp; DEVOPS EXPERTS ✦</span>
              </div>
            </div>

            {/* Main Headline with exact screenshot gradients */}
            <h1 className="hero-heading">
              AWS Cloud Migration,{' '}
              <span className="gradient-text-orange">DevOps</span> &amp;{' '}
              <span className="gradient-text-ai">Managed Services</span> Experts
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle">
              Helping businesses modernize infrastructure, automate deployments, optimize cloud costs, and achieve 24/7 operational excellence.
            </p>

            {/* Delivering Scalability Dynamic Tagline */}
            <div className="hero-tagline">
              <span>Delivering </span>
              <span className="gradient-text-orange fw-bold">Scalability</span>
            </div>

            {/* Exact Action Buttons matching Screenshot */}
            <div className="hero-btn-group">
              <Link href="#contact" className="btn-cv-outline">
                <span>Get Started Today</span>
              </Link>
              <Link href="#case-studies" className="btn-cv-gradient">
                <span>Join Now</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* AWS Partner Badge Card */}
            <div className="d-flex justify-content-center">
              <div className="hero-aws-badge-card">
                <span className="hero-aws-logo-text">aws</span>
                <div className="hero-aws-divider">
                  <div className="hero-aws-partner-title">PARTNER</div>
                  <div className="hero-aws-partner-sub">Advanced Tier Services</div>
                </div>
              </div>
            </div>

            {/* Ticker Badges Bar from PDF */}
            <div className="hero-ticker-box">
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-4">
                {tickerBadges.map((badge, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-2 text-secondary fw-medium fs-6">
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
