import styled from "styled-components";

export const Container = styled.main`
  max-width: 1400px;
  margin: 40px auto;

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 20px;
      padding: 0 20px;
    }
  }
  ul {
    padding: 20px 30px;
    @media (max-width: 768px) {
      padding: 10px 15px;
    }
    li {
      cursor: pointer;
      border-radius: 30px;
      display: flex;
      align-items: center;

      max-width: 800px;
      margin: 15px auto;
      background-color: #e1e1e1;
      transition: 1s all;
      border: 2px solid transparent;
      padding: 10px 20px;
      @media (max-width: 768px) {
        border-radius: 20px;
        padding: 10px 5px;
      }
      :hover {
        background-color: #f2f2f2;
        transition: 1s all;
        border: 2px solid black;
      }
      figure {
        flex-basis: 5%;
      }
      .info {
        flex-basis: 85%;
        padding: 10px 20px;
        h2 {
          @media (max-width: 768px) {
            font-size: 14px;
            padding: 0 0px;
          }
        }
        p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 350px;
          @media (max-width: 768px) {
            font-size: 11px;
            padding: 0 0px;
            max-width: 180px;
          }
          @media (max-width: 468px) {
            max-width: 160px;
          }
        }
      }
      .arrow {
        flex-basis: 10%;
        text-align: end;
      }
    }
  }
`;
