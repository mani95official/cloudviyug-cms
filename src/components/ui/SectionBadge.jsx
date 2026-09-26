'use strict';
import React from 'react';

export default function SectionBadge({ text, className = '' }) {
  return (
    <div className={`section-badge ${className}`}>
      <span className="star-icon">✦</span>
      <span>{text}</span>
      <span className="star-icon">✦</span>
    </div>
  );
}
