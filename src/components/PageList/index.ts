import styled from "styled-components";

export const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Page = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;

  > .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
  }
`;
