import React, { Component } from 'react';
import styled from 'styled-components';

import { white } from '../utils/colors';

const LogoContainer = styled.div`
  align-items: center;
  color: ${white};
  display: flex;
  font-weight: bold;
  font-size: 32px;
`;

const LogoTextContainer = styled.span`
  padding-left: 15px;
`;

const LogoEmojiContainer = styled.span`
  font-size: 42px;
  transform: translateY(4px);
`;

class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <LogoEmojiContainer>
          <span role="img" aria-label="swords">
            ⚔️
          </span>
        </LogoEmojiContainer>
        <LogoTextContainer>
          Makers Battle
        </LogoTextContainer>
      </LogoContainer>
    );
  }
}

export default Logo;
