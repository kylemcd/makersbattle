import React, { Component } from 'react';
import { Link } from '@reach/router';

import {
  SponsorsContainer,
  SponsorsContentContainer,
  Sponsor,
  SponsorContent,
  SponsorContentEyebrow,
  SponsorLink
} from './styled'

import IronMic from '../Logos/IronMic';
import MakerLog from '../Logos/MakerLog';
import NodeHost from '../Logos/NodeHost';

class Sponsors extends Component {
  render() {
    return (
      <SponsorsContainer>
        <SponsorsContentContainer>
          <Sponsor>
            <SponsorContent>
              <SponsorContentEyebrow>
                Sponsored By
              </SponsorContentEyebrow>
              <IronMic />
            </SponsorContent>
          </Sponsor>        
          <Sponsor>
          <SponsorContent>
            <SponsorContentEyebrow>
              Powered By
            </SponsorContentEyebrow>
            <MakerLog />
            </SponsorContent>
          </Sponsor>   
          <Sponsor>
           <SponsorContent>
              <SponsorContentEyebrow>
                Sponsored By
              </SponsorContentEyebrow>
              <NodeHost />
            </SponsorContent>
          </Sponsor>      
        </SponsorsContentContainer>
        <SponsorLink>
          <Link to="/become-a-sponsor">
            Become a sponsor <span role="img" aria-label="point">👉</span>
          </Link>
        </SponsorLink>
      </SponsorsContainer>
    );
  }
}

export default Sponsors;
