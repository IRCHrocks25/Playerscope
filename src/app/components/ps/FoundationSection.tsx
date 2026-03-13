import { CtaButton } from './CtaButton';

export function FoundationSection() {
  const transforms = [
    {
      before: 'What once felt scattered',
      after: 'Becomes organized.',
    },
    {
      before: 'What once depended on memory',
      after: 'Becomes documented.',
    },
    {
      before: 'What once relied heavily on instinct',
      after: 'Now has visible proof behind it.',
    },
  ];

  const benefits = [
    'Fewer cultural surprises after commitment.',
    'Stronger alignment between talent and team identity.',
    'More disciplined conversations around NIL allocation and development.',
  ];

  return (
    <section className="foundation-section">
      <div className="foundation-inner">

        {/* ── Headline ── */}
        <h2 className="foundation-headline reveal">
          What happens when PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup><br />becomes your foundation.
        </h2>

        {/* ── Chaos block ── */}
        <div className="foundation-chaos reveal">
          <div className="foundation-chaos-line">
            <span className="foundation-chaos-text">The portal does not slow down.</span>
            <span className="foundation-chaos-slash" aria-hidden="true" />
          </div>
          <div className="foundation-chaos-line">
            <span className="foundation-chaos-text">The pressure does not disappear.</span>
            <span className="foundation-chaos-slash" aria-hidden="true" />
          </div>
          <div className="foundation-chaos-line">
            <span className="foundation-chaos-text">The noise does not shrink.</span>
            <span className="foundation-chaos-slash" aria-hidden="true" />
          </div>
        </div>

        {/* ── Pivot block ── */}
        <div className="foundation-pivot reveal">
          <div className="foundation-pivot-rule" aria-hidden="true" />
          <p className="foundation-pivot-text">But your foundation changes.</p>
          <div className="foundation-pivot-rule" aria-hidden="true" />
        </div>

        {/* ── Transition prose ── */}
        <p className="foundation-prose reveal">
          Instead of reacting to chaos each cycle, your program builds from clarity. A shared definition of fit. A shared language across staff. A shared standard that carries from one recruiting class to the next.
        </p>

        {/* ── Transformation cards ── */}
        <div className="foundation-transforms reveal">
          {transforms.map((t, i) => (
            <div className="foundation-transform-card" key={i}>
              <span className="foundation-transform-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="foundation-transform-before">{t.before}</p>
              <div className="foundation-transform-arrow">
                <span aria-hidden="true">↓</span>
              </div>
              <p className="foundation-transform-after">{t.after}</p>
            </div>
          ))}
        </div>

        {/* ── Benefits strip ── */}
        <div className="foundation-benefits reveal">
          {benefits.map((b, i) => (
            <div className="foundation-benefit" key={i}>
              <div className="foundation-benefit-dot" aria-hidden="true" />
              <p className="foundation-benefit-text">{b}</p>
            </div>
          ))}
        </div>

        {/* ── Closing ── */}
        <div className="foundation-close reveal">
          <p>Collegiate sports will continue to move fast. But with the right foundation, your program does not move reactively.</p>
          <p className="foundation-close-hero">
            PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> becomes the structure that allows you to build intentionally, even in a constantly shifting environment.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="foundation-cta reveal">
          <CtaButton variant="outline" />
        </div>

      </div>
    </section>
  );
}