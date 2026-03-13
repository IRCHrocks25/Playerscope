import bgImage from 'figma:asset/22b84cf3fe052a4bfb41e4b92575777b58832de3.png';
import productImg from 'figma:asset/cc6be0b180f517578217bd49e29314dc304edb95.png';
import { CtaButton } from './CtaButton';

export function ProductSection() {
  return (
    <section
      className="product-section"
      id="platform"
      style={{ '--prod-bg-img': `url(${bgImage})` } as React.CSSProperties}
    >
      <div className="product-intro reveal">
        <div className="product-2col-wrap">

          {/* ── LEFT: identity + headline + contrast pair ── */}
          <div className="product-2col-left">
            <h2 className="section-title product-2col-title">
              What Fit Intelligence really means.
            </h2>
            <div className="product-intro-pair">
              <span className="product-intro-pair-line">Talent is visible on film.</span>
              <span className="product-intro-pair-line">Fit is defined by the program.</span>
            </div>

            {/* ── Image placeholder ── */}
            <div className="product-img-placeholder">
              <img src={productImg} alt="Fit Intelligence athlete" className="product-img-photo" />
            </div>
          </div>

          {/* ── RIGHT: prose + callout + verdict + CTA ── */}
          <div className="product-2col-right">
            <div className="product-intro-body">
              <p>
                Every staff describes it differently. What works in one locker room does not automatically work in another. What matters for a quarterback is not the same as what matters for a defensive end. What matters for a point guard is not the same as what matters for a wing player.
              </p>
              <p>
                PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> does not impose a definition of Fit. It provides a structured intelligence framework built around the traits that consistently drive winning programs. Within that structure, each program defines what matters most — by team, by system, and by position.
              </p>
              <p>
                If work ethic is critical for your culture, the evidence behind it is surfaced. If role acceptance matters in your rotation, the patterns around it are visible. If leadership under pressure separates contributors from culture carriers, those signals are brought forward.
              </p>
            </div>

            <div className="product-intro-callout">
              <p>This is not personality scoring. It is structured visibility into the traits and behaviors your program already values.</p>
            </div>

            <div className="product-intro-verdict">
              <p>Over time, those definitions remain consistent, even as the portal continues to move fast.</p>
              <strong>That is Fit Intelligence. Defined by you. Made visible by PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup>.</strong>
            </div>

            <div className="hero-btns" style={{ justifyContent: 'flex-start', marginBottom: 0 }}>
              <CtaButton />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}