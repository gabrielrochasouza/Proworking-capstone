import styled from "styled-components";

export const NavigatorContainerDiv = styled.div`
  position: fixed;
  bottom: ${props=>props.upOrDown ? "-85px" : "0"};
  left: 0;
  width: 100%;
  display: ${props=>props.location==="/chat" ?"none":"inherit"};
  background-color: var(--color-primary);
  color: var(--white);
  transition: 0.5s;
  height: 60px;
  margin-top: 20px;
  span {
    font-size: 10px;
    transition: 0.5s;
    margin: 0 0 10px;
    display: block;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    transition: 0.5s;
    align-items: flex-start;
    padding: 10px;
    li {
      flex-basis: 20%;
      transition: 0.5s;
      text-align: center;
      :hover {
        span {
          transition: 0.5s;
        }
      }
      svg {
        width: 21px;
        transition: 0.5s;
        height: 21px;
      }
    }
  }
  a {
    color: var(--white);
  }
  .selected {
    transition: 0.5s;
    position: relative;

    div {
      background-color: var(--white);
      padding: 5px;
      transform: translateY(-35px);
      transition: 0.5s;
      border-radius: 50%;
      position: relative;
      z-index: 12;
      max-width: 52px;
      margin: 0 auto;
    }
    p {
      border-radius: 50%;
      padding: 4px;
      width: 42px;
      height: 42px;
      justify-content: center;
      align-items: center;
      display: flex;
      transition: 0.5s;
      margin: 0 auto;
      background-color: var(--color-secondary);
      svg {
        border-radius: 50%;
      }
    }
    span {
      transform: translateY(-30px);
      transition: 0.5s;
      display: block;
      font-weight: bold;
    }
  }
  .selectedText {
    transition: 0.5s;
    display: inline;
  }
  @media (min-width: 425px) {
    display: none;
  }
`;
