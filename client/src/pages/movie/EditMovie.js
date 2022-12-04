import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncUpdatePost } from "../../redux/postSlice";

const Wrapper = styled.section`
  width: 35%;
  font-size: 1.1rem;
  font-family: "Hahmlet", serif;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 2.8rem;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 8px;
`;

const Textarea = styled.textarea`
  border-radius: 4px;
  padding: 8px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: linear-gradient(202.17deg, #1400ff 8.58%, #ad00ff 91.42%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(202.17deg, #1400ffc4 8.58%, #ad00ffcf 91.42%);
  }
`;

const CancelLink = styled(Link)`
  width: 40%;
`;

const CancelButton = styled(Button)`
  width: 100%;
  background: white;
  color: #1b2831;
  box-shadow: 1px 1.2px 1.2px grey;
  &:hover {
    background: #e4e1e1;
  }
`;

const SubmitButton = styled(Button)`
  width: 40%;
`;

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
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <Form>
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
          <label htmlFor="url">URL</label>
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
