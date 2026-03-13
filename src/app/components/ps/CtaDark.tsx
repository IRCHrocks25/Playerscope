import ctaBg from 'figma:asset/a102af3c654480312011ee994687187f98de753d.png';
import { CtaButton } from './CtaButton';

export function CtaDark() {
  return (
    <section className="cta-dark" id="contact">

      {/* ── Background image ── */}
      <div className="cta-video-wrap">
        <img src={ctaBg} alt="" className="cta-bg-image" aria-hidden="true" />
      </div>

      {/* ── Overlay ── */}
      <div className="cta-video-overlay" />

      {/* ── Content ── */}
      <div className="cta-inner">

        {/* Headline pair */}
        <div className="cta-headline-block">
          <h2 className="cta-headline">
            <span className="cta-hl-line">Change will continue.</span>
            <span className="cta-hl-line">Speed will continue.</span>
          </h2>
        </div>

        {/* Pivot line */}
        <div className="cta-pivot">
          <p>The difference is whether your program is reacting — or building for the future.</p>
        </div>

        {/* Rule */}
        <div className="cta-rule" aria-hidden="true" />

        {/* Lower two-col */}
        <div className="cta-lower">

          {/* Left: founding context */}
          <div className="cta-lower-left">
            <p className="cta-body-text">
              PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> is now inviting a limited group of founding partners to help shape this next era of roster construction.
            </p>
          </div>

          {/* Right: invitation card + CTA */}
          <div className="cta-lower-right">
            <div className="cta-invite-card">
              <span className="cta-invite-label" aria-hidden="true">// INVITATION</span>
              <p className="cta-invite-text">
                Be among the first to build with it. Move ahead of the competition before they realize the standard has changed.
              </p>
              <CtaButton href="#" className="cta-demo-btn" variant="outline" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}