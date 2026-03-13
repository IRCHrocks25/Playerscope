import scopeIcon from 'figma:asset/478897b314f6694efbc0512ff37c1cd3d0a3f1c5.png';

interface CtaButtonProps {
  href?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'outline';
}

export function CtaButton({
  href = '#contact',
  label = 'Request a Private Demo',
  className = '',
  style,
  variant = 'primary',
}: CtaButtonProps) {
  const baseClass = variant === 'outline' ? 'btn-cta btn-cta--outline' : 'btn-cta btn-cta--primary';
  return (
    <a href={href} className={`${baseClass} ${className}`.trim()} style={style}>
      <img
        src={scopeIcon}
        alt=""
        className="btn-scope-icon"
        aria-hidden="true"
      />
      {label}
    </a>
  );
}