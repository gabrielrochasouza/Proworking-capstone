import styled from "styled-components";

export const Container = styled.div`
  > span {
    margin: 0 auto;
    font-size: 13px;
    color: var(--grey);
  }
`;

export const Content = styled.div`
  margin: 15px 0 0 0;
  .message-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9px;
    .date{
    }
  }
  > span {
    color: var(--color-primary);
    font-size: 10px;
  }
  > p {

    background-color: var(--lightgrey);
    padding: 20px;

    border-radius: 30px;
    font-size: 13px;
    margin-top: 5px;
  }
`;
