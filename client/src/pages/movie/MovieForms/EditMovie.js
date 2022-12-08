import React, { useState } from "react";
import { Form, Wrapper, FormItem, Title, Input, Textarea, ButtonsWrapper, CancelButton, CancelLink, SubmitButton } from './MovieForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncUpdatePost } from "../../../redux/postSlice";



const EditMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedPost = useSelector((state) => {
    return state.post.selectedPost;
  });

  const [formData, setFormData] = useState(selectedPost);

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncUpdatePost({ formData, id })).then(() => {
      navigate(`/movies/${id}`);
    });
  };

  return (
    <Wrapper>
      <Form>
        <Title>게시물 수정</Title>
        <FormItem>
          <label htmlFor="title">제목</label>
          <Input
            onChange={handleChange}
            value={formData.title}
            name="title"
            type="text"
            id="title"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="review">한줄평</label>
          <Input
            onChange={handleChange}
            value={formData.review}
            name="review"
            type="text"
            id="review"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="url">썸네일 이미지 URL</label>
          <Input
            onChange={handleChange}
            value={formData.url}
            name="url"
            type="url"
            id="url"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="comment">코멘트</label>
          <Textarea
            onChange={handleChange}
            value={formData.comment}
            name="comment"
            id="comment"
          ></Textarea>
        </FormItem>
        <ButtonsWrapper>
          <CancelLink to="/">
            <CancelButton>취소</CancelButton>
          </CancelLink>
          <SubmitButton onClick={handleSubmit}>수정</SubmitButton>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default EditMovie;
