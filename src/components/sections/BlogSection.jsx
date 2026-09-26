'use client';
import Link from 'next/link';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { blogsData } from '@/data/blogsData';
import { Calendar, ArrowUpRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blog" className="py-5 position-relative" style={{ background: '#07080d' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text="LATEST BLOG" />
          <h2
            className="display-5 text-white fw-bold mx-auto"
            style={{ maxWidth: '820px', letterSpacing: '-0.02em' }}
          >
            Your source for AI innovations, <span className="gradient-text-orange">news and trends</span>
          </h2>
        </div>

        {/* 3 Article Cards Grid */}
        <div className="row g-4">
          {blogsData.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div
                className="cv-card p-0 h-100 d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  background: '#0c0e17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px'
                }}
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      className="blog-image"
                    />
                    <div
                      className="position-absolute"
                      style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(12, 14, 23, 0.9) 100%)'
                      }}
                    />

                    {/* Category pill on image */}
                    <div className="position-absolute" style={{ top: '15px', right: '15px' }}>
                      <span
                        className="badge rounded-pill px-3 py-1"
                        style={{
                          background: 'rgba(6, 7, 10, 0.8)',
                          color: '#ff8a50',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(8px)',
                          fontSize: '0.75rem'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    {/* Date */}
                    <div className="d-flex align-items-center gap-2 text-secondary mb-3" style={{ fontSize: '0.82rem' }}>
                      <Calendar size={15} className="text-danger" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white fw-bold fs-5 mb-3" style={{ lineHeight: '1.4' }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-4 pb-4 pt-2 border-top border-secondary border-opacity-10 mt-auto">
                  <Link
                    href="#blog"
                    className="d-inline-flex align-items-center gap-2 text-danger fw-bold text-decoration-none"
                    style={{ fontSize: '0.9rem', transition: 'gap 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ff8a50';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ff5722';
                    }}
                  >
                    <span>Read More</span>
                    <ArrowUpRight size={16} />
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
