'use client';
import { useState } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { contactData } from '@/data/contactData';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    location: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullName && form.email && form.phone && form.description) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          location: '',
          description: ''
        });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-5 position-relative" style={{ background: '#050609' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionBadge text={contactData.badge} />
          <h2 className="display-5 text-white fw-bold mx-auto mb-3" style={{ maxWidth: '820px', letterSpacing: '-0.02em' }}>
            Book a <span className="gradient-text-orange">Free Consultation</span>
          </h2>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '680px', fontSize: '1.05rem' }}>
            {contactData.subtitle}
          </p>
        </div>

        <div className="row g-5">
          {/* Left Column: Contact Info & What to Expect */}
          <div className="col-lg-5">
            <div className="cv-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="text-white fw-bold fs-4 mb-3">{contactData.infoTitle}</h3>
                <p className="text-secondary mb-4" style={{ fontSize: '0.96rem', lineHeight: '1.7' }}>
                  {contactData.infoDescription}
                </p>

                {/* Contact List */}
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                      style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#ff5722' }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>PHONE</div>
                      <a href={`tel:${contactData.phone}`} className="text-white fw-semibold text-decoration-none">
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                      style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#ff5722' }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>EMAIL</div>
                      <a href={`mailto:${contactData.email}`} className="text-white fw-semibold text-decoration-none">
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                      style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#ff5722' }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>ADDRESS</div>
                      <div className="text-white fw-semibold">{contactData.shortAddress}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                      style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#ff5722' }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>BUSINESS HOURS</div>
                      <div className="text-white fw-semibold">{contactData.businessHours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Box */}
              <div className="cv-card-inner-box mt-4">
                <h5 className="text-white fw-bold fs-6 mb-3">What to Expect:</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  {contactData.expectations.map((exp, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} className="text-danger flex-shrink-0" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="col-lg-7">
            <div className="cv-card p-4 p-md-5">
              <h3 className="text-white fw-bold fs-4 mb-4">Send Us a Message</h3>

              {submitted ? (
                <div className="p-5 text-center rounded-4 bg-dark border border-success border-opacity-50">
                  <CheckCircle2 size={48} className="text-success mb-3" />
                  <h4 className="text-white fw-bold mb-2">Inquiry Submitted Successfully!</h4>
                  <p className="text-secondary mb-0">
                    Thank you for reaching out to CloudViyug. Our cloud specialists will review your requirements and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 99999 99999"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="form-select bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      >
                        <option value="">Select a service...</option>
                        {contactData.servicesOptions.map((svc, i) => (
                          <option key={i} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                        BUDGET RANGE
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="form-select bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      >
                        <option value="">Select budget...</option>
                        {contactData.budgetOptions.map((b, i) => (
                          <option key={i} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                      LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                    />
                  </div>

                  <div>
                    <label className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.82rem' }}>
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project, challenges, and goals..."
                      required
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3 rounded-3"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button type="submit" className="btn-cv-gradient w-100 py-3 mt-2">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>

                  <div className="text-center text-secondary mt-2" style={{ fontSize: '0.8rem' }}>
                    By submitting, you agree to our Privacy Policy.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
