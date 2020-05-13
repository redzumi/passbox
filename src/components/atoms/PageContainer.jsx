import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fdfdfe;

  position: relative;
  z-index: 1;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;

    top: 50%;
    bottom: -40%;

    left: -25%;
    right: -25%;

    transform: rotate(-15deg);
    z-index: -1;
    background: linear-gradient(45deg, #646beb 45%, #6bdaed 85%);
  }
`;
