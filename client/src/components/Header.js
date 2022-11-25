import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const tempLogoStyles = {
  width: "140px",
  height: "140px",
};

const Header = () => {
  const location = useLocation();
  const isMoviePage = () => {
    return location.pathname.startsWith("/movies");
  };
  return (
    <header>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
      {/*   // Note: the reason why the link enclosing the img logo is a direct <a> and not a <Link> is because we want clicking the logo to refresh the app completely (i.e. load new cocktails, and (I think?) clear state) - i.e. as if the user clicks the refresh button in the browser.  Therefore <a> will do this instead of just changing the url with <Link>
       */}
      {/* 로고 클릭 시 로그인 안 했다면 Home으로, 로그인 했다면 MyHome으로 이동 */}
      <a href="/">
        <img src={logo} alt="영화 저장소 로고" style={tempLogoStyles} />
      </a>
      {isMoviePage() && (
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
