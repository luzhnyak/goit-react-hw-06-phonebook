import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: circle;
  padding: 4px 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  padding: 2px;
  margin-right: 16px;
  border: 1px solid black;
  &:hover {
    color: red;
  }
`;
