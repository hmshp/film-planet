import styled from "styled-components/macro";
import Media from "../../styles/Media";

export const Wrapper = styled.section`
  width: 35%;
  margin: 0 auto;
  font-size: 1.1rem;
  font-family: "Hahmlet", serif;
  font-weight: 300;

  ${Media.upToLaptop`
    margin-top: -4rem;
    width: 45%;
  `}

  ${Media.upToTablet`
    margin-top: 4rem;
    width: 70%;
  `}

  ${Media.upToPhone`
    width: 80%;
  `}
`;

export const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.8rem;
  font-size: 2.5rem;
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

export const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 8px;
`;

export const SubmitButton = styled.button`
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

export const AsideButton = styled.button`
  width: 150px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  padding: 6px;
  background: var(--primary-color-gradient-secondary);
  color: var(--primary-color-light);
  &:hover {
    background: var(--primary-color-gradient);
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${Media.upToPhone`
    text-align: center;
  `}
`;
