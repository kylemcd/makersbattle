import styled from 'styled-components';
import { white , black, teal } from '../../utils/colors';
import { mediumBp} from '../../utils/breakpoints';
import { darken } from 'polished';

export const UserModuleContainer = styled.div`
  flex: 0 1 45%;
  margin: 45px auto 0;
`;

export const UserModuleCard = styled.div`
  background-color: ${white};
  margin-right: 0;
  @media(min-width: ${mediumBp}px){
    width: 300px;
  }
`;

export const UserModuleSection = styled.div`
  align-items: center;
  color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserModuleCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  height: auto;
  margin-bottom: 18px;
  max-width: 85px;
  width: 100%;
`;

export const UserName = styled.h2`
  margin-top: 0;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const UserSocialList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0;
  
  li {
    display: inline;
    margin-right: 8px;
  } 

  a {
    color: ${teal};
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .twitter {
    color: #1DA1F2;
  }

  .product-hunt {
    color: #DA552F;
  }

  .makerlog {
    color: #47e0a0;
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
  margin-top: 8px;
  margin-bottom: 0;
`;

export const Loser = styled.p`
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const UserAvatarContainer = styled.div`
  position: relative;
`;

export const Crown = styled.div`
  position: absolute;
  font-size: 58px;
  top: -30px;
  left: -20px;
`;

export const TwitterContainer = styled.div`
  margin-top: 16px;
`;