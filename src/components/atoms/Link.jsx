import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = ({ to, text, beforeLink }) => (
  <NavContainer>
    <StyledSpan>{beforeLink}</StyledSpan>
    <StyledLink to={to} activeClassName="active">
      {text}
    </StyledLink>
  </NavContainer>
)

Link.defaultProps = {
  beforeLink: '',
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  beforeLink: PropTypes.string,
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  font-family: 'Montserrat', sans-serif;
  justify-content: center;
`

const StyledSpan = styled.span`
  color: #5b5a5c;
`

const StyledLink = styled(NavLink)`
  color: #646beb;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    color: #5b5a5c;
  }

  &.active {
    color: #5b5a5c;
  }
`

export default Link
