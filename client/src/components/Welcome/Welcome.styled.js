import styled, { keyframes } from "styled-components/macro";
import Media from "../../styles/Media";

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

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Media.upToTablet`
    flex-direction: column;
    gap: 2rem;
  `}
`;

export const Title = styled.h2`
  font-family: "Hahmlet", serif;
  text-align: center;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.25;
  letter-spacing: -1.2px;
  margin-bottom: 0.8rem;
  color: var(--primary-color-light);
  animation: ${fadeIn} 2000ms;
  animation-delay: 500ms;

  ${Media.upToSmallLaptop`
    font-size: 2.5rem;
  `}

  ${Media.upToPhone`
    font-size: 2rem;
  `}
`;

export const Subtitle = styled.h3`
  margin-top: 0;
  color: var(--primary-color-light);
  font-family: "Hahmlet", serif;
  text-align: center;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.25;
  letter-spacing: -0.5px;
  margin-bottom: 18px;

  ${Media.upToSmallLaptop`
    font-size: 1.4rem;
  `}

  ${Media.upToPhone`
    font-size: 1.2rem;
  `}
`;

export const WelcomeArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${Media.upToTablet`
    order: 1;
  `}
`;

export const Preview = styled.article`
  display: flex;
  justify-content: center;
`;

export const StartButton = styled.button`
  border: white;
  padding: 24px 80px;
  font-size: 1.2rem;
  background: var(--primary-color-gradient);
  color: var(--primary-color-light);
  border-radius: 6px;
  font-weight: 600;
  transition: transform 600ms;
  font-family: "Hahmlet", serif;
  cursor: pointer;
  &:hover {
    background: var(--primary-color-gradient-secondary);
  }

  ${Media.upToPhone`
    font-size: 1rem;
    padding: 12px 60px;
  `}
`;

export const PlanetImage = styled.img`
  width: 400px;
  height: 400px;

  border-radius: 50%;
  transition: transform 600ms;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }

  ${Media.upToDesktop`
    width: 300px;
    height: 300px;
  `}

  ${Media.upToSmallLaptop`
    width: 250px;
    height: 250px;
  `}

  ${Media.upToTablet`
    width: 200px;
    height: 200px;
  `}
`;
