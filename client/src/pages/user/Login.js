import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <h1>로그인</h1>
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
          <button>로그인</button>
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
