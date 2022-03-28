import styled from "styled-components";

export const DashboardContainer = styled.main`
  margin: 40px auto;
  max-width: 1400px;
  padding: 30px;
  text-align: center;
  transition: 1s all;
  animation: fadeIn 1s;
  h2{
    font-weight: 400;
  }
  @media (max-width: 600px) {
    h1{
      font-size: 20px;
    }
    h2{
      font-size: 15px;
    }
    
  }
  ul {
    margin: 80px 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width:600px) {
      margin: 30px 0;
      
    }
    li {
      height: 334px;
      width: 300px;
      margin: 10px 20px;
      border: 2px solid #dadada;
      transition: all 0.25s ease-in-out;
      border-radius:10%;
      color: #000;
      background-color: #f3f3f3;
      font-weight: bold;
      font-family: var(--font-text);

      display: flex;
      flex-direction: column;

      box-shadow: 3px 3px 5px rgb(0 0 0 / 50%);
      a {
        color: #000;
      }
      :hover {
        transform: translateY(-3px);
      }
      img {
        width: 100%;
        height: 250px;
        object-position: left;
        object-fit: cover;
        border: 1px solid #eee;
        background-color: #dadada;
        border-radius: 10% 10% 0 0;
      }
      div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          padding: 0 15px;
          font-size: 19px;
          font-weight: 500;
        }
      }
    }
  }
`;
