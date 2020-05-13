import styled from 'styled-components';

export default styled.input`
  border: none;
  background-color: #646beb;
  color: #fff;
  width: 100%;
  border-radius: 99999px;
  padding: 8px 55px;
  margin: 10px 0;
  font-size: 14px;
  outline: none;
  transition: all 0.25s;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.08);

  &:active {
    background-color: #484644;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.16);
  }
`;
