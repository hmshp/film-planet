import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetPosts } from "../redux/postSlice";
import planet from "../assets/planet.png";

const Wrapper = styled.div`
  font-family: "Hahmlet", serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const TitleSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

const PostListSection = styled.article``;

const PlanetImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  cursor: pointer;
`;

const Greeting = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
`;

const AddButton = styled.button`
  background: linear-gradient(202.17deg, #1400ff 8.58%, #ad00ff 91.42%);
  color: white;
  border: none;
  width: 75px;
  border-radius: 20px;
  /* + 기호 위아래 간격이 달라서 패딩 수작업으로 맞춤 */
  padding: 6px 6px 8px 6px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: linear-gradient(202.17deg, #1400ffc4 8.58%, #ad00ffcf 91.42%);
  }
`;

const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2px;
`;

const PostListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  list-style-type: none;
  padding-left: 0;
`;

const Post = styled.li`
  
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: white;
  text-decoration: none;
  transition: 300ms ease;
  &:hover {
    color: #c89efc;
  }
`;

const MyHome = () => {
  const DEFAULT_URL =
    "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsYXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  const dispatch = useDispatch();

  const username = useSelector((state) => {
    return state.user.username;
  });

  const status = useSelector((state) => {
    return state.post.status;
  });

  const posts = useSelector((state) => {
    return state.post.posts.map((post) => (
      <Post key={post.id}>
        <StyledLink to={`/movies/${post.id}`}>
          <Thumbnail src={post.url || DEFAULT_URL} alt={post.title} />
          {post.title}
        </StyledLink>
      </Post>
    ));
  });

  useEffect(() => {
    // MyHome 렌더링하면 바로 (내 userId에 맞는) posts 가져와서 redux에 저장
    dispatch(asyncGetPosts());
  }, []);

  return (
    <Wrapper>
      <TitleSection>
        {/* <PlanetImage src={planet} /> */}
        <Greeting>환영합니다, {username} 님</Greeting>
        <Link to="/add-movie">
          <AddButton>+</AddButton>
        </Link>
      </TitleSection>
      <PostListSection>
        {/* 영화 목록 코너 */}
        {/* <h3>{status}</h3> */}
        <PostListWrapper>{posts}</PostListWrapper>
      </PostListSection>
    </Wrapper>
  );
};

export default MyHome;
