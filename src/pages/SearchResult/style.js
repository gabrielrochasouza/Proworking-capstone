import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
`;

export const ServicePageContainer = styled.main`
  animation: fadeIn 1s;
  margin: 60px auto;
  h1 {
    font-size: 40px;
    margin: 30px 0;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 29px;
    }
  }
`;
export const NotFound = styled.div`
  text-align: center;
  animation: fadeIn 1s;
  img {
    width: 250px;
    height: 250px;
    margin: 20px auto;
  };
  h2 {
    font-weight: 500;
    text-align: center;
    font-size: 14px;
  }
`;

// export const TopBar = styled.div`
//   width: 100%;
//   background-color: var(--midgrey);

//   > div {
//     max-width: 1440px;
//     width: 100%;
//     display: flex;
//     justify-content: right;
//   }
// `;

export const TopBar = styled.div`
  width: 100%;
  background-color: var(--midgrey);
  text-align: center;

  @media screen and (min-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
