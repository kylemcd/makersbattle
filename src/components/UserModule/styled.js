import styled, { css } from 'styled-components';
import { white , gray, black, teal } from '../../utils/colors';
import { mediumBp} from '../../utils/breakpoints';
import { darken } from 'polished';

export const UserModuleContainer = styled.div`
  background-color: ${gray};
  flex: 0 1 50%;
  padding: 20px;

  @media(min-width: ${mediumBp}px){
    padding: 40px 60px;
  }
`;

export const UserModuleCard = styled.div`
  align-items: center;
  background-color: ${white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const UserModuleSection = styled.div`
  align-items: center;
  color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media(min-width: ${mediumBp}px){
    flex-direction: row;
  }
`;

export const UserModuleCardContent = styled.div`
  
`;

export const UserAvatar = styled.img`
  border-radius: 8px;
  height: auto;
  margin-bottom: 18px;
  max-width: 120px;
  width: 100%;

  @media(min-width: ${mediumBp}px){
    margin-right: 24px;
  }
`;

export const UserName = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const UserSocialList = styled.ul`
  list-style: none;
  padding: 0;

  @media(max-width: ${mediumBp}px){
    text-align: center;
  }
  
  li {
    display: inline;
    margin-right: 6px;
  } 

  a {
    color: ${teal};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.3, teal)};
    }
  }
`;

export const UserScore = styled.div`
  text-align: center;
`;

export const UserScoreHeader = styled.span`
  text-transform: uppercase;
`;

export const UserScoreScore = styled.h1`
  font-size: 48px;
  margin-top: 4px;
  margin-bottom: 0;
`;

export const MakerlogContainer = styled.div`
  color: ${white};
  background-color: ${black};
  padding: 8px 16px;
  border-radius: 8px 8px 0 0;
  margin-top: 24px;
`;

export const Makerlog = styled.a`
  color: #47e0a0;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${darken(0.3, '#47e0a0')};
  }
`;

export const Winner = styled.p`
  color: green;
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const Loser = styled.p`
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const UserAvatarContainer = styled.div`
  position: relative;
`;

export const Crown = styled.div`
  position: absolute;
  font-size: 58px;
  top: -40px;
  left: -20px;
`;