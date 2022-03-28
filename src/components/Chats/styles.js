import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1700px;
  margin: 0 auto;
  .selected{
    background-color: var(--color-primary) !important;
    color: white !important;
  }
  .load{
    text-align: center;
    margin: 30px 0;
  }
  .none-selected{
    width: 100%;
    height: 40%;
    //background-color: yellow;
    position: absolute;
    top: 25%;
    left: 0;
    text-align: center;
    img{
      width: 30%;
    }
    h2{
      margin: 20px 0 0 0;
      letter-spacing: -2px;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .col-left {
    flex-basis: 30%;
    min-width: 350px;
    height: 100vh;
    overflow-y: auto;
    background: #f9f9f9;
    overflow-y: auto;
    .btnVoltar{
      display: none;
    }
    
    @media (max-width:1000px) {
      max-width: 380px;
      flex-basis: 100%;
    }
    @media (max-width:500px) {
      position: relative;
      min-width: 100vw;
      .btnVoltar{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: var(--color-aux);
        color: var(--white);
        transition: 1s ease;
        a{
          color: white;
          width: 100%;
          text-align: center;
        }
        :hover{
        transition: 1s ease;
          background-color: var(--white);
          color: var(--color-aux);
        }
        svg{
          width: 60%;
          height: 60%;
        }
      }

    }
    h1 {
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: -3px;
      text-align: center;
      margin: 0 0 0px;
      padding: 10px;
      background-color: var(--color-primary);
      color: white;
      padding: 5px;
    }
    h2{
        padding: 5px;
        font-weight: bold;
        font-size:15px ;
        text-align: center;
        background-color: #f1f1f1;
    }
    .usuario{
        font-weight: bold;
        border-bottom: 1px solid var(--white);
        background-color: var(--white);
        color: var(--color-primary);
    }
    .recent-open {
      /* height: 360px;
      overflow-y: auto; */
    }
    .all-chats {
      /* height: 360px;
      overflow-y: auto; */
    }
    .list-of-workers{
        width: 100%;
        background-color: #fff;
        color: black;
        font-size: 13px;
        padding: 8px 0 8px 35px ;
        font-weight: bold;
        border-bottom: 2px solid #e1e1e1;
        transition: 1s;
        cursor: pointer;
        :hover{
            background-color: var(--color-primary);
            color: white;
            transition: 1s;
        }

    }
    ::-webkit-scrollbar{
        width: 5px;
        background-color: #000;
    }
    ::-webkit-scrollbar-corner{
        background-color: #000;

    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--color-primary);

    }
    ::-webkit-scrollbar-track{
        background-color: #e1e1e1;
    }
  }

  .col-right {
    position: relative;
    display: flex;
    overflow-y: auto;
    justify-content: flex-end;
    flex-direction: column;
    flex-basis: 70%;
    background-color: #f3f3f3;
    min-height: 100vh;
    height: 100vh;
    .current-Chat{
        position: absolute;
        top: 0;
        left: 0;
        height:50px;
        padding: 15px;
        background-color: transparent;
        font-weight: bold;
        
    }
    @media (max-width:1000px) {
        /* display: none;
        width: 100%;
        min-height: 100vh; */
    }
  }
`;
