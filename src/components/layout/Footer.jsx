'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Footer() {
  const technologies = ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Linux', 'Ansible'];

  return (
    <footer style={{ background: '#050609', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1, paddingTop: '70px', paddingBottom: '30px' }}>
        <div className="row g-4 mb-5">
          {/* Col 1: Brand Info */}
          <div className="col-lg-3 col-md-6">
            <Link href="#home" className="d-inline-block mb-3">
              <Image
                src={getAssetPath('/images/cloudviyug-logo.svg')}
                alt="CloudViyug Logo"
                width={190}
                height={45}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-secondary mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              CloudViyug Technologies provides cloud consulting, AWS migration, DevOps automation, and managed cloud services to help businesses scale efficiently.
            </p>
            <div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill text-white text-decoration-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.85rem'
                }}
              >
                <i className="bi bi-linkedin text-danger"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.08em' }}>
              SERVICES
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.92rem' }}>
              <li>
                <Link href="#services" className="text-secondary text-decoration-none">
                  • Cloud Advisory Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary text-decoration-none">
                  • Cloud Migration Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary text-decoration-none">
                  • DevOps Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary text-decoration-none">
                  • Managed Cloud Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-secondary text-decoration-none">
                  • Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Technologies */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.08em' }}>
              COMPANY
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary mb-4" style={{ fontSize: '0.92rem' }}>
              <li>
                <Link href="#about" className="text-secondary text-decoration-none">
                  • About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary text-decoration-none">
                  • Our Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-secondary text-decoration-none">
                  • Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary text-decoration-none">
                  • Contact Us
                </Link>
              </li>
            </ul>

            <h6 className="text-white fw-bold mb-2 fs-6 text-uppercase" style={{ letterSpacing: '0.08em' }}>
              TECHNOLOGIES
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="badge px-2 py-1"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#cbd5e1',
                    fontSize: '0.78rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact Information */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.08em' }}>
              CONTACT
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-3 text-secondary mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li className="d-flex align-items-start gap-2">
                <MapPin size={18} className="text-danger flex-shrink-0 mt-1" />
                <span>No 32, Phase 2, New Balaji Nagar, Sengalipalayam, Coimbatore, Tamil Nadu 641022, India</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone size={16} className="text-danger flex-shrink-0" />
                <a href="tel:+917010511698" className="text-secondary text-decoration-none">
                  +91 7010511698
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail size={16} className="text-danger flex-shrink-0" />
                <a href="mailto:enquiries@cloudviyug.com" className="text-secondary text-decoration-none">
                  enquiries@cloudviyug.com
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Clock size={16} className="text-danger flex-shrink-0" />
                <span>Mon–Sat: 9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>

            <Link href="#contact" className="btn-cv-gradient w-100 py-2 text-decoration-none d-flex align-items-center justify-content-center gap-2">
              <span>Book Free Consultation</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="pt-4 mt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.07)', fontSize: '0.88rem' }}
        >
          <div>
            © {new Date().getFullYear()} <strong className="text-white">CloudViyug Technologies</strong>. All Rights Reserved.
          </div>
          <div className="d-flex gap-4">
            <a href="#" className="text-secondary text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms of Use
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
