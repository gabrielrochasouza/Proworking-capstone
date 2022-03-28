import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 20px;
  margin: 40px auto 0;
  box-shadow: 5px 5px 14px 5px rgb(0, 0, 0, 0.3);
  max-width: 420px;
  animation: fadeIn 1s;
  h1 {
    text-align: center;
  }
  p {
    margin: 10px 0 0;
  }
  > button {
    height: 41px;
    text-align: center;
    margin: 20px auto 0;
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width:460px) {
    max-width: 310px;
  }
`;
export const FormFooter = styled.p`
  margin: 20px 0 80px;
  text-align: center;
  font-size: 10x;
  span {
    display: block;
  }
`;
