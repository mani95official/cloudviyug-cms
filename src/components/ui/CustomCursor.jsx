'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    let animationFrameId;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(updateTrailing);

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.cv-card') ||
        e.target.closest('input')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: isHovered ? 'translate(-50%, -50%) scale(2)' : 'translate(-50%, -50%) scale(1)'
        }}
      />
      <div
        className="custom-cursor-circle"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '48px' : '36px',
          height: isHovered ? '48px' : '36px',
          borderColor: isHovered ? '#ff5722' : 'rgba(255, 87, 34, 0.4)',
          backgroundColor: isHovered ? 'rgba(255, 87, 34, 0.08)' : 'transparent'
        }}
      />
    </>
  );
}
