import { useState, useEffect } from 'react';
import logoImg from 'figma:asset/009c9987919b58cdb97df1a717c8fd2f3940a24c.png';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`ps-nav${scrolled ? ' ps-nav--scrolled' : ''}`}>
      <a href="#" className="logo-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logoImg} alt="PlayerScope" style={{ height: 40, width: 'auto', display: 'block' }} />
      </a>
      <ul>
        <li><a href="#platform">Platform</a></li>
        <li><a href="#story">Story</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#contact" className="nav-cta">Request Demo</a></li>
      </ul>
    </nav>
  );
}