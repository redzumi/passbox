import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const DatasContainer = ({ children }) => (
  <StyledDiv>
    <div className="row">{children}</div>
  </StyledDiv>
)

DatasContainer.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
}

const StyledDiv = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export default DatasContainer
