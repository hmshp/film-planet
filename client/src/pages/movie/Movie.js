import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { asyncGetPostById, asyncDeletePost } from "../../redux/postSlice";

const Wrapper = styled.article`
  font-family: "Hahmlet", serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  order: 2;
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Review = styled.h3`
  order: 3;
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
`;

const Comment = styled.p`
  order: 4;
  background: white;
  color: #1b2831;
  width: 50%;
  min-height: 150px;
  padding: 20px;
  border-radius: 2px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  margin-bottom: 1.8rem;
  margin-top: -3rem; /*헤더와 버튼 사이 간격이 너무 넓어서 음수 마진 주었음*/
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  /* display: block;하면 order 속성 안 먹혀서 다른 걸로 바꿨다 (기본설정을 img - display: block으로 해 놓아서) */
  display: inline-block;
  order: 1;
  margin-bottom: 1rem;
`;

const BackCTAWrapper = styled.div``;

const PostControl = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  color: #1b2831;
`;

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
  }, []);

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
