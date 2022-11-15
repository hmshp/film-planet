import React from "react";
import { Link } from "react-router-dom";

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const Home = () => {
  return (
    <main style={tempBorderStyle}>
      <article>
        <h1>나만의 영화 저장소를 만들어 보세요.</h1>
        <Link to="/signup">
          <button>지금 시작하기</button>
        </Link>
      </article>
    </main>
  );
};

export default Home;
