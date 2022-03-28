import styled from "styled-components";

export const Container = styled.div`
  padding: 42px 25px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: bold;
    font-size: 30px;
    width: fit-content;
    margin: 0 auto;
    color: var(--color-aux);
  }

  @media screen and (min-width: 911px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    font-size: 44px;
    padding: 60px 50px;

    h2 {
      font-size: 44px;
    }
  }
`;

export const ImgContainer = styled.figure`
  padding-top: 100px;
  max-width: 500px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: 911px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 70px;
    max-width: 700px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1506px) {
    padding-top: 100px;
    max-width: 750px;
  }
`;
