import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyHome from "../../components/MyHome";
import Welcome from "../../components/Welcome";
import { asyncCheckValidLogin } from "../../redux/authSlice";
import { isValidLogin } from "../../utils/loginCheck";

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    // 로그인 되어 있는지 & 유효한 사용자인지(토큰 만료되지 않았는지) 체크
    dispatch(asyncCheckValidLogin());
  }, [username]);

  console.log(isValidLogin(username));

  return isValidLogin(username) ? <MyHome /> : <Welcome />;
};

export default Home;
