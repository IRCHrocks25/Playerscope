const shifts = [
  'Rules will adjust.',
  'Structures will shift.',
  'New pressures will emerge.',
];

const anchors = [
  { label: 'Framework', body: 'Your framework does not disappear.' },
  { label: 'Fit Definition', body: 'Your definition of fit remains consistent.' },
  { label: 'Evaluation', body: 'Your evaluation process remains structured.' },
  { label: 'Footing', body: 'Your program keeps its footing while everything around it moves.' },
];

export function ApproachSection() {
  return (
    <section className="appr" id="approach">

      {/* ── Headline ── */}
      <div className="appr-headline-wrap reveal">
        <h2 className="appr-headline">
          <span className="appr-hl-main">The only constant</span>
          <span className="appr-hl-emphasis">is change.</span>
        </h2>
        <p className="appr-subhead">
          Collegiate sports will continue to evolve.
        </p>
      </div>

      {/* ── Main contrast panel ── */}
      <div className="appr-contrast reveal">

        {/* Left: dark / moving landscape */}
        <div className="appr-left">
          <span className="appr-panel-label appr-panel-label--dark">The Landscape Moves</span>

          <ul className="appr-shifts">
            {shifts.map((s, i) => (
              <li className="appr-shift-item" key={i}>
                <span className="appr-shift-dot" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <div className="appr-key-line">
            <p>What does not slow down is the pace of decision making.</p>
          </div>
        </div>

        {/* Divider spine */}
        <div className="appr-spine" aria-hidden="true">
          <div className="appr-spine-line" />
          <div className="appr-spine-icon">→</div>
          <div className="appr-spine-line" />
        </div>

        {/* Right: light / stable foundation */}
        <div className="appr-right">
          <span className="appr-panel-label appr-panel-label--light">Your Foundation Holds</span>

          <div className="appr-reactive">
            <p className="appr-reactive-bad">Programs that react to every change from scratch will continue to feel behind.</p>
            <div className="appr-reactive-vs" aria-hidden="true">vs</div>
            <p className="appr-reactive-good">Programs that build a stable foundation can adapt without losing clarity.</p>
          </div>
        </div>

      </div>

      {/* ── Four anchor tiles ── */}
      <div className="appr-anchors reveal">
        {anchors.map((a, i) => (
          <div className="appr-anchor" key={i}>
            <span className="appr-anchor-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="appr-anchor-label">{a.label}</span>
            <p className="appr-anchor-body">{a.body}</p>
          </div>
        ))}
      </div>

      {/* ── Closing statement ── */}
      <div className="appr-close reveal">
        <p className="appr-close-brand">PlayerScope<sup style={{ fontSize: '0.35em', verticalAlign: 'super', position: 'relative', top: '-0.5em' }}>TM</sup> is designed for that reality.</p>
        <p className="appr-close-sub">
          As the landscape evolves, your program keeps its footing while everything around it moves.
        </p>
      </div>

    </section>
  );
}