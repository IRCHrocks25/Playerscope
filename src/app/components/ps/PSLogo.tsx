import svgPaths from "../../../imports/svg-hmbx8l19ch";

interface PSLogoProps {
  /** Rendered height in px; width scales automatically from the 1790.65×200 viewBox */
  height?: number;
  className?: string;
  /** Unique id suffix to avoid duplicate clipPath ids when logo appears multiple times */
  uid?: string;
}

export function PSLogo({ height = 36, className = "", uid = "a" }: PSLogoProps) {
  const clipId = `ps-logo-clip-${uid}`;
  const width = (1790.65 / 200) * height;

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 1790.65 200"
      width={width}
      height={height}
      style={{ display: "block", flexShrink: 0 }}
    >
      <g clipPath={`url(#${clipId})`}>
        {/* Blue letterform accents */}
        <g>
          <path d={svgPaths.p3dfa2b00} fill="#1A89DD" />
          <path d={svgPaths.p1e6ad8f0} fill="#1A89DD" />
          <path d={svgPaths.p1d38e0a0} fill="#1A89DD" />
          <path d={svgPaths.p12f9b380} fill="#1A89DD" />
          <path d={svgPaths.p3cadd780} fill="#1A89DD" />
        </g>
        {/* White COPE letters */}
        <g>
          <path d={svgPaths.p288bb500} fill="white" />
          <path d={svgPaths.p3bded900} fill="white" />
          <path d={svgPaths.p1a55fb50} fill="white" />
          <path d={svgPaths.p30cc3000} fill="white" />
        </g>
        {/* White PLAYR letters */}
        <g>
          <path d={svgPaths.p17e69d80} fill="white" />
          <path d={svgPaths.p302b9700} fill="white" />
          <path d={svgPaths.p15422d70} fill="white" />
          <path d={svgPaths.p80fef00} fill="white" />
        </g>
        <path d={svgPaths.p30b40300} fill="#1A89DD" />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect fill="white" height="200" width="1790.65" />
        </clipPath>
      </defs>
    </svg>
  );
}
