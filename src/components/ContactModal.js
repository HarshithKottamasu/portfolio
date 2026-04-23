import React from 'react';
import { DATA } from '../data';

function ContactModal({ onClose }) {
  const items = [
    { icon: '✉', label: 'PERSONAL EMAIL', val: DATA.personalEmail, href: `mailto:${DATA.personalEmail}` },
    { icon: '🎓', label: 'COLLEGE EMAIL', val: DATA.collegeEmail, href: `mailto:${DATA.collegeEmail}` },
    { icon: '⌥', label: 'GITHUB', val: `github.com/${DATA.github}`, href: `https://github.com/${DATA.github}` },
    { icon: 'in', label: 'LINKEDIN', val: 'harshith-kottamasu', href: DATA.linkedin },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">Say hello.</h2>
        <p className="modal-subtitle">I'm always open to interesting conversations and collaborations.</p>
        {items.map((item, i) => (
          <div className="contact-item" key={i} style={i === items.length - 1 ? { borderBottom: 'none' } : {}}>
            <div className="contact-icon">{item.icon}</div>
            <div>
              <div className="contact-label">{item.label}</div>
              <div className="contact-val">
                <a href={item.href} target="_blank" rel="noreferrer">{item.val}</a>
              </div>
            </div>
          </div>
        ))}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ContactModal;
