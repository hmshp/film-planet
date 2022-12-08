import React from "react";
import styled, { keyframes } from "styled-components/macro";

const float = keyframes`
  from {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(.32,.21,.56,1.06);
  }
  to {
    transform: translateY(10%) scale(1.12);
  }
`;

const WaveWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 90px;
  animation: ${float} 2000ms infinite alternate;
`;

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;

const Wave = () => {
  return (
    <WaveWrapper>
      <WaveSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        height="74"
        width="1440"
        preserveAspectRatio="none"
      >
        <path
          fill="#0A7B88"
          fillOpacity="1"
          d="M0,160L34.3,170.7C68.6,181,137,203,206,186.7C274.3,171,343,117,411,90.7C480,64,549,64,617,101.3C685.7,139,754,213,823,245.3C891.4,277,960,267,1029,224C1097.1,181,1166,107,1234,74.7C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </WaveSvg>
    </WaveWrapper>
  );
};

export default Wave;
