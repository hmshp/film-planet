import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { asyncSignup } from "../../redux/authSlice";

const Wrapper = styled.section`
  width: 35%;
  font-size: 1.1rem;
  font-family: "Hahmlet", serif;
  font-weight: 300;
`;

const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.8rem;
  font-size: 2.5rem;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 2.8rem;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 8px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(202.17deg, #1400ff 8.58%, #ad00ff 91.42%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(202.17deg, #1400ffc4 8.58%, #ad00ffcf 91.42%);
  }
`;

const AsideButton = styled.button`
  width: 150px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  padding: 6px;
  background: linear-gradient(202.17deg, #2316bc 8.58%, #62008f 91.42%);
  color: white;
  &:hover {
    background: linear-gradient(202.17deg, #1400ffc4 8.58%, #ad00ffcf 91.42%);
  }
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSignup(formData)).then(() => {
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SignupForm>
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
        <FormItem>
          <label htmlFor="name">이름</label>
          <Input
            onChange={handleChange}
            required
            type="text"
            name="name"
            id="name"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="email">이메일</label>
          <Input
            onChange={handleChange}
            required
            type="email"
            name="email"
            id="email"
          />
        </FormItem>
        <SubmitButton onClick={handleSubmit}>회원가입</SubmitButton>
      </SignupForm>
      <Aside>
        <p>이미 계정이 있으신가요?</p>
        <Link to="/login">
          <AsideButton>로그인</AsideButton>
        </Link>
      </Aside>
    </Wrapper>
  );
};

export default Signup;
