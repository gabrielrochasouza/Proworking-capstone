import styled from "styled-components";

export const ServiceContainer = styled.main`
  max-width: 1200px;
  margin: 60px auto;
  animation: fadeIn 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 710px) {
    margin: 10px auto 0px;
  }
  @media (max-width: 460px) {  
    margin: 0 auto;
  }
  .cities {
    list-style: none;
    margin: 10px 0 20px;
    h2 {
      margin: 0;
    }
    .locationInfo,
    .locationTitle {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      margin: 5px;
      background-color: var(--lightblue);
      color: var(--color-primary);
      padding: 10px 15px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: 1s all;
      :hover {
        transition: 1s all;
        border: 2px solid var(--blue);
      }
    }
  }
  .profile-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 0;
    span {
      font-size: 30px;
      color: var(--yellow);
      font-weight: bold;
      font-family: var(--font-title);
      transform: translateY(1px);
      @media (max-width: 710px) {
        font-size: 45px;
        transform: translateY(-1px);
      }
      @media (max-width: 420px) {
        font-size: 25px;
        /* transform: translateY(-1px); */
      }
    }
    .profile-header-title{
      font-size: 60px;
      color: var(--white);
      font-family: var(--font-title);
      letter-spacing: -4px;
      @media (max-width: 710px) {
        font-size: 45px;
        /* transform: translateY(-1px); */
      }
      @media (max-width: 420px) {
        font-size: 25px;
        /* transform: translateY(-1px); */
      }
    }
    width: 97%;
    /* height: 150px; */
    border-radius: 50px 50px 0px 0px;
    margin: 0 auto;
    background-color: var(--color-aux);
    position: relative;
    @media (max-width: 710px) {
      height: 150px;
      margin: 0px auto 0px;
    }
    @media (min-width: 660px) {
      min-height: 130px;
      padding: 25px 0;
    }
    @media (max-width: 460px) {
        width: 100%;
        margin: 0 auto;
        border-radius: 0;

        /* transform: translateY(-1px); */
      }
    figure {
      position: absolute;
      bottom: -70px;
      left: 15%;
      background-color: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        padding: 5px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
      @media (min-width: 1024px) {
        img {
          width: 130px;
          height: 130px;
        }
      }
      @media (max-width: 710px) {
        bottom: -50px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  .profile-content {
    background-color: var(--whitesmoke);
    padding: 100px 110px 40px;
    margin-bottom: 70px;
    width: 97%;
    border-radius: 0 0 50px 50px;
    @media (max-width: 710px) {
      padding: 60px 25px 20px;
    }

    .profile-tittle {
      margin: 0px 0 50px;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: capitalize;
      }
      @media (max-width: 710px) {
        margin: 0px 0 10px;
        h1 {
          font-size: 22px;
        }
        p {
          font-size: 17px;
        }
      }
    }
    h2 {
      font-size: 1.6rem;
      margin: 30px 0 5px;
      @media (max-width: 710px) {
        font-size: 20px;
      }
    }
    p {
      font-size: 1.2rem;
      margin: 15px 0 0 0px;
      @media (max-width: 710px) {
        font-size: 14px;
      }
    }
    .rating {
      font-size: 30px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .icon {
      background-color: var(--green);
      text-align: center;
      box-shadow: 0px 4px 20px var(--green);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: var(--white);
      height: 50px;
      min-width: 130px;
      border-radius: 20px;
      margin: 0 10px;
      padding:0 9px ;
      cursor: pointer;
      :hover {
        background-color: var(--darkgreen);
      }
      svg {
        color: var(--white);
        width: 30px;
        height: 30px;
        margin: 0 7px 0 0;
      }
      @media (max-width: 710px) {
        font-size: 12px;
        height: 35px;
        width: 130px;

        text-align: center;
        margin: 0px 5px 3px 0px;
        padding: 10px 0;

        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .icon-mail {
      background-color: var(--color-primary);
      box-shadow: 0px 4px 20px var(--color-primary);
      min-width: 130px;
      :hover {
        background-color: var(--darkblue);
      }
    }
    .icon-message{
      background-color: var(--grey);
      box-shadow: 0px 4px 20px var(--grey);
      width: 250px;
      :hover {
        background-color: var(--grey-1);
      }
      @media (max-width: 710px) {
        font-size: 15px;
        height: 35px;
        width: 138px;
        text-align: center;
        margin: 10px 0 0 5px;
        padding: 10px 4px;
        font-size: 12px;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .comments,
    textarea {
      padding: 30px 20px;
      background-color: var(--white);
      box-shadow: 4px 4px 10px var(--lightgrey);
      border-radius: 30px;
      width: 100%;
      margin: 10px auto 20px;
      display: flex;
      .profile-pic {
        cursor: pointer;
        margin: 0 0px 0 0;
        display: flex;
        justify-content: center;
        color: var(--white);
        font-size: 25px;
        font-weight: bold;
        p {
          border-radius: 50%;
          background-color: var(--color-primary);
          width: 50px;
          height: 50px;
          display: flex;
          margin: 0;
          justify-content: center;
          align-items: center;
          @media (max-width: 710px) {
            width: 30px;
            height: 30px;
          }
        }
      }
      .profile-comment {
        margin: 0 0 0 15px;
        @media (max-width: 710px) {
          margin: 0 0 0 10px;
        }
        h3 {
          font-size: 17px;
          padding: 0;
          margin: 0;
          margin-bottom: 3px;
        }
        p {
          padding: 0;
          margin: 0;
          font-size: 15px;
        }
      }
      @media (max-width: 710px) {
        padding: 15px 20px;
        p {
          font-size: 11px;
        }
        h3 {
          font-size: 14px;
        }
      }
    }
    textarea {
      font-size: 17px;
      border-color: var(--lightgrey);
      font-family: var(--font-text);
      max-width: 100%;
      min-width: 100%;
      min-height: 150px;
      max-height: 250px;
      position: relative;
      margin-bottom: 3px;
    }
    .botaoSpan {
      display: flex;
      flex-direction: column;

      span {
        margin-top: 10px;
        color: var(--black);
        font-size: 12px;
        left: 0px;
        width: 270px;
      }
    }

    button {
      margin: 0;
      margin-top: 10px;
      position: relative;
    }
  }
`;

export const RatingContainer = styled.section`
  span {
    font-size: 1.8rem;
    transform: translateY(0.5px);

    @media screen and (min-width: 711px) {
      font-size: 2.5rem;
    }
  }
`;
