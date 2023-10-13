import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  list-style: circle;
  padding: 8px 0;
  border-bottom: 1px solid gray;
  
`;

export const Name = styled.div`
padding-left: 8px;
  font-weight: 700;  
`;

export const Number = styled.a`
padding-left: 8px;
  text-decoration: none;
  color: darkcyan;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  padding: 2px;
  margin-left: auto;
  border: 1px solid black;
  &:hover {
    color: red;
  }
`;
