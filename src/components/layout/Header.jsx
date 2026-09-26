'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 7, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href="#home" className="d-flex align-items-center text-decoration-none">
            <Image
              src="/images/cloudviyug-logo.svg"
              alt="CloudViyug Logo"
              width={120}
              height={42}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation (Centered Glass Pill) */}
          <nav
            className="d-none d-lg-flex align-items-center"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              padding: '6px 22px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            <ul className="d-flex align-items-center list-unstyled mb-0 gap-4" style={{ margin: 0, padding: 0 }}>
              {navLinks.map((item, index) => (
                <li key={index} className="position-relative" style={{ listStyle: 'none' }}>
                  {item.hasDropdown ? (
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{
                        color: '#e2e8f0',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: '6px 0',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link href={item.href} style={{ color: 'inherit' }}>
                        {item.name}
                      </Link>
                      <ChevronDown
                        size={14}
                        style={{
                          transition: 'transform 0.2s ease',
                          transform: activeDropdown === index ? 'rotate(180deg)' : 'none'
                        }}
                      />

                      {/* Dropdown Menu */}
                      {activeDropdown === index && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#0e1017',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '10px 0',
                            minWidth: '240px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                            zIndex: 100
                          }}
                        >
                          {item.children.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              className="d-block px-3 py-2 text-decoration-none"
                              style={{
                                color: '#cbd5e1',
                                fontSize: '0.88rem',
                                fontWeight: 500,
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ff5722';
                                e.currentTarget.style.background = 'rgba(255, 87, 34, 0.08)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#cbd5e1';
                                e.currentTarget.style.background = 'transparent';
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        color: '#e2e8f0',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        padding: '6px 0',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#e2e8f0')}
                    >
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
              <Sparkles size={16} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="d-lg-none btn text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="d-lg-none"
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(6, 7, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px',
            overflowY: 'auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            {navLinks.map((item, index) => (
              <li key={index} className="border-bottom border-secondary border-opacity-10 pb-2">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="d-flex align-items-center justify-content-between w-100 bg-transparent border-0 text-white text-start fw-bold py-2"
                      style={{ fontSize: '1.1rem' }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={18}
                        style={{ transform: activeDropdown === index ? 'rotate(180deg)' : 'none' }}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="ps-3 py-2 d-flex flex-column gap-2">
                        {item.children.map((sub, subI) => (
                          <Link
                            key={subI}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ color: '#94a3b8', fontSize: '0.95rem' }}
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
                    className="d-block text-white fw-bold py-2 text-decoration-none"
                    style={{ fontSize: '1.1rem' }}
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
