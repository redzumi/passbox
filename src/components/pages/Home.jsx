import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AuthenticateForm from '../molecules/User/AuthenticateForm'
import CreateAccountForm from '../molecules/User/CreateAccountForm'
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

const PageContainer = styled.div`
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

    transform: rotate(-20deg);
    z-index: -1;
    background: linear-gradient(45deg, #646beb 45%, #6bdaed 85%);
  }
`

const ContentContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
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
