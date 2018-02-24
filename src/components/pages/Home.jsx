import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { logOn } from '../../store/user'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.logOn(this.state)
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

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  logOn: () => {
    dispatch(logOn())
  },
})

Home.propTypes = {
  logOn: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Home))
