import PropTypes from 'prop-types'
import React from 'react'

import ErrorMessage from '../../atoms/ErrorMessage'
import Form from '../../atoms/Form'
import Input from '../../atoms/Form/Input'
import Label from '../../atoms/Form/Label'

import Preloader from '../../atoms/Preloader'
import Submit from '../../atoms/Form/Submit'
import Title from '../../atoms/Form/Title'

class AuthenticateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '', password: '' }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.onAuthenticate(this.state)
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Title>User authenticate</Title>
          {this.props.user.isFetching && <Preloader>Loading...</Preloader>}
          <Label>Enter login</Label>
          <Input
            name="login"
            type="text"
            value={this.state.login}
            onChange={this.handleInputChange}
          />
          <Label>Enter password</Label>
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Submit type="submit" value="Login" />
          {this.props.user.isFailed && (
            <ErrorMessage>Ooops, error. {this.props.user.error}</ErrorMessage>
          )}
        </Form>
      </div>
    )
  }
}

AuthenticateForm.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

export default AuthenticateForm
