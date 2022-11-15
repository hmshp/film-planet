import React from "react";
import { Link } from "react-router-dom";

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const tempImgStyle = {
  width: "150px",
  height: "250px",
};

const Movie = () => {
  return (
    <main style={tempBorderStyle}>
      <article>
        <div>
          <Link to="/edit-movie/1">
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </div>
        <h1>리틀 포레스트</h1>
        <h2>지칠 때마다 내 마음을 달래주는 영화</h2>
        <img
          src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180116_52%2F1516069056006yS0CC_JPEG%2Fmovie_image.jpg"
          style={tempImgStyle}
        />
        <p>
          엔딩 장면에서 혜원의 엄마가 다시 돌아온 걸까? 다음번에는 혜원이 엄마의
          시점에서 영화를 한 번 더 보고 싶다.
        </p>
      </article>
    </main>
  );
};

export default Movie;
