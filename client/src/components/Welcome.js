import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";
import planet from "../assets/planet.png";

// const tempBorderStyle = {
//   border: "3px solid pink",
//   padding: "24px",
// };

const fadeIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-family: "Hahmlet", serif;
  text-align: center;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.25;
  letter-spacing: -1.2px;
  margin: 0;
  color: white;
  animation: ${fadeIn} 2000ms;
  animation-delay: 500ms;
`;

const Subtitle = styled.h3`
  margin-top: 0;
  color: white;
  font-family: "Hahmlet", serif;
  text-align: center;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.25;
  letter-spacing: -0.5px;
  margin-bottom: 18px;
`;

const WelcomeArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Preview = styled.article`
  display: flex;
  justify-content: center;
`;

const StartButton = styled.button`
  border: white;
  padding: 24px 80px;
  font-size: 1.2rem;
  /* background: #f1edc7; */
  background: linear-gradient(202.17deg, #1400ff 8.58%, #ad00ff 91.42%);
  color: white;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 600ms;
  font-family: "Hahmlet", serif;
  cursor: pointer;
  &:hover {
    background: linear-gradient(202.17deg, #1400ffc4 8.58%, #ad00ffcf 91.42%);
    /* transform: translateY(-10px); */
  }
`;

const PlanetImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  transition: transform 600ms;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Welcome = () => {
  return (
    <>
      <WelcomeArticle>
        <Title>나만의 행성,</Title>
        <Subtitle>
          나만의 영상 보관함에
          <br />
          추억을 담아 보세요
        </Subtitle>
        <Link to="/login">
          <StartButton>지금 시작하기</StartButton>
        </Link>
      </WelcomeArticle>
      <Preview>
        <PlanetImage src={planet} />
      </Preview>
    </>
  );
};

export default Welcome;
