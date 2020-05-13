import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AuthenticateForm from '../../molecules/User/AuthenticateForm';
import PageContainer from '../../atoms/PageContainer';

import { authenticate } from '../../../store/user';

const Authenticate = ({ handleAuthenticate, user }) => (
  <PageContainer>
    <ContentContainer>
      <AuthenticateForm onAuthenticate={handleAuthenticate} user={user} />
    </ContentContainer>
  </PageContainer>
);

Authenticate.propTypes = {
  handleAuthenticate: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired // eslint-disable-line
};

const ContentContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  border-top: 5px solid #646beb;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  handleAuthenticate: (data) => dispatch(authenticate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
