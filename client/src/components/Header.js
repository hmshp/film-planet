import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../service/auth";
import { isValidLogin } from "../utils/loginCheck.js";
import { getToken } from "../utils/token";
import { asyncCheckValidLogin } from "../redux/authSlice";

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
`;

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
  font-family: "Hahmlet", serif;
  cursor: pointer;
  color: white;
  &:hover {
    color: #ede6f1;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const token = getToken();
  const username = useSelector((state) => {
    return state.user.username;
  });
  const status = useSelector((state) => {
    return state.user.status;
  });

  useEffect(() => {
    // 로그인 되어 있는지 & 유효한 사용자인지(토큰 만료되지 않았는지) 체크
    token && dispatch(asyncCheckValidLogin());
  }, [username]);

  const handleLogout = () => {
    logout();
  };

  let buttonsToBeRendered;

  // 로그인 했는지
  if (token) {
    // 위에서 보낸 asyncCheckValidLogin 요청 처리가 완료됐는지
    if (status === "success") {
      // 요청 처리 결과 로그인 유효 or 유효X 중 어떤 것으로 판명났는지
      buttonsToBeRendered = isValidLogin(username) && (
        <UserButtonWrapper>
          <a href="/">
            <Button onClick={handleLogout}>로그아웃</Button>
          </a>
        </UserButtonWrapper>
      );
    }
  } else {
    // 비회원일 때
    buttonsToBeRendered = (
      <UserButtonWrapper>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </UserButtonWrapper>
    );
  }

  return (
    <StyledHeader>
      <LogoLink href="/">
        <Logo>FilmPlanet</Logo>
      </LogoLink>
      {buttonsToBeRendered}
    </StyledHeader>
  );
};

export default Header;
