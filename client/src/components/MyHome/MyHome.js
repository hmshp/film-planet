import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncGetPosts } from '../../redux/postSlice';
import { Greeting, GuideText, PostListSection, PostListWrapper, TitleSection, Wrapper, StyledLink, Thumbnail, AddButton } from './MyHome.styled';

const MyHome = () => {
  const DEFAULT_URL =
    "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsYXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  const dispatch = useDispatch();

  const username = useSelector((state) => {
    return state.user.username;
  });

  const posts = useSelector((state) => {
    return state.post.posts.map((post) => (
      <li key={post.id}>
        <StyledLink to={`/movies/${post.id}`}>
          <Thumbnail src={post.url || DEFAULT_URL} alt={post.title} />
          {post.title}
        </StyledLink>
      </li>
    ));
  });


  useEffect(() => {
    // MyHome 렌더링하면 바로 (내 userId에 맞는) posts 가져와서 redux에 저장
    dispatch(asyncGetPosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <TitleSection>
        <Greeting>환영합니다, {username} 님</Greeting>
        <Link to="/add-movie">
          <AddButton>+</AddButton>
        </Link>
        <GuideText>{posts.length === 0 && "위쪽의 + 아이콘을 클릭해서 게시물을 추가해 보세요."}</GuideText>
      </TitleSection>
      <PostListSection>
        <PostListWrapper>{posts}</PostListWrapper>
      </PostListSection>
    </Wrapper>
  );
};

export default MyHome;
