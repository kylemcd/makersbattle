import React, { Component } from 'react';
import styled from 'styled-components';

import { purple } from '../utils/colors';
import Logo from './Logo';

const HeaderContainer = styled.div`
  background-color: ${purple};
  padding: 12px 16px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    );
  }
}

export default Header;
