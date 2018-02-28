import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
/* import { Redirect } from 'react-router' */

import DataBox from '../atoms/Passwords/DataBox'
import DatasContainer from '../atoms/Passwords/DatasContainer'
import PageContainer from '../atoms/PageContainer'
import { add, get, set } from '../../store/passwords'

class Passwords extends React.Component {
  componentDidMount() {
    if (this.props.user.isAuthenticated) this.props.getPasswords()
  }

  render() {
    return (
      <PageContainer>
        {/* {!this.props.user.isAuthenticated && <Redirect to="/login" />} */}
        <ContentContainer>
          <div className="col-md-12">
            <DatasContainer>
              {this.props.passwords.map(data => <DataBox key={data.id} data={data} />)}
            </DatasContainer>
          </div>
        </ContentContainer>
      </PageContainer>
    )
  }
}

Passwords.propTypes = {
  passwords: PropTypes.array.isRequired, // eslint-disable-line
  user: PropTypes.object.isRequired, // eslint-disable-line
  getPasswords: PropTypes.func.isRequired,
}

const ContentContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  border-top: 5px solid #646beb;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`

const mapStateToProps = state => ({
  passwords: state.passwords,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  handlePasswordAdd: data => dispatch(add(data)),
  handlePasswordUpdate: data => dispatch(set(data)),
  getPasswords: () => dispatch(get()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Passwords)
