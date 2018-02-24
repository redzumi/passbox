import PropTypes from 'prop-types'
import React from 'react'

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '', password: '' }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.onCreateAccount(this.state)
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
        <span>{JSON.stringify(this.props.user)}</span>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="login"
            type="text"
            value={this.state.login}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

CreateAccountForm.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

export default CreateAccountForm
