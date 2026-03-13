import { CtaButton } from './CtaButton';

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="problem-inner">

        {/* ── Centered title ── */}
        <div className="problem-title-row reveal">
          <h2 className="section-title problem-centered-title" style={{ color: 'var(--text-dark)' }}>
            One place for what actually drives<br />THE DECISION.
          </h2>
        </div>

        {/* ── 2-column body ── */}
        <div className="problem-2col reveal">

          {/* LEFT */}
          <div className="problem-2col-left">
            <p className="problem-lead" style={{ fontWeight: 600 }}>
              You already have the information. The issue is not access. It is where it lives and how it connects.
            </p>
            <div className="problem-body-col">
              <p>
                Film is in one place. NIL context in another. Academic standing somewhere else. Staff perspective comes from different conversations. Roster construction is tracked in its own way.
              </p>
              <p>
                By the time you are down to three names, you are pulling from multiple systems and multiple discussions at once.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="problem-2col-right">
            <div className="problem-body-col">
              <p>
                PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> does not replace your tools. It becomes the place where the information that shapes the call lives together. Not every clip or data stream. The inputs that matter when the clock is running.
              </p>
              <div className="problem-profile-callout">
                <p>
                  All of it is organized in a single PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> Profile, so when the conversation happens, everyone is looking at the same foundational information.
                </p>
              </div>
              <p className="problem-payoff-line">
                Instinct is still part of the decision. Now it has structure behind it. What used to be scattered becomes visible.
              </p>
            </div>
            <div style={{ marginTop: '28px' }}>
              <CtaButton variant="outline" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}