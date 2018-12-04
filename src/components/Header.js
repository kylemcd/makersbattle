import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { purple } from '../utils/colors';
import Logo from './Logo';

const HeaderContainer = styled.div`
  background-color: ${purple};
  padding: 12px 16px;

  a {
    text-decoration: none; 
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
      </HeaderContainer>
    );
  }
}

export default Header;
