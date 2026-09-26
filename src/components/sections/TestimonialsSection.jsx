'use client';
import SectionBadge from '@/components/ui/SectionBadge';
import { testimonialsData } from '@/data/testimonialsData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const review = testimonialsData.reviews[0];

  return (
    <section id="case-studies" className="py-5 position-relative section-bg-dark-1">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={testimonialsData.badge} />
          <h2 className="section-heading-lg mx-auto mb-3">
            What Our Clients <span className="gradient-text-orange">Say</span>
          </h2>
          <p className="section-subheading mx-auto mb-0">
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="cv-card testimonial-featured-card p-4 p-md-5 position-relative">
              {/* Header Badge & Rating */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                <span className="testimonial-tag">
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
              <p className="text-secondary mb-4 fs-5 fst-italic lh-lg">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-top border-secondary border-opacity-15 d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="text-white fw-bold mb-0 fs-5">{review.author}</h5>
                  <span className="text-danger fw-semibold fs-6">
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
