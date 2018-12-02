import styled from 'styled-components';
import { gray, black } from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';

export const CompetitionPageContainer = styled.div`
 
`;

export const UserModuleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Versus = styled.div`
  background-color: ${black};
  border-radius: 50%;
  color: white;
  font-size: 18px;
  padding: 10px;
`;

export const ContentContainer = styled.div`
  @media(max-width: ${mediumBp}px){
    padding: 0 12px;
  }
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
`;

export const SplitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;