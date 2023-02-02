import styled from "styled-components";

export const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;
  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

export const Content = styled.div`
  margin: 10px 0;
`;

export const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
