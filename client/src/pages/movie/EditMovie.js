import React from "react";
import MovieForm from "../../components/MovieForm";

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

const movie = {
  title: "리틀 포레스트",
  review: "지칠 때마다 내 마음을 달래주는 영화",
  url: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180116_52%2F1516069056006yS0CC_JPEG%2Fmovie_image.jpg",
  comment:
    "엔딩 장면에서 혜원의 엄마가 다시 돌아온 걸까? 다음번에는 혜원이 엄마의시점에서 영화를 한 번 더 보고 싶다.",
};

const EditMovie = () => {
  return (
    <main style={tempBorderStyle}>
      <MovieForm movie={movie} />
    </main>
  );
};

export default EditMovie;
