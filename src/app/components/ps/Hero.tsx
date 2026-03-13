import heroBg from 'figma:asset/df0317768a91f454dc1f346b385131a005df8cca.png';
import { CtaButton } from './CtaButton';

export function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text legibility */}
      <div className="hero-video-overlay" />

      <h1>From portal chaos to clarity.</h1>

      <div className="hero-sub">Fit intelligence for the portal era.</div>

      <div className="hero-body">
        <p className="hero-body-p">Forty-eight hours remain in the transfer portal window. Three players are on the board. One decision will reshape your roster.</p>
        <p className="hero-body-p">Film has been reviewed. Conversations have happened. NIL numbers have been discussed. Academic questions have been asked. Staff opinions are forming.</p>
        <p className="hero-body-p">The talent is visible. The right <em>fit</em> is not.</p>
        <p className="hero-body-p hero-body-closer"><strong>PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> reveals who fits. Before you commit.</strong></p>
      </div>

      <div className="hero-btns">
        <CtaButton variant="outline" />
      </div>

    </section>
  );
}