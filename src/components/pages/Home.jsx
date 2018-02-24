import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import AuthenticateForm from '../molecules/User/AuthenticateForm'
import CreateAccountForm from '../molecules/User/CreateAccountForm'
import { authenticate, create } from '../../store/user'

const Home = ({ onAuthenticate, onCreateAccount, user }) => (
  <div>
    <AuthenticateForm onAuthenticate={onAuthenticate} user={user} />
    <CreateAccountForm onCreateAccount={onCreateAccount} user={user} />
  </div>
)

Home.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onAuthenticate: data => dispatch(authenticate(data)),
  onCreateAccount: data => dispatch(create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
