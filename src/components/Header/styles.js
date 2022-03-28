import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-aux);
  display: ${({ currentPage }) =>
    currentPage === "/login" || currentPage === "/register" || currentPage==='/chat' ? "none" : "flex"};
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  justify-content: center;
  z-index: 99999;
`;

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  border-top: 96px;
  justify-content: space-between;
  padding-top: 6px;
  padding-right: 10px;

  .currentPage {
    background: var(--color-primary);
    font-weight: bold;
  }

  img {
    cursor: pointer;
  }

  figure {
    img {
      width: 220px;
    }
  }

  @media (max-width: 424px) {
    padding: 0;

    figure {
      margin-bottom: -10px;
    }
  }

  @media (min-width: 550px) {
    figure {
      margin-right: 5%;
    }
  }

  @media (max-width: 940px) {
    figure {
      margin-right: unset;
    }

    button {
      width: 140px;
    }
  }
`;

export const Nav = styled.nav`
  padding-top: 10px;
  display: none;

  a {
    color: var(--white);
    padding: 10px 0px;
    background: var(--color-secondary);
    width: 100px;
    text-align: center;
    border-radius: 26px;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.2px;
    transition: all 0.25s ease-in-out;

    :hover {
      background: var(--color-primary);
    }
  }

  @media (min-width: 760px) {
    display: flex;
    padding-top: 0;
    margin-top: -10px;
    margin-right: 10px;
    gap: 10px;
    align-items: center;
  }

  @media (min-width: 900px) {
    a {
      font-size: 14px;
      width: 120px;
    }
  }
`;
