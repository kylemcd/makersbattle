import styled from 'styled-components';
import { black, purple, gray, white } from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';

const barBlue = '#47b8e0';
const barRed = '#ff7473';

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
    margin: 0 12px 40px 12px;
  }
  margin: 0 auto 40px auto;
  max-width: 800px;
  padding: 40px;

  background-color: ${purple};
  color: ${white} !important;
`;

export const SplitContainer = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
`;

export const DividerRed = styled.div`
  background-color: ${barRed};
  width: 12px;
`;

export const DividerBlue = styled.div`
  background-color: ${barBlue};
  width: 12px;
`;

export const DateContainer = styled.div`
  font-size: 16px;
  /* font-weight: bold; */
  text-align: center;
  margin: 20px 0 20px;
`;

export const TweetLink = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 0 0 ;

  a {
    color: ${purple};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 79px);
  width: 100%;
`;

export const LoadingCard = styled.div`
  background-color: ${gray};
  padding: 20px;
  border-radius: 4px;
`;