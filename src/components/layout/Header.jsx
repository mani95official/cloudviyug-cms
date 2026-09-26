'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <Link href="#home" className="d-flex align-items-center text-decoration-none">
            <Image
              src={getAssetPath('/images/cloudviyug-logo.svg')}
              alt="CloudViyug Logo"
              width={180}
              height={42}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Centered Glass Pill Navigation */}
          <nav className="nav-pill-container d-none d-lg-flex align-items-center">
            <ul className="nav-list">
              {navLinks.map((item, index) => (
                <li key={index} className="position-relative">
                  {item.hasDropdown ? (
                    <div
                      className="nav-item-link"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link href={item.href} className="text-reset">
                        {item.name}
                      </Link>
                      <ChevronDown
                        size={14}
                        className={`transition-all ${activeDropdown === index ? 'rotate-180' : ''}`}
                      />

                      {/* Dropdown Menu */}
                      {activeDropdown === index && (
                        <div className="nav-dropdown-menu">
                          {item.children.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              className="nav-dropdown-item text-decoration-none"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="nav-item-link text-decoration-none">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="d-flex align-items-center gap-3">
            <Link href="#contact" className="btn-cv-gradient d-none d-sm-inline-flex text-decoration-none">
              <span>Book Free Consultation</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer d-lg-none">
          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            {navLinks.map((item, index) => (
              <li key={index} className="border-bottom border-secondary border-opacity-10 pb-2">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="d-flex align-items-center justify-content-between w-100 bg-transparent border-0 text-white text-start fw-bold py-2 fs-5"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-all ${activeDropdown === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="ps-3 py-2 d-flex flex-column gap-2">
                        {item.children.map((sub, subI) => (
                          <Link
                            key={subI}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-secondary fs-6 text-decoration-none"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="d-block text-white fw-bold py-2 text-decoration-none fs-5"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-cv-gradient w-100 py-3 text-center text-decoration-none"
            >
              <span>Book Free Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
