import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import MyHome from "../../components/MyHome/MyHome";
import Welcome from "../../components/Welcome/Welcome";
import { asyncCheckValidLogin } from "../../redux/authSlice";
import { getToken } from '../../utils/token';

const Home = () => {
  const dispatch = useDispatch();
  const isLoginValid = useSelector((state) => state.user.isLoginValid);
  const status = useSelector((state) => state.user.status);
  const token = getToken();
  const navigate = useNavigate();

  console.log(isLoginValid);

  useEffect(() => {
    // 로그인 되어 있는지 & 유효한 사용자인지(토큰 만료되지 않았는지) 체크
    // token 있을 때만 dispatch 하는 이유는 비회원일 때 401 에러 발생하는 것 방지하기 위해
    token && dispatch(asyncCheckValidLogin());
  }, [isLoginValid]);

  let componentToBeRendered;

  // 로그인 했는지
  if (token) {
    // 위에서 보낸 asyncCheckValidLogin 요청 처리가 완료됐는지
    if (status === "success") {
      // 요청 처리 결과 로그인 유효 or 유효X 중 어떤 것으로 판명났는지
      componentToBeRendered = isLoginValid ? <MyHome /> : <Welcome />;
    } 
  } else {
    // 비회원일 때
    componentToBeRendered = <Welcome />
  }

  return componentToBeRendered;
};

export default Home;
