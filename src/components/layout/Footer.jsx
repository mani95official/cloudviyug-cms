'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const technologies = ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Linux', 'Ansible'];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer-exact-bg position-relative">
      <div className="container position-relative py-5">
        {/* Pre-Footer Callout Box matching Screenshot 3 */}
        <div className="footer-pre-banner d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
          <div>
            <h2 className="display-5 fw-bold mb-2 text-white">
              Let&apos;s start work <span className="gradient-text-together">together!</span>
            </h2>
            <p className="text-secondary mb-0 fs-6">
              Partner with us to create intelligent, impactful, and future-ready cloud solutions together.
            </p>
          </div>
          <Link href="#contact" className="btn-cv-gradient text-nowrap px-4 py-3 text-decoration-none">
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="row g-4 mb-5 pt-2">
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
            <p className="text-secondary mb-4 fs-6">
              CloudViyug Technologies provides cloud consulting, AWS migration, DevOps automation, and managed cloud services to help businesses scale efficiently.
            </p>
            <div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill text-white text-decoration-none bg-dark border border-secondary border-opacity-25 fs-7"
              >
                <i className="bi bi-linkedin text-danger"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">
              SERVICES
            </h5>
            <ul className="footer-link-list">
              <li>
                <Link href="#services">
                  • Cloud Advisory Services
                </Link>
              </li>
              <li>
                <Link href="#services">
                  • Cloud Migration Services
                </Link>
              </li>
              <li>
                <Link href="#services">
                  • DevOps Automation
                </Link>
              </li>
              <li>
                <Link href="#services">
                  • Managed Cloud Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies">
                  • Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Technologies */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">
              COMPANY
            </h5>
            <ul className="footer-link-list mb-4">
              <li>
                <Link href="#about">
                  • About Us
                </Link>
              </li>
              <li>
                <Link href="#services">
                  • Our Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies">
                  • Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  • Contact Us
                </Link>
              </li>
            </ul>

            <h6 className="footer-heading">
              TECHNOLOGIES
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span key={i} className="tech-tag-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact Information & Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">
              Subscribe Newsletter&apos;s
            </h5>
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="newsletter-subscribe-box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="form-control newsletter-subscribe-input"
                />
                <button
                  type="submit"
                  className="newsletter-subscribe-btn"
                >
                  <span>Subscribe</span>
                  <Send size={14} className="text-danger" />
                </button>
              </div>
              {subscribed && (
                <div className="text-success mt-2 fw-medium fs-7">
                  ✓ Subscribed successfully!
                </div>
              )}
            </form>

            <h5 className="footer-heading">
              CONTACT
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary mb-3 fs-6">
              <li className="d-flex align-items-start gap-2">
                <MapPin size={16} className="text-danger flex-shrink-0 mt-1" />
                <span>No 32, Phase 2, New Balaji Nagar, Sengalipalayam, Coimbatore, Tamil Nadu 641022, India</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone size={15} className="text-danger flex-shrink-0" />
                <a href="tel:+917010511698" className="text-secondary text-decoration-none">
                  +91 7010511698
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail size={15} className="text-danger flex-shrink-0" />
                <a href="mailto:enquiries@cloudviyug.com" className="text-secondary text-decoration-none">
                  enquiries@cloudviyug.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 mt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary border-top border-secondary border-opacity-15 fs-7">
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
