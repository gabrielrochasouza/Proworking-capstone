import styled from "styled-components";

export const Container = styled.div`

  .titleAndImg {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    width: 80%;
    .title {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      line-height: 14px;
      margin: 0;
      padding: 3px 0 0;
      text-align: start;
      font-weight: bold;
    }
  }
  .occupation_areas {
    list-style: disc;
    color: var(--color-aux);
    margin-top: -20px;
    text-transform: capitalize;
    list-style-position: inside;
    justify-content: flex-start;

    li {
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    li + li {
      margin-top: 5px;
    }
  }
  .location {
    color: black;
    font-size: 14px;
    margin: 15px auto;
    padding: 0;
    width: 80%;
    text-align: center;
    cursor: pointer;
    justify-content: flex-start;
    .locationDiv {
      text-align: center;
      padding: 5px 8px;
      background-color: var(--lightblue);
      border-radius: 20px;
      margin: 3px 1px;
      display: inline-block;
      max-width: 110px;
      color: var(--color-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .link {
    text-align: center;
    margin: 5px;
    line-height: 3px;
    font-size: 13px;
  }

  section {
    text-align: center;
    -webkit-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.25);
    background: #f2f2f2;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 250px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
    border: 1px solid transparent;
    transition: all 0.3s;
    border-radius: 20px;

    :hover {
      /* box-shadow: 0px 0px 30px 1px #e1e1e1; */
      border: 1px solid #e1e1e1;
      transform: scale(1.01);
      transition: all 0.8s;
    }
  }
  section img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  }

  ul {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    list-style: none;
    color: var(--color-secondary);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    > li {
      text-align: left;
      width: 80%;
    }

    > p {
      width: 100%;
      text-align: start;
    }
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    border-radius: 100%;
    border: none;
  }
  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Imagem = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const ModalContainer = styled.div`
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .headerModal {
    display: flex;
    @media (max-width: 600px) {
      flex-direction: column-reverse;
    }
  }

  > h3 {
    width: 60%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    > h2 {
      font-weight: 400;
    }
    > img {
      object-fit: cover;
      width: 100px;
      height: 100px;
    }
  }
  section img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  }

  p {
    margin-top: 5px;

    text-align: left;
    width: 80%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: start;

    align-items: flex-start;

    width: 80%;
    margin: 0 auto;
    color: var(--color-secondary);

    > li {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 80%;
    }

    > h3 {
      text-align: left;
      margin-bottom: 10px;
      width: 100%;
    }
    > ul {
      width: 100%;
      > li {
        font-size: 16px;
        width: 100%;
        text-align: left;
      }
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  button {
    border-radius: 100%;
    border: none;
  }
  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .link {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
  .location {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: flex-start;

    color: black;
    font-size: 14px;
    margin: 15px auto;
    padding: 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
    flex-wrap: wrap;
    gap: 10px;
    width: 80%;
    .locationDiv {
      text-align: center;
      padding: 5px 8px;
      background-color: var(--lightblue);
      border-radius: 20px;
      margin: 3px 1px;
      display: inline-block;
      max-width: 110px;
      color: var(--color-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  border: none;
  background-color: none;
  font-size: 20px;
`;
