import styled from "styled-components";

export const Container = styled.div`
  z-index: 50;
  .bm-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
  }

  .bm-burger-button {
    position: fixed;
    width: 40px;
    height: 32px;
    left: 15px;
    top: 22px;
  }

  .bm-burger-bars {
    background: var(--color-bg);
    border-radius: 4px;
  }

  .bm-burger-bars-hover {
    background: var(--color-secondary);
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: var(--color-bg);
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: var(--color-aux);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-item-list {
    color: var(--white);
    padding: 0.8em;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      color: var(--white);
      background: var(--color-secondary);
      padding: 12px 15px;
      border-radius: 8px;

      :hover {
        background: var(--color-primary);
      }
    }
  }

  .bm-item {
    display: inline-block;
  }

  .bm-item + .bm-item {
    margin-top: 10px;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 760px) {
    display: none;
  }

  @media screen and (max-width: 424px) {
    display: none;
  }
`;
