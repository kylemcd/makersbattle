import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import LandingHero from '../../components/LandingHero';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="Makers Battle"/>
        <LandingHero />
      </Fragment>
    );
  }
}

export default LandingPage;