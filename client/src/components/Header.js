import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../service/auth";
import { isLoggedIn } from "../utils/loginCheck";
import Wave from "./Wave";

const tempLogoStyles = {
  width: "140px",
  height: "140px",
};

const StyledHeader = styled.header`
  /* background: #1b2831; */
  position: relative;
  height: 90px;
  margin-left: 24px;
  margin-right: 24px;
  overflow: hidden;
  border-bottom: 1px solid #e6e3f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  font-family: "Italiana", serif;
`;

const Logo = styled.h1`
  color: white;
`;

const UserButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const LoginButton = styled.button`
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
  const user = useSelector((state) => {
    return state.user;
  });

  const isMoviePage = () => {
    return location.pathname.startsWith("/movies");
  };

  const handleLogout = () => {
    logout();
  };

  // 파도 scale 효과로 커질 때 x축 오버플로 방지하기 위해 부모인 Header에 overflow:hidden 줬다.
  return (
    <StyledHeader>
      <Logo>FilmPlanet</Logo>

      {isLoggedIn(user) ? (
        // 새로고침하기 위해 a 사용
        <UserButtonWrapper>
          <a href="/">
            <button onClick={handleLogout}>LOGOUT</button>
          </a>
        </UserButtonWrapper>
      ) : (
        <UserButtonWrapper>
          <Link to="/login">
            <LoginButton>로그인</LoginButton>
          </Link>
          <Link to="/signup">
            <LoginButton>회원가입</LoginButton>
          </Link>
        </UserButtonWrapper>
      )}

      {/*   // Note: the reason why the link enclosing the img logo is a direct <a> and not a <Link> is because we want clicking the logo to refresh the app completely (i.e. load new cocktails, and (I think?) clear state) - i.e. as if the user clicks the refresh button in the browser.  Therefore <a> will do this instead of just changing the url with <Link>
       */}
      {isMoviePage() && (
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      )}
      {/* <Wave /> */}
    </StyledHeader>
  );
};

export default Header;
