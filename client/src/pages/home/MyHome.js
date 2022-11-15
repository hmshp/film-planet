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

const MyHome = () => {
  return (
    <main style={tempBorderStyle}>
      <article>
        <h1>혜미</h1>
        <h2>MY LITTLE FOREST</h2>
        <Link to="/add-movie">
          <button>+</button>
        </Link>
      </article>
      <article>
        {/* 영화 목록 코너 */}
        <ul>
          <li>
            <Link to="/movies/1">
              <img
                src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180116_52%2F1516069056006yS0CC_JPEG%2Fmovie_image.jpg"
                style={tempImgStyle}
                alt="리틀 포레스트"
              />
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default MyHome;
