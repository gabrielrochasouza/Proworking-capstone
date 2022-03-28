import styled from "styled-components";

export const Ul = styled.ul`
  margin: 0;
  h4 {
    animation: fadeIn 0.5s;
    text-align: start;
  }
  li {
    display: inline-flex;
    padding: 10px 15px;
    color: var(--color-primary);
    margin: 10px;
    background-color: var(--lightblue);
    border-radius: 10px;
    cursor: pointer;
    animation: fadeIn 0.5s;
    align-items: center;
    list-style: none;

    button {
      padding: 0;
      margin: 0 4px 0 0;
      font-size: 10px;
      width: 20px;
      min-width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
