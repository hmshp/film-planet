import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Media from '../../styles/Media';

export const Wrapper = styled.div`
  font-family: "Hahmlet", serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const TitleSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

export const PostListSection = styled.article`

`;

export const PlanetImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  cursor: pointer;
`;

export const Greeting = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
`;

export const AddButton = styled.button`
  background: var(--primary-color-gradient);
  color: var(--primary-color-light);
  border: none;
  width: 75px;
  border-radius: 20px;
  /* + 기호 위아래 간격이 달라서 패딩 수작업으로 맞춤 */
  padding: 6px 6px 8px 6px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: var(--primary-color-gradient-secondary);
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2px;
`;

export const PostListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  list-style-type: none;
  padding-left: 0;

  ${Media.upToSmallLaptop`
    gap: 3rem;
  `}

  ${Media.upToTablet`
    grid-template-columns: repeat(2,1fr);
  `}

  ${Media.upToPhone`
    grid-template-columns: 1fr;
  `}
`;

export const Post = styled.li``;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--primary-color-light);
  text-decoration: none;
  transition: 300ms ease;
  &:hover {
    color: var(--secondary-color);
  }
`;

export const GuideText = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: var(--primary-color-light);
`;
