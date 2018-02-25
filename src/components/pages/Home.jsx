import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AuthenticateForm from '../molecules/User/AuthenticateForm'
import CreateAccountForm from '../molecules/User/CreateAccountForm'
import PageContainer from '../atoms/PageContainer'

import { authenticate, create } from '../../store/user'

const Home = ({ onAuthenticate, onCreateAccount, user }) => (
  <PageContainer>
    <ContentContainer>
      <AuthenticateForm onAuthenticate={onAuthenticate} user={user} />
      <CreateAccountForm onCreateAccount={onCreateAccount} user={user} />
    </ContentContainer>
  </PageContainer>
)

Home.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

const ContentContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  border-top: 5px solid #646beb;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onAuthenticate: data => dispatch(authenticate(data)),
  onCreateAccount: data => dispatch(create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
