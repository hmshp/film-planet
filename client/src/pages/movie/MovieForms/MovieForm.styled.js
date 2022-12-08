import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Media from '../../../styles/Media';

export const Wrapper = styled.section`
  width: 45%;
  font-size: 1.1rem;
  font-family: "Hahmlet", serif;
  font-weight: 300;
  margin: 0 auto;

  ${Media.upToLaptop`
    width: 55%;
  `}

  ${Media.upToTablet`
    width: 80%;
  `}

  ${Media.upToPhone`
    width: 90%;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 2.8rem;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 8px;
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  padding: 8px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: var(--primary-color-gradient);
  color: var(--primary-color-light);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: var(--primary-color-gradient-secondary);
  }
`;

export const CancelLink = styled(Link)`
  width: 40%;
`;

export const CancelButton = styled(Button)`
  width: 100%;
  background: var(--primary-color-light);
  color: var(--primary-color-dark);
  box-shadow: 1px 1.2px 1.2px grey;
  &:hover {
    background: var(--secondary-color);
  }
`;

export const SubmitButton = styled(Button)`
  width: 40%;
`;
