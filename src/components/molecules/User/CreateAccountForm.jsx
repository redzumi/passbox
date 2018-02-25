import PropTypes from 'prop-types'
import React from 'react'

import ErrorMessage from '../../atoms/ErrorMessage'
import Form from '../../atoms/Form'
import Input from '../../atoms/Form/Input'
import Label from '../../atoms/Form/Label'
import Link from '../../atoms/Link'
import Preloader from '../../atoms/Preloader'

import Submit from '../../atoms/Form/Submit'
import Title from '../../atoms/Form/Title'

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '', password: '' }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.onAccountCreate(this.state)
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
          <Title>Create account</Title>
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
          <Submit type="submit" value="Create account" />
          {this.props.user.isFailed && <ErrorMessage message={this.props.user.error} />}
        </Form>
        <Link to="/login" text="Log on." beforeLink="Have an account?" />
      </div>
    )
  }
}

CreateAccountForm.propTypes = {
  onAccountCreate: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

export default CreateAccountForm
