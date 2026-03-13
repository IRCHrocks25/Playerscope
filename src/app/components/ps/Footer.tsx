import logoImg from 'figma:asset/009c9987919b58cdb97df1a717c8fd2f3940a24c.png';

export function Footer() {
  return (
    <footer className="ps-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ marginBottom: 20 }}>
              <img src={logoImg} alt="PlayerScope" style={{ height: 44, width: 'auto', display: 'block' }} />
            </div>
            <p className="footer-desc">
              PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> is a Fit Intelligence platform<br />
              built for the portal era.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn">𝕏</a>
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">@</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Player Intelligence</a></li>
              <li><a href="#">Uniovictor™</a></li>
              <li><a href="#">Admissio™</a></li>
              <li><a href="#">NIL Context</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Request Demo</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup>. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Data Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}