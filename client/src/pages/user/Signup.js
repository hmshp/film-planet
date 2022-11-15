import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <h1>회원가입</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <div>
            <label htmlFor="username">아이디: </label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">비밀번호:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="name">이름:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">이메일:</label>
            <input type="email" name="email" id="email" />
          </div>
          <button>회원가입</button>
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
