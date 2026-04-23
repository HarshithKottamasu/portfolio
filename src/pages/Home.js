import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DATA } from '../data';
import profilePhoto from '../assets/profile.jpg';

function useTypewriter(texts, speed = 45, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    let t;
    if (!deleting && charIdx < cur.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === cur.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }
    setDisplay(cur.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

function Home({ setContact }) {
  const navigate = useNavigate();
  const typed = useTypewriter([
    'Building clean, responsive web experiences.',
    'Exploring data to find meaningful insights.',
    'Training CNNs and GANs for computer vision.',
    'Always learning, always building.',
  ]);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              PORTFOLIO · 2025
            </div>
            <h1 className="hero-title">Hi, I'm <em>{DATA.short}.</em></h1>
            <p className="hero-subtitle">
              A student developer<br />obsessed with building<br />good things.
            </p>
            <p className="hero-typewriter">
              {typed}<span className="cursor">|</span>
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/projects')}>View projects →</button>
              <button className="btn-secondary" onClick={() => setContact(true)}>✉ Say hello</button>
              <a className="btn-secondary" href={`https://github.com/${DATA.github}`} target="_blank" rel="noreferrer">↗ GitHub</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image">
              <img src={profilePhoto} alt="Kottamasu Harshith" />
            </div>
            <div className="hero-collab">
              <span className="collab-dot"></span>
              Open to collaborations
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="section-wrap">
        <section className="section">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2 className="section-heading">A brief note,<br />in <em>plain prose.</em></h2>
            <div className="about-text">
              {DATA.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      </div>

      {/* INTERESTS */}
      <div className="section-wrap">
        <section className="section">
          <div className="section-label">02 / INTERESTS</div>
          <h2 className="section-heading">Areas I keep<br /><em>coming back to.</em></h2>
          <div className="interests-grid">
            {DATA.interests.map((item, i) => (
              <div className="interest-card" key={i}>
                <div className="interest-num">0{i + 1}</div>
                <div className="interest-title">{item.title}</div>
                <div className="interest-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* DETAILS */}
      <div className="section-wrap">
        <section className="section">
          <div className="section-label">03 / DETAILS</div>
          <h2 className="section-heading">The boring but<br /><em>useful bits.</em></h2>
          <div className="details-grid">
            <div>
              {[
                { icon: '📍', key: 'Location', val: DATA.location, href: null },
                { icon: '📞', key: 'Phone', val: DATA.phone, href: `tel:${DATA.phone}` },
                { icon: '✉', key: 'Personal email', val: DATA.personalEmail, href: `mailto:${DATA.personalEmail}` },
                { icon: '🎓', key: 'College email', val: DATA.collegeEmail, href: `mailto:${DATA.collegeEmail}` },
              ].map((row, i) => (
                <div className="details-row" key={i}>
                  <div className="details-left">
                    <div className="details-icon">{row.icon}</div>
                    <span className="details-key">{row.key}</span>
                  </div>
                  <div className="details-val">
                    {row.href ? <a href={row.href}>{row.val}</a> : row.val}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="edu-label">EDUCATION</div>
              <div className="edu-card">
                <div className="edu-card-top">
                  <div className="edu-uni">{DATA.college}</div>
                  <div className="edu-years">{DATA.years}</div>
                </div>
                <div className="edu-degree">{DATA.degree}</div>
                <div className="edu-sub">{DATA.location} · 3rd-year undergraduate</div>
              </div>
              <div className="skills-label">SKILLS</div>
              <div className="skills-wrap">
                {DATA.skills.map(s => <span className="skill-badge" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA STRIP */}
      <div className="cta-strip">
        <p className="cta-strip-text">Working on something interesting?<br />Let's talk.</p>
        <div className="cta-strip-actions">
          <button className="btn-secondary" onClick={() => navigate('/projects')}>Browse projects →</button>
          <a className="btn-primary" href={`mailto:${DATA.personalEmail}`}>Email me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
