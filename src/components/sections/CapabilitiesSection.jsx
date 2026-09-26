'use client';
import { majorCapabilities } from '@/data/navigation';
import { Cloud, Layers, Database, Cpu, Server, Terminal, Shield, Box } from 'lucide-react';

export default function CapabilitiesSection() {
  const getTechIcon = (name) => {
    switch (name) {
      case 'AWS':
        return <Cloud size={32} className="text-warning" />;
      case 'Kubernetes':
        return <Layers size={32} className="text-primary" />;
      case 'Elastic':
        return <Database size={32} className="text-success" />;
      case 'Google Cloud':
        return <Cloud size={32} className="text-info" />;
      case 'MongoDB':
        return <Database size={32} className="text-success" />;
      case 'Ansible':
        return <Terminal size={32} className="text-danger" />;
      case 'HashiCorp':
        return <Shield size={32} className="text-primary" />;
      case 'Docker':
        return <Box size={32} className="text-info" />;
      default:
        return <Server size={32} className="text-warning" />;
    }
  };

  return (
    <section className="py-5 position-relative section-bg-dark-1">
      <div className="container py-4">
        {/* Section Title from PDF */}
        <div className="text-center mb-5">
          <h2 className="display-6 text-white fw-bold mb-3">
            Our Major <span className="gradient-text-orange">Capabilities</span>
          </h2>
          <div className="mx-auto bg-danger rounded-pill" style={{ width: '60px', height: '3px' }} />
        </div>

        {/* 8 Capabilities Grid */}
        <div className="row g-4 justify-content-center">
          {majorCapabilities.map((cap, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-6">
              <div className="cv-card p-4 d-flex flex-column align-items-center justify-content-center text-center h-100">
                <div className="mb-3">{getTechIcon(cap.name)}</div>
                <h4 className="text-white fw-bold fs-6 mb-0">{cap.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
