import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { asyncLogin } from "../../redux/authSlice";

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

const LoginForm = styled.form`
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector((state) => {
    return state.user.status;
  });

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
      <LoginForm onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="username">아이디</label>
          <Input
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="password">비밀번호</label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
          />
        </FormItem>
        <SubmitButton>로그인</SubmitButton>
        <p>
          <b>{status}</b>
        </p>
      </LoginForm>
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
