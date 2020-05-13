import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CreateAccountForm from '../../molecules/User/CreateAccountForm';
import PageContainer from '../../atoms/PageContainer';

import { create } from '../../../store/user';

const CreateAccount = ({ handleAccountCreate, user }) => (
  <PageContainer>
    <ContentContainer>
      <CreateAccountForm onAccountCreate={handleAccountCreate} user={user} />
    </ContentContainer>
  </PageContainer>
);

CreateAccount.propTypes = {
  handleAccountCreate: PropTypes.func.isRequired,
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
  handleAccountCreate: (data) => dispatch(create(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
