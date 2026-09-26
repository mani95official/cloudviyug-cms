'use client';
import SectionBadge from '@/components/ui/SectionBadge';
import { testimonialsData } from '@/data/testimonialsData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const review = testimonialsData.reviews[0];

  return (
    <section id="case-studies" className="py-5 position-relative" style={{ background: '#07080d' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={testimonialsData.badge} />
          <h2 className="display-5 text-white fw-bold mx-auto mb-3" style={{ maxWidth: '780px', letterSpacing: '-0.02em' }}>
            What Our Clients <span className="gradient-text-orange">Say</span>
          </h2>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div
              className="cv-card p-4 p-md-5 position-relative"
              style={{
                border: '1px solid rgba(255, 87, 34, 0.35)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 35px rgba(255, 87, 34, 0.12)'
              }}
            >
              {/* Header Badge & Rating */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                <span
                  className="badge rounded-pill px-3 py-2 fw-bold"
                  style={{
                    background: 'rgba(255, 87, 34, 0.12)',
                    color: '#ff5722',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em'
                  }}
                >
                  ✦ {review.tag}
                </span>
                <div className="d-flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={18} fill="#ff5722" color="#ff5722" />
                  ))}
                </div>
              </div>

              {/* Quote Title */}
              <h3 className="text-white fw-bold fs-4 mb-3">
                &ldquo;{review.quoteTitle}&rdquo;
              </h3>

              {/* Quote Body */}
              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: '1.08rem',
                  lineHeight: '1.8',
                  fontStyle: 'italic'
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-top border-secondary border-opacity-15 d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="text-white fw-bold mb-0 fs-5">{review.author}</h5>
                  <span className="text-danger fw-semibold" style={{ fontSize: '0.88rem' }}>
                    {review.role}
                  </span>
                </div>
                <Quote size={42} className="text-danger opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
