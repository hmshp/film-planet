import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncCreatePost } from '../../../redux/postSlice';

import { Form, Wrapper, FormItem, Title, Input, Textarea, ButtonsWrapper, Button, CancelButton, CancelLink, SubmitButton } from './MovieForm.styled';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    url: "",
    comment: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncCreatePost(formData)).then(() => {
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <Form>
        <Title>게시물 추가</Title>
        <FormItem>
          <label htmlFor="title">제목</label>
          <Input
            onChange={handleChange}
            required
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
            required
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
            required
            value={formData.comment}
            name="comment"
            id="comment"
          ></Textarea>
        </FormItem>
        <ButtonsWrapper>
          <CancelLink to="/">
            <CancelButton>취소</CancelButton>
          </CancelLink>
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default AddMovie;
