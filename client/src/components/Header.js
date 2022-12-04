import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../service/auth";
import { isValidLogin } from "../utils/loginCheck.js"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1; /* 행성 이미지 호버할 때 이미지가 헤더를 덮어써버려서 */
  width: 95%;
  margin: 0 auto;
  /* max-width: 100%; */
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  background: #1b2831;
  height: 90px;
  overflow: hidden;
  border-bottom: 1px solid #e6e3f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  font-family: "Italiana", serif;
`;

const LogoLink = styled.a`
  text-decoration: none;
`

const Logo = styled.h1`
  color: white;
  cursor: pointer;
`;

const UserButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Hahmlet",serif;
  cursor: pointer;
  color: white;
  &:hover {
    color: #ede6f1;
  }
`;

const Header = () => {
  const location = useLocation();
  const username = useSelector((state) => {
    return state.user.username;
  });

  const handleLogout = () => {
    logout();
  };

  // 파도 scale 효과로 커질 때 x축 오버플로 방지하기 위해 부모인 Header에 overflow:hidden 줬다.
  return (
    <StyledHeader>
      <LogoLink href="/">
        <Logo>FilmPlanet</Logo>
      </LogoLink>
      {isValidLogin(username) ? (
        // 새로고침하기 위해 a 사용
        <UserButtonWrapper>
          <a href="/">
            <Button onClick={handleLogout}>로그아웃</Button>
          </a>
        </UserButtonWrapper>
      ) : (
        <UserButtonWrapper>
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </UserButtonWrapper>
      )}
    </StyledHeader>
  );
};

export default Header;
