import bgImage from 'figma:asset/4de0ae06e3056f795aff94e5ee7e8f5f5659f07d.png';
import { CtaButton } from './CtaButton';

const inputs = [
  'Film Study',
  'Staff Conversations',
  'NIL Realities',
  'Academic Standing',
  'Locker Room Chemistry',
  'Roster Construction',
  'Development Trajectory',
];

export function Statement() {
  return (
    <section
      className="statement"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="statement-inner">

        {/* ── Left column: thesis ── */}
        <div className="stmt-left reveal">
          <h2 className="stmt-headline">
            Talent is visible.<br />Their fit is not.
          </h2>

          <p className="stmt-lead">
            The transfer portal expanded access to talent. It accelerated movement and multiplied options.
          </p>

          <div className="stmt-divider" />

          <p className="stmt-pivot-text">
            What it did not change is the weight of the decision.
          </p>
        </div>

        {/* ── Right column: evidence + CTA ── */}
        <div className="stmt-right reveal">

          <div className="stmt-inputs">
            <p className="stmt-inputs-intro">
              Every roster decision pulls from multiple inputs at once:
            </p>
            <div className="stmt-inputs-tags">
              {inputs.map((item) => (
                <span className="stmt-input-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="stmt-rhythm">
            <p className="stmt-rhythm-lead">
              Most of that information lives in different places.
            </p>
            <ul className="stmt-rhythm-items">
              <li>Some of it is documented.</li>
              <li>Some of it is debated.</li>
              <li>Some of it is instinct built over years.</li>
            </ul>
          </div>

          <p className="stmt-question">
            By the time you narrow to three names, the question is no longer talent.<br />
            <strong>It is fit.</strong>{' '}
            And fit is rarely visible in one place at one time.
          </p>

          <p className="stmt-closer">
            PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> brings clarity to that moment.
          </p>

          <div className="hero-btns" style={{ justifyContent: 'flex-start' }}>
            <CtaButton variant="outline" />
          </div>

        </div>

      </div>
    </section>
  );
}