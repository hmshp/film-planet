import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLogin } from "../../redux/authSlice";
import { Wrapper, Title, Form, FormItem, Input, SubmitButton, AsideButton, Aside } from './User.styled';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncLogin(formData)).then(() => {
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="username">아이디</label>
          <Input
            onChange={handleChange}
            required
            minLength="4"
            type="text"
            name="username"
            id="username"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="password">비밀번호</label>
          <Input
            onChange={handleChange}
            required
            minLength="4"
            type="password"
            name="password"
            id="password"
          />
        </FormItem>
        <SubmitButton>로그인</SubmitButton>
      </Form>
      <Aside>
        <p>계정이 없으신가요?</p>
        <Link to="/signup">
          <AsideButton>가입하기</AsideButton>
        </Link>
      </Aside>
    </Wrapper>
  );
};

export default Login;
