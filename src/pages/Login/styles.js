import styled from "styled-components";
import LoginSvg from "../../assets/svg/Login.svg";
import bg from "../../assets/svg/whiteBg.svg";

export const LoginContainer = styled.main`
  display: flex;
  justify-content: space-between;
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  @media (max-width: 850px) {
    justify-content: center;
  }

  .col {
    height: 100%;
    min-height: 100vh;
    flex-basis: 50%;
    @media (max-width: 850px) {
      flex-basis: 100%;
    }
  }
  .col-left {
    > div {
      min-height: 100vh;
      height: 100%;
      background-image: url(${LoginSvg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 80%;
      animation: fadeIn 0.5s;
    }
    @media (max-width: 850px) {
      display: none;
    }
  }
  .col-right {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
