import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { asyncSignup } from '../../redux/authSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSignup(formData))
  };

  return (
    <>
      <main>
        <h1>회원가입</h1>
        <form>
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
          <div>
            <label htmlFor="name">이름:</label>
            <input onChange={handleChange} type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">이메일:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <button onClick={handleSubmit}>회원가입</button>
        </form>
      </main>
      <aside>
        <p>이미 계정이 있으신가요?</p>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </aside>
    </>
  );
};

export default Signup;
