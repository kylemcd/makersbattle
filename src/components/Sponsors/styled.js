import styled from 'styled-components';
import { darken } from 'polished';

import { white, teal, black, purple} from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';


export const SponsorsContainer = styled.div`
  text-align: center;
  background-color: ${purple};
  padding: 40px 0;
  width: 100%;

  @media(min-width: ${mediumBp}px){
    padding: 60px 0;
  }
`;

export const SponsorsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 12px 30px;
  max-width: 800px;

  @media(min-width: ${mediumBp}px){
    margin: 0 auto 44px;
    flex-direction: row;
  }
`;

export const Sponsor = styled.div`
  align-items: flex-start;
  color: ${white};
  display: flex;
  flex: 0 1 33%;
  justify-content: center;
  margin-bottom: 24px;

  @media(min-width: ${mediumBp}px){
    margin-bottom: 0;
  }
`;

export const SponsorContent = styled.div`
  text-align: center;
`;

export const SponsorContentEyebrow = styled.h4`
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const SponsorLink = styled.div`
  a {
    color: ${white};
    font-size: 18px;
    margin-top: 24px;
    padding: 16px 24px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.3, white)};
    }
  }
`;