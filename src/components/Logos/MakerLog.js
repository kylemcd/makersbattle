import React, { Component } from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  height: auto;
  max-width: 200px;
`;

class MakerLog extends Component {
  render() {
    return (
      <a href="https://getmakerlog.com" target="_blank" rel="noopener noreferrer">
        <Logo src="MakerLogLogo.png"/>
      </a>
    );
  }
}

export default MakerLog;
