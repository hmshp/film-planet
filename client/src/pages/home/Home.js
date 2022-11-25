import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import MyHome from '../../components/MyHome';
import Welcome from '../../components/Welcome';
import { userSlice } from '../../redux/authSlice';
import { asyncGetPosts } from '../../redux/postSlice';
import { getPosts } from '../../service/posts';
import { getToken } from '../../utils/token';

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const Home = () => {
  const dispatch = useDispatch();
  
  // redux에 토큰 있는지 확인 (= 로그인했는지)
  // 로그인했다면 localStorage에 토큰이 저장되어 있을 테고, 그러면 useEffect에서 그 토큰을 가져와 redux에 저장했을 테니까
  const user = useSelector((state) => {
    return state.user;
  })
  const isLoggedIn = () => {
    return user.token? true : false;
  }

  const token = getToken();
  useEffect(() => {
    // localStorage에 있는 토큰 redux에 저장
    dispatch(userSlice.actions.getToken(token));
  }, []);


  return (
    isLoggedIn() ? <MyHome /> : <Welcome />
  );
};

export default Home;
