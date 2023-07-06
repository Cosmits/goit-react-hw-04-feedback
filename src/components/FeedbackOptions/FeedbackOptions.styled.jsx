import styled from '@emotion/styled';

export const OptionsUl = styled.ul`
  margin-top: 10px;
  text-align: center;
`;

export const OptionsLi = styled.li`
  display: inline-block;
  margin-right: 10px;

  & button:hover {
    background-color: greenyellow;
  }

  & button::first-letter {
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  padding: 8px;
  transition: background-color 250ms linear;
`;
