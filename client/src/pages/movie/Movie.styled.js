import styled from "styled-components/macro";
import Media from "../../styles/Media";

export const Wrapper = styled.article`
  font-family: "Hahmlet", serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  order: 2;
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-align: center;

  ${Media.upToTablet`
    font-size: 2rem;
    word-break: keep-all;
  `}
`;

export const Review = styled.h3`
  order: 3;
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;

  ${Media.upToTablet`
    font-size: 1.4rem;
  `}
`;

export const Comment = styled.p`
  order: 4;
  background: var(--primary-color-light);
  color: var(--primary-color-dark);
  width: 50%;
  min-height: 150px;
  padding: 20px;
  border-radius: 2px;

  ${Media.upToSmallLaptop`
    width: 70%;
  `}

  ${Media.upToPhone`
    width: 100%;
  `}
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  margin-bottom: 1.8rem;
  margin-top: -3rem; /*헤더와 버튼 사이 간격이 너무 넓어서 음수 마진 주었음*/
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  /* display: block;하면 order 속성 안 먹혀서 다른 걸로 바꿨다 (기본설정을 img - display: block으로 해 놓아서) */
  display: inline-block;
  order: 1;
  margin-bottom: 1rem;

  ${Media.upToTablet`
    width: 250px;
    height: 250px;
  `}

  ${Media.upToPhone`
    width: 200px;
    height: 200px;
  `}
`;

export const BackCTAWrapper = styled.div``;

export const PostControl = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  color: var(--primary-color-dark);
`;
