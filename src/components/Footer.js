import React from 'react';
import { NavLink } from 'react-router-dom';
import { DATA } from '../data';

function Footer({ setContact }) {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Kottamasu Harshith</div>
          <div className="footer-brand-desc">
            Student Developer · Integrated Computer Science.<br />Based in Hyderabad.
          </div>
        </div>
        <div>
          <div className="footer-col-label">CONTACT</div>
          <div className="footer-col-links">
            <a className="footer-col-link" href={`mailto:${DATA.personalEmail}`}>{DATA.personalEmail}</a>
            <a className="footer-col-link" href={`mailto:${DATA.collegeEmail}`}>{DATA.collegeEmail}</a>
            <a className="footer-col-link" href={`tel:${DATA.phone}`}>{DATA.phone}</a>
          </div>
        </div>
        <div>
          <div className="footer-col-label">ELSEWHERE</div>
          <div className="footer-col-links">
            <a className="footer-col-link" href={`https://github.com/${DATA.github}`} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="footer-col-link" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <button className="footer-col-link" onClick={() => setContact(true)}>Email ↗</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Kottamasu Harshith. All rights reserved.</span>
        <span className="footer-version">crafted with care · v1.0</span>
      </div>
    </footer>
  );
}

export default Footer;
