import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../service/auth";
import { getToken } from "../../utils/token";
import { asyncCheckValidLogin } from "../../redux/authSlice";
import { StyledHeader,LogoLink, Logo, UserButtonWrapper, Button } from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const token = getToken();
  const isLoginValid = useSelector((state) => {
    return state.user.isLoginValid;
  });
  const status = useSelector((state) => {
    return state.user.status;
  });

  useEffect(() => {
    // 로그인 되어 있는지 & 유효한 사용자인지(토큰 만료되지 않았는지) 체크
    token && dispatch(asyncCheckValidLogin());
  }, [isLoginValid, token, dispatch]);

  const handleLogout = () => {
    logout();
  };

  let buttonsToBeRendered;

  // 로그인 했는지
  if (token) {
    // 위에서 보낸 asyncCheckValidLogin 요청 처리가 완료됐는지
    if (status === "success") {
      // 요청 처리 결과 로그인 유효 or 유효X 중 어떤 것으로 판명났는지
      buttonsToBeRendered = isLoginValid ? (
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
