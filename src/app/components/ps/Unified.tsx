import { CtaButton } from './CtaButton';
import athleteImage from 'figma:asset/f4472a0b5a4b1820d8f6d66ab024dc14c8f46a28.png';

export function Unified() {
  return (
    <section className="unified">

      <div className="unified-2col">

        {/* ── Left: text column ── */}
        <div className="unified-text-col">

          {/* Headline */}
          <div className="unified-hed reveal">
            <h2 className="unified-headline">
              <span className="unified-hl-line">When an athlete</span>
              <span className="unified-hl-line unified-hl-accent">earns a closer look</span>
            </h2>
          </div>

          {/* Lead paragraph */}
          <div className="unified-lead reveal">
            <p>
              You do not have to change how you evaluate talent. Your trusted sources stay the same: film, stats, evaluations, conversations, and the platforms you already rely on.
            </p>
          </div>

          {/* Two-column prose */}
          <div className="unified-prose-grid reveal">
            <p>
              PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> enters the picture when an athlete rises to the surface — when someone on your staff says, "We need to take a closer look." At that point, you already know they can play.
            </p>
            <p>
              That is where the PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> Profile comes in. It brings the most important context into one structured view — not as scattered notes or separate threads, but as a single foundation for the conversation.
            </p>
          </div>

          {/* Closing callout */}
          <div className="unified-close reveal">
            <div className="unified-close-bar"></div>
            <div className="unified-close-text">
              <span>The surface view shows what matters first.</span>
              From there, you can go as deep as you need.
            </div>
          </div>

          {/* CTA */}
          <div className="hero-btns reveal" style={{ marginTop: '40px', justifyContent: 'flex-start' }}>
            <CtaButton variant="outline" />
          </div>

        </div>

        {/* ── Right: pull quote + image column ── */}
        <div className="unified-img-col">

          {/* Pull quote sits above the image */}
          <blockquote className="unified-pull-quote-right reveal">
            The real question is whether they fit this team,
            this moment, this direction.
          </blockquote>

          <img
            src={athleteImage}
            alt="Coach addressing players in helmets before a game"
            className="unified-athlete-img"
          />
        </div>

      </div>
    </section>
  );
}