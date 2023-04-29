type ResponsiveCSS = (
  property: string,
  val: string | undefined,
  valSp?: string | undefined,
  bp?: number
) => string;

const breakpoint: number = 767;

export const responsiveCSS: ResponsiveCSS = (
  property: string,
  val: string | undefined,
  valSp?: string | undefined,
  bp: number = breakpoint
) =>
  `${property}: ${val}; ${
    valSp ? `@media (max-width: ${bp}px) {${property}: ${valSp};}` : ""
  }`;
