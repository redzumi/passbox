import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ({ message }) => (
  <div>
    <Error>{message}</Error>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

const Error = styled.span`
  color: #cd2901;
  width: 250px;
  display: block;
`;

export default ErrorMessage;
