import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieForm = ({ movie }) => {
  const location = useLocation();
  const isAddForm = () => {
    return location.pathname === "/add-movie";
  };
  return (
    <form>
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" value={movie?.title} />
      </div>
      <div>
        <label htmlFor="review">한줄평</label>
        <input type="text" id="review" value={movie?.review} />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input type="url" id="url" value={movie?.url} />
      </div>
      <div>
        <label htmlFor="comment">코멘트</label>
        <textarea value={movie?.comment} id="comment"></textarea>
      </div>
      <Link to={isAddForm() ? "/:username" : "/movies/1"}>
        <button>취소</button>
      </Link>
      <button>{isAddForm() ? "등록" : "수정"}</button>
    </form>
  );
};

export default MovieForm;
