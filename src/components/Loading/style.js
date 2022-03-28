import styled from "styled-components";

export const LoadingModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2000000;

  .blue-bar {
    background-color: var(--color-primary);
    height: 100%;
    width: 100%;
    animation: load ${(props) => props.interval}ms;
  }
  .hidden{
    display: none;
  }
  .grey-bar {
   
    height: 3px;
    width: 300px;
    margin: 20px auto;
    background-color: var(--grey);
  }
  @keyframes load {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
