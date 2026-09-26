'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#14151f',
        border: '1px solid rgba(255, 87, 34, 0.4)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(255, 87, 34, 0.3)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.backgroundColor = '#ff5722';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = '#14151f';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
