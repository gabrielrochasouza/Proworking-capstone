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
    padding: 0;
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
      position: relative;
      height: 334px;
      width: 300px;
      margin: 10px 20px;
      //border: 2px solid #dadada;
      transition: all 0.25s ease-in-out;
      border-radius:10%;
      color: #000;
      background-color: #5562c6;
      font-weight: bold;
      font-family: var(--font-text);
      display: flex;
      flex-direction: column;
      box-shadow: 3px 3px 5px rgb(0 0 0 / 50%);
      @media (max-width:500px) {
        width: 140px;
        height: 160px;
      }
      a {
        color: #000;
      }
      :hover {
        transform: translateY(-3px);
      }
      img {
        width: 100%;
        height: 100%;
        object-position: left;
        object-fit: cover;
        //border: 1px solid #eee;
        background-color: #5562c6;
        border-radius: 10% ;
      }
      div {
        position: absolute;
        bottom: 10px;
        left: 3%;
        width: 94%;
        color: white;
        background: linear-gradient(90deg,#222,#000);
        border-radius: 30px;
        padding: 20px 10px;
        min-height: 100px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 1s ease;
        @media (max-width:500px) {
          min-height: 55px;
          border-radius: 10px;
          padding:5px ;
        }
        ::after{
          position: absolute;
          top: 18px;
          width: 80px;
          height: 3px;
          background-color: blue;
          content: '';
          @media (max-width:500px) {
            height: 1px;
            width: 40px;
            top: 8px;
          }
        }
        
        :hover{
          transition: 1s ease;
          background: linear-gradient(90deg,#000,#000);
        }
        h3 {
          padding: 0 15px;
          font-size: 16px;
          font-weight: 500;
          @media (max-width:500px) {
            font-size: 9px;
            padding: 0 4px;
          }
        }
      }
    }
  }
`;
