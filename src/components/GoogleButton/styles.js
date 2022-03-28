import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 26px;
  font-size: 14px;

  :hover {
    filter: brightness(0.98);
  }

  svg {
    height: 24px;
    width: 24px;
    margin-right: 5px;
  }
`;
