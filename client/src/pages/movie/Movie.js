import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { asyncGetPostById } from '../../redux/postSlice';
import { getPostById } from '../../service/posts';

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const tempImgStyle = {
  width: "150px",
  height: "250px",
};

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => {
    return state.post.selectedPost;
  })

  const DEFAULT_URL = "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180116_52%2F1516069056006yS0CC_JPEG%2Fmovie_image.jpg";
  
  useEffect(() => {
    dispatch(asyncGetPostById(id));
  }, [])

  return (
    <main style={tempBorderStyle}>
      <article>
        <div>
          <Link to={`/edit-movie/${post.id}`}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </div>
        <h1>{post.title}</h1>
        <h2>{post.review}</h2>
        <img
          src={post.url || DEFAULT_URL}
          style={tempImgStyle}
        />
        <p>
          {post.comment}
        </p>
      </article>
    </main>
  );
};

export default Movie;
