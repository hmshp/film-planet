import { css } from 'styled-components';

const BREAKPOINTS = {
  upToLarge: { width: 1920 },
  upToDesktop: { width: 1600 },
  upToLaptop: { width: 1366 },
  upToSmallLaptop: { width: 992 },
  upToTablet: { width: 768 },
  upToPhone: { width: 576 },
};

// 각 breakpoint 별로 미디어 쿼리 생성
const Media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label].width}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default Media;
