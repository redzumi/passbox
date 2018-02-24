import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
        {/* <span>{JSON.stringify(this.props.user)}</span> */}
        <StyledForm onSubmit={this.handleFormSubmit}>
          <StyledLabel>Enter login</StyledLabel>
          <StyledInput
            name="login"
            type="text"
            value={this.state.login}
            onChange={this.handleInputChange}
          />
          <StyledLabel>Enter password</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <SubmitInput type="submit" value="Login" />
        </StyledForm>
      </div>
    )
  }
}

AuthenticateForm.propTypes = {
  onAuthenticate: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

const StyledForm = styled.form`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLabel = styled.label`
  align-self: left;
  color: #c3c6c7;
  font-size: 10px;
`

const StyledInput = styled.input`
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin: 4px 0 10px 0;
  outline-color: #646beb;
  transition: all 0.25s;
  outline: none;
  border-bottom: 1px solid #646beb;

  &:focus {
    border-bottom: 1px solid #484644;
  }
`

const SubmitInput = styled.input`
  border: none;
  background-color: #646beb;
  color: #fff;
  width: 100%;
  border-radius: 99999px;
  padding: 8px 55px;
  margin: 10px 0;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  transition: all 0.25s;
  font-family: 'Montserrat', sans-serif;

  &:active {
    background-color: #484644;
  }

  &:hover {
    cursor: pointer;
  }
`

export default AuthenticateForm
