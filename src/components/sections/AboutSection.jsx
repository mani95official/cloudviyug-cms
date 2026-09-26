'use client';
import Link from 'next/link';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { aboutData } from '@/data/aboutData';
import { ArrowRight, Server, CheckCircle, Clock, Activity } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function AboutSection() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Server className="text-danger" size={24} />;
      case 1:
        return <CheckCircle className="text-danger" size={24} />;
      case 2:
        return <Activity className="text-danger" size={24} />;
      case 3:
        return <Clock className="text-danger" size={24} />;
      default:
        return <Server className="text-danger" size={24} />;
    }
  };

  return (
    <section id="about" className="py-5 position-relative section-bg-dark-1">
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* Left Column: Image / Illustration Card */}
          <div className="col-lg-5">
            <div className="cv-card p-4 p-md-5 d-flex flex-column justify-content-between text-center position-relative overflow-hidden">
              <div className="d-flex align-items-center justify-content-center flex-grow-1 py-3">
                <Image
                  src={getAssetPath('/images/what-we-do-img.png')}
                  alt="Cloud-First People-Focused"
                  width={340}
                  height={220}
                  priority
                  style={{ objectFit: 'contain', maxHeight: '200px' }}
                />
              </div>

              {/* Tag Pill at Bottom of Card */}
              <div className="cv-card-inner-box text-center py-3 mt-auto">
                <h4 className="text-white fw-bold fs-5 mb-0 gradient-text-orange">
                  {aboutData.cardTag}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 4 Metric Cards */}
          <div className="col-lg-7">
            <SectionBadge text={aboutData.badge} />
            <h2 className="section-heading-lg mb-4">
              Certified Cloud Experts <span className="gradient-text-orange">You Can Trust</span>
            </h2>
            <p className="section-subheading mb-5">
              {aboutData.description}
            </p>

            {/* 4 Metric Cards Grid */}
            <div className="row g-3 mb-4">
              {aboutData.metrics.map((metric, idx) => (
                <div key={idx} className="col-sm-6">
                  <div className="cv-card p-3 p-md-4 d-flex align-items-center justify-content-between">
                    <div>
                      <div className="metric-value-lg mb-1">
                        {metric.value}
                      </div>
                      <div className="text-secondary fw-medium fs-6">
                        {metric.label}
                      </div>
                    </div>
                    <div className="icon-box-orange">
                      {getIcon(idx)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Link Button */}
            <div className="pt-2">
              <Link href="#contact" className="btn-cv-gradient text-decoration-none px-4 py-3">
                <span>{aboutData.buttonText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
