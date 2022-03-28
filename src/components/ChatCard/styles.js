import styled from "styled-components";

export const ContainerChat = styled.li`

  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  min-height: 45px;
  word-break: break-all;
  padding: 10px 20px;
  margin-top: 0px;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0px;
  color: #000;
  list-style: none;
  background-color: #fff;
  transition: 1s all;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  :hover {
    background-color: var(--midgrey);
    transition: 1s all;
    /* color: white; */
  }


  h3 {
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 170px;
  }
  >div{
    margin: 0;
    flex-basis: 50%;
  }
  figure{
    flex-basis:20% ;
  }
  p,span {
    font-size: 9px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 8px;
    max-width: 150px;
  }
  >div,span{
    padding: 5px 0 0 0;

  }
  span{
    margin: 0;
    flex-basis:30% ;

  }
  > h3 {
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 154px;
  }
  > p {
    color: var(--grey);
    text-overflow: ellipsis;
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
  
  }
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    align-content: flex-start;
    width: auto;
  }
`;
