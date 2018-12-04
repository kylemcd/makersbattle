import React, { Component } from 'react';
import styled from 'styled-components';


const Logo = styled.img`
  height: auto;
  max-width: 200px;
`;

class NodeHost extends Component {
  render() {
    return (
      <a href="https://nodehost.ca" target="_blank" rel="noopener noreferrer">
        <Logo src="NodeHostLogo.png" />
      </a>
    );
  }
}

export default NodeHost;
