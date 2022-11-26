import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { asyncUpdatePost } from '../../redux/postSlice';

const tempBorderStyle = {
  border: "3px solid pink",
  padding: "24px",
};

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
      navigate('/');
    })
  }

  return (
    <main style={tempBorderStyle}>
      <form>
        <div>
          <label htmlFor="title">제목</label>
          <input
            onChange={handleChange}
            value={formData.title}
            name="title"
            type="text"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="review">한줄평</label>
          <input
            onChange={handleChange}
            value={formData.review}
            name="review"
            type="text"
            id="review"
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            onChange={handleChange}
            value={formData.url}
            name="url"
            type="url"
            id="url"
          />
        </div>
        <div>
          <label htmlFor="comment">코멘트</label>
          <textarea
            onChange={handleChange}
            value={formData.comment}
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <Link to="/">
          <button>취소</button>
        </Link>
        <button onClick={handleSubmit}>등록</button>
      </form>
    </main>
  );
};

export default EditMovie;
