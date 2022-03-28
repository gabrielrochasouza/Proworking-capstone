import styled from "styled-components";

export const BoxChat = styled.div`
  border: 0px solid;
  display: flex;
  flex-direction: column;
  
  background-color: var(--whitesmoke);
  overflow-y: auto;

  
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
  @media (max-width:1000px) {

    min-height: 100vh;
  }
  > button {
    margin: 0 auto;
    border: none;
    background-color: var(--color-aux);
    color: var(--white);
  }
  .current-chat-user{
    position: absolute;
    top: 0;
    left: 100px;
    height:30px;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 14px;
  }
  .voltarChat {
    position: fixed;
    top: 10px;
    right: 10px;
    border-radius: 30px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    >button{
      
    }
    background-color: var(--color-primary);
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    transition: 1s;

    :hover {
      background-color: var(--color-aux);
      transition: 1s;
    }
  }


  .boxInput {
    /* position: absolute;
    bottom: 0;
    left: 0; */
    position: sticky;
    bottom: 0;
    padding: 10px;
    width: 100%;
    background-color: #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > input {
      font-size: 18px;
      padding: 5px;

      width: 90%;
      padding: 15px;
      margin: 0 5px;
      border: 0px;
      border-radius: 33px;
    }
    > button {
      width: 50px;
      height: 50px;
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary);
      color: white;

      transition: 1s;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      :hover {
        transition: 1s;
        background-color: var(--white);
        color: var(--color-primary);
      }
      svg {
        width: 50%;
        height: 50%;
      }
    }
  }
  .box-messages{
    height: 100%;
    border: 0;
    padding: 25px;
    padding: 0px 25px;
    margin: 53px 0 32px;
    @media (max-width:1000px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }


`;

export const BoxMessages = styled.div`
  border-bottom: 3px solid var(--darkblue);
  
  word-break: break-all;
  font-size: 13px;
`;

export const BoxInput = styled.div`
  align-self: flex-end;
`;
