export const navLinks = [
  { name: 'Home', href: '#home' },
  {
    name: 'Services',
    href: '#services',
    hasDropdown: true,
    children: [
      { name: 'Cloud Advisory Services', href: '#services' },
      { name: 'Cloud Migration & Modernization', href: '#services' },
      { name: 'DevOps Automation', href: '#services' },
      { name: 'Managed Cloud Services', href: '#services' }
    ]
  },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' }
];

export const tickerBadges = [
  'AWS Specialists',
  'Kubernetes Experts',
  'DevOps Automation',
  'Managed Cloud Services',
  'Cloud Cost Optimization',
  '24/7 Monitoring & Support'
];

export const majorCapabilities = [
  { name: 'AWS', label: 'AWS Partner' },
  { name: 'Kubernetes', label: 'Kubernetes' },
  { name: 'Elastic', label: 'Elasticsearch' },
  { name: 'Google Cloud', label: 'Google Cloud' },
  { name: 'MongoDB', label: 'MongoDB' },
  { name: 'Ansible', label: 'Ansible' },
  { name: 'HashiCorp', label: 'HashiCorp Terraform' },
  { name: 'Docker', label: 'Docker' }
];
