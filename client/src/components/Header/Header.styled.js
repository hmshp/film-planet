import styled from "styled-components/macro";
import Media from '../../styles/Media';

export const StyledHeader = styled.header`
  width: 95%;
  margin: 0 auto;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  background: var(--primary-color-dark);
  height: 90px;
  overflow: hidden;
  border-bottom: 1px solid #e6e3f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  font-family: "Italiana", serif;
`;

export const LogoLink = styled.a`
  text-decoration: none;
`;

export const Logo = styled.h1`
  color: var(--primary-color-light);
  cursor: pointer;

  ${Media.upToPhone`
    font-size: 1.8rem;
  `}

  ${Media.upToPhone`
    font-size: 1.4rem;
  `}
`;

export const UserButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Hahmlet", serif;
  cursor: pointer;
  color: var(--primary-color-light);
  &:hover {
    color: var(--secondary-color);
  }

  ${Media.upToPhone`
    padding: 4px 8px;
    font-size: 1rem;
  `}
`;
