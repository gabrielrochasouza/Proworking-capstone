import styled from "styled-components";

export const Container = styled.main`
  margin: 50px auto 100px;
  max-width: 1400px;
  h1 {
    text-align: center;
  }
  
  svg {
    cursor: pointer;
    padding: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid var(--color-aux);
    background-color: var(--midgrey);
    color: var(--color-aux);
    transition: 1s all;
    :hover {
      background-color: var(--color-aux);
      transition: 1s all;
      color: var(--white);
    }
  }
  .box-user {
    text-align: center;
    max-width: 320px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 30px;
    background-color: #e1e1e1;
    input[type=file]{
      display: none;
    }
    figure {
      padding: 4px;
      background: linear-gradient(
        90deg,
        var(--color-secondary),
        var(--color-aux)
      );
      width: 165px;
      height: 165px;
      border-radius: 50%;
      margin: 0px auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      img {
        padding: 3px;
        background-color: white;
        border-radius: 50%;
        width: 155px;
        height: 155px;
        object-fit: cover;
      }
      svg {
        bottom: 10px;
        right: 10px;

        position: absolute;
      }
    }
    .user-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      text-align: center;
      max-width: 230px;
      span {
        flex-basis: 10%;
        svg{
            border: 0;
            background-color: transparent;
            :hover{
                background-color: var(--color-aux);
            }
        }
      }
      p {
          padding: 0 0px;
          font-size: 18px;
          font-weight: 500;
        text-align: start;
        flex-basis: 90%;
      }
    }
  }
  .modal{
    animation: fadeIn 1s;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 20000000000000000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    .modal-box{
        max-width: 620px;
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        input,button{
            display: block;
            width: 100%;
            padding:10px 10px;
            margin: 20px 0px;
        }
        input{
            color: white;
            background-color: rgba(255,255,255,0.05);
            border: 0;
            border-bottom: 2px solid var(--midgrey);
            border-radius: 15px;
            ::placeholder{
                color: color;
            }
        }
        span{
            cursor: pointer;
        }
        button{
            border: 0;
            background-color: var(--color-primary);
            color: var(--white);
            padding: 14px;
            border-radius: 20px;
            box-shadow: 0 5px 20px 15px var(--color-aux);
            transition: 1s ease;
            :hover{
                transition: 1s ease;
                background-color: var(--color-aux);
            }
        }
    }
  }

  .hidden{
      display: none;
  }

`;
