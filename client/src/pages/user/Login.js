import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { asyncLogin } from '../../redux/authSlice';
import login from "../../service/auth";

const Login = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => {
    return state.user.status
  })

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <main>
        <h1>로그인</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(asyncLogin(formData))
          }}
        >
          <div>
            <label htmlFor="username">아이디: </label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호:</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button>로그인</button>
          <p><b>{status}</b></p>
        </form>
      </main>
      <aside>
        <p>계정이 없으신가요?</p>
        <Link to="/signup">
          <button>가입하기</button>
        </Link>
      </aside>
    </>
  );
};

export default Login;
