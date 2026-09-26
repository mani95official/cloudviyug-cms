'use client';
import { useState } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { Sparkles, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function CtaBannerSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-5 position-relative" style={{ background: '#050609' }}>
      {/* Background ambient radial glow */}
      <div
        className="position-absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        <div
          className="rounded-5 p-4 p-md-5 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 23, 35, 0.9) 0%, rgba(10, 12, 18, 0.95) 100%)',
            border: '1px solid rgba(255, 87, 34, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 35px rgba(255, 87, 34, 0.15)'
          }}
        >
          <div className="row g-5 align-items-center">
            {/* Left Column: Heading & Copy */}
            <div className="col-lg-6 text-center text-lg-start">
              <SectionBadge text="NEED HELP" />
              <h2
                className="display-5 text-white fw-bold mb-4"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.25 }}
              >
                Ready to build smarter, faster, &amp; more{' '}
                <span className="gradient-text-orange">intelligently with AI?</span>
              </h2>
              <p className="lead text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Ready to innovate with state-of-the-art AI models? Whether you have an early idea, a technical challenge, or a full enterprise roadmap, our engineers are ready to bring it to life.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#contact-form" className="btn-cv-gradient text-decoration-none">
                  <span>Send A Message</span>
                  <Send size={16} />
                </a>
                <a href="mailto:contact@cloudviyug.com" className="btn-cv-outline text-decoration-none">
                  <span>Get Free Consultation</span>
                  <Sparkles size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Quick Contact Inquiry Card */}
            <div className="col-lg-6" id="contact-form">
              <div
                className="p-4 rounded-4"
                style={{
                  background: 'rgba(6, 7, 10, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <MessageSquare size={18} className="text-danger" />
                  <h4 className="text-white fw-bold fs-5 mb-0">Start Your AI Project</h4>
                </div>
                <p className="text-secondary mb-4" style={{ fontSize: '0.88rem' }}>
                  Leave your details and an AI strategy specialist will reach out within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-4 text-center rounded-3 bg-dark border border-success border-opacity-50">
                    <CheckCircle2 size={40} className="text-success mb-2" />
                    <h5 className="text-white fw-bold">Message Sent Successfully!</h5>
                    <p className="text-secondary mb-0" style={{ fontSize: '0.88rem' }}>
                      Thank you for contacting CloudViyug. We will review your project and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name / Organization"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                        style={{ fontSize: '0.9rem' }}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Business Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                        style={{ fontSize: '0.9rem' }}
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Briefly tell us about your project or AI goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                        style={{ fontSize: '0.9rem', resize: 'none' }}
                      />
                    </div>
                    <button type="submit" className="btn-cv-gradient w-100 py-3 mt-1">
                      <span>Submit Inquiry</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
