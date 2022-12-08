import React from "react";
import { Link } from "react-router-dom";
import planet from "../../assets/planet.png";
import { Wrapper, Title, Subtitle, WelcomeArticle, Preview, StartButton, PlanetImage } from './Welcome.styled';

const Welcome = () => {
  return (
    <Wrapper>
      <WelcomeArticle>
        <Title>
          나만의 기록 저장소
        </Title>
        <Subtitle>
          좋아하는 <span>영상</span>에 대한 감상을 
          <br />
          나만의 공간에 기록해 보세요.
        </Subtitle>
        <Link to="/login">
          <StartButton>지금 시작하기</StartButton>
        </Link>
      </WelcomeArticle>
      <Preview>
        <PlanetImage src={planet} />
      </Preview>
    </Wrapper>
  );
};

export default Welcome;
