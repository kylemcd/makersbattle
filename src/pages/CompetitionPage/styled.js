import styled from 'styled-components';
import { gray } from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';

export const CompetitionPageContainer = styled.div`

`;

export const UserModuleContainer = styled.div`
  background-color: ${gray};
  display: flex;
  flex-direction: column;

  @media(min-width: ${mediumBp}px){
    flex-direction: row;
  }
`;