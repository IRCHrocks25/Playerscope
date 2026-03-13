import { CtaButton } from './CtaButton';
import bannerBg from 'figma:asset/aea0d8fe305662ebfc68a7dfc6d7ac536b7eef34.png';

export function StorySection() {
  const assertions = [
    {
      num: '01',
      label: 'Access is controlled.',
      sub: 'Role-based permissions govern who sees what, and when.',
    },
    {
      num: '02',
      label: 'Documentation is structured.',
      sub: 'Every evaluation, flag, and decision point is logged with context.',
    },
    {
      num: '03',
      label: 'Governance is not an afterthought.',
      sub: 'It is the first design constraint, not the last checkbox.',
    },
  ];

  const ownershipItems = [
    'Your definitions.',
    'Your evaluations.',
    'Your data.',
  ];

  return (
    <section className="story-sec" id="security">

      {/* ── Headline ── */}
      <h2 className="story-sec-headline reveal">
        <span className="story-sec-hl-line">Built for security.</span>
        <span className="story-sec-hl-line story-sec-hl-line--accent">Designed for governance.</span>
      </h2>

      {/* ── Two-column mid block ── */}
      <div className="story-sec-mid">

        {/* Left: intro paragraph */}
        <div className="story-sec-left reveal">
          <p className="story-sec-body">
            PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> is built within secure enterprise infrastructure. Sensitive athlete data, academic signals, and NIL context are handled with compliance in mind from the start.
          </p>
          <div className="story-sec-divider" aria-hidden="true" />
          <p className="story-sec-caption">
            Infrastructure-grade security applied to collegiate decision intelligence.
          </p>
        </div>

        {/* Right: three assertions */}
        <div className="story-sec-right reveal">
          {assertions.map((a) => (
            <div className="story-sec-assertion" key={a.num}>
              <span className="story-sec-assertion-num">{a.num}</span>
              <div className="story-sec-assertion-content">
                <p className="story-sec-assertion-label">{a.label}</p>
                <p className="story-sec-assertion-sub">{a.sub}</p>
              </div>
              <div className="story-sec-assertion-check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Dark institutional banner ── */}
      <div className="story-sec-banner reveal" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="story-sec-banner-inner">
          <span className="story-sec-banner-tag" aria-hidden="true">// CLASSIFICATION</span>
          <p className="story-sec-banner-text">
            This is not a consumer app.
          </p>
          <p className="story-sec-banner-sub">
            It is institutional infrastructure designed to operate inside the realities of collegiate athletics.
          </p>
        </div>
      </div>

      {/* ── Ownership block ── */}
      <div className="story-sec-ownership reveal">
        <div className="story-sec-ownership-rule" aria-hidden="true" />
        <div className="story-sec-ownership-inner">
          <p className="story-sec-ownership-lead">You maintain ownership of</p>
          <div className="story-sec-ownership-items">
            {ownershipItems.map((item, i) => (
              <span className="story-sec-ownership-item" key={i}>{item}</span>
            ))}
          </div>
        </div>
        <div className="story-sec-ownership-rule" aria-hidden="true" />
      </div>

      {/* ── CTA ── */}
      <div className="story-sec-cta reveal">
        <CtaButton variant="outline" />
      </div>

    </section>
  );
}