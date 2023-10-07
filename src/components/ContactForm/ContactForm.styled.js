import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 300px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  padding: 4px 8px;
  margin-right: 16px;
  border: 1px solid black;
  &:hover {
    color: green;
    border: 1px solid green;
  }
`;
