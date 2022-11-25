import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSlice } from "../redux/authSlice";
import { asyncGetPosts, postSlice } from "../redux/postSlice";
import { getToken } from "../utils/token";

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const tempImgStyle = {
  width: "150px",
  height: "250px",
};

const MyHome = () => {
  const DEFAULT_URL = "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180116_52%2F1516069056006yS0CC_JPEG%2Fmovie_image.jpg";

  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.post.status;
  });

  const posts = useSelector((state) => {
    return state.post.posts.map((post) => (
      <li key={post.id} >
        <Link to={`/movies/${post.id}`}>
          {post.title}
          {/* <img
            src={DEFAULT_URL}
            style={tempImgStyle}
            alt={post.title}
          /> */}
        </Link>
      </li>
    ));
  });


  useEffect(() => {
    // MyHome 렌더링하면 바로 (내 userId에 맞는) posts 가져와서 redux에 저장
    dispatch(asyncGetPosts());
  }, []);

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
        <h3>{status}</h3>
        <ul>
          {posts}
        </ul>
      </article>
    </main>
  );
};

export default MyHome;
