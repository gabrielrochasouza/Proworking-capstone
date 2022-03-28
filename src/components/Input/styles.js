import styled from "styled-components";

export const Container = styled.div`
  p {
    padding-left: 16px;
    margin-bottom: 10px;
    span {
      color: var(--error);
    }
  }
`;

export const Content = styled.div`
  background: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  padding: 8px 16px;
  border-radius: 32px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;

  width: 100%;
  transition: 0.5s;

  svg {
    color: var(--white);
    transform: translateY(2px) scale(1.3);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }

  :focus-within {
    border-color: var(--color-primary);
    background: var(--white);
    input,
    button,
    svg {
      :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px var(--white) inset;
        box-shadow: 0 0 0 30px var(--white) inset;
        transition: 0.5s;
        color: var(--white);
      }
      :-webkit-autofill {
        transition: 0.5s;
        -webkit-text-fill-color: var(--black) !important;
      }

      color: var(--color-aux);
      ::placeholder {
        color: var(--color-aux);
      }
    }
  }

  input {
    background: transparent;
    border: none;
    color: var(--white);
    width: 100%;
    font-size: 14px;
    margin: 0px 10px;
    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px var(--color-secondary) inset;
      box-shadow: 0 0 0 30px var(--color-secondary) inset;
      color: var(--white);
    }
    :-webkit-autofill {
      -webkit-text-fill-color: var(--white) !important;
    }
    ::placeholder {
      color: var(--white);
    }
  }

  button {
    margin-left: 12px;
    background: transparent;
    border: none;
    color: var(--white);
    svg {
      transform: translateY(3px) scale(1.5);
    }
  }
`;

export const ContainerInputSearch = styled.input`
  text-align: center;
  padding: 12px;
  border: 1.8px solid transparent;
  border-radius: 26px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  width: 90%;
  max-width: 654px;
  color: var(--color-secondary);

  ::placeholder {
    transition: 0.5s;
    color: var(--color-secondary);
  }

  :focus {
    border-top-color: var(--black);
    border-left-color: var(--black);
    border-bottom-color: var(--black);
    ::placeholder {
      transition: 0.5s;
      color: var(--white);
    }
  }
`;
