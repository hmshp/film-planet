import React, { useEffect } from "react";
import { Wrapper, Title, Review, Comment, Navigation, Image, BackCTAWrapper, PostControl, Button } from "./Movie.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { asyncGetPostById, asyncDeletePost } from "../../redux/postSlice";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const DEFAULT_URL =
    "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsYXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  const dispatch = useDispatch();
  const post = useSelector((state) => {
    return state.post.selectedPost;
  });

  const handleDelete = (e) => {
    dispatch(asyncDeletePost(id)).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    dispatch(asyncGetPostById(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <Navigation>
        <BackCTAWrapper>
          <Link to="/">
            <Button>뒤로가기</Button>
          </Link>
        </BackCTAWrapper>
        <PostControl>
          <Link to={`/edit-movie/${post.id}`}>
            <Button>수정</Button>
          </Link>
          <Button onClick={handleDelete}>삭제</Button>
        </PostControl>
      </Navigation>
      <Title>{post.title}</Title>
      <Review>{post.review}</Review>
      <Image src={post.url || DEFAULT_URL} />
      <Comment>{post.comment}</Comment>
    </Wrapper>
  );
};

export default Movie;
