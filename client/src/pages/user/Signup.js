import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { asyncSignup } from "../../redux/authSlice";
import { checkUsernameAvailibility } from "../../service/auth";
import { Wrapper, Title, Form, FormItem, Input, SubmitButton, AsideButton, Aside } from './User.styled';

const UserIdAvailability = styled.p`
  color: var(--secondary-color);
`;

const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 50%;
  }
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

  const [isUsernameAvailable, setIsUsernameAvailable] = useState();

  console.log(formData);
  console.log(isUsernameAvailable);

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
    if (e.target.name === "username") {
      checkUsernameAvailibility(e.target.value).then((availability) => {
        setIsUsernameAvailable(availability);
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 아이디 중복 메시지가 화면에 떠있긴 하지만, 혹시라도 그냥 클릭 눌러서 409 에러 발생하는 것 방지하기 위해 isUsernameAvailable가 false면 회원가입 요청을 아예 안 보내도록 아래 코드 작성하였음
    if (!isUsernameAvailable) {
      return;
    }
    dispatch(asyncSignup(formData)).then((data) => {
      console.log(data);
      toast.success(<h3>가입이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 5000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
      // navigate("/");
    });
  };

  return (
    <Wrapper>
      <StyledContainer />
      <Title>회원가입</Title>
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
          <UserIdAvailability>
            {!isUsernameAvailable &&
              typeof isUsernameAvailable !== "undefined" &&
              "이미 사용 중인 아이디입니다."}
          </UserIdAvailability>
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
        <SubmitButton>회원가입</SubmitButton>
      </Form>
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
