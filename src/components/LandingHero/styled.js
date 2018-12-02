import styled from 'styled-components';
import { darken } from 'polished';

import { purple, white, gray, black, teal, blue } from '../../utils/colors';
import { largeBp, mediumBp } from '../../utils/breakpoints';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media(min-width: ${largeBp}px){
    flex-direction: row;
    height: 100vh;
  }
`;

export const HeroLeft = styled.div`
  align-items: center;
  background-color: ${purple};
  color: ${white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0 1 50%;
  padding: 40px 60px;
`;

export const HeroRight = styled.div`
  align-items: center;
  display: flex;
  color: ${black};
  flex-direction: column;
  justify-content: center;
  flex: 0 1 50%;
  padding: 40px 40px;

  @media(min-width: ${largeBp}px){
    padding: 40px 60px;
  }
`;
export const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

export const ContentContainer = styled.div`
  padding: 60px 0;
`;

export const ContentTitle = styled.h1`
  margin-bottom: 24px;
`;

export const ContentParagraph = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 48px;
`;

export const ContentList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const ContentListItem = styled.li`
  color: ${white};
  font-size: 18px;
  margin-bottom: 16px;

  @media(min-width: ${mediumBp}px){
    font-size: 24px;
  }
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

export const FormField = styled.input`
  border: 2px solid ${gray};
  border-radius: 8px;
  color: ${black};
  font-size: 18px;
  padding: 16px 24px;
  transition: border 0.2s ease-in-out;
  width: auto;

  @media(min-width: ${mediumBp}px){
    min-width: 300px;
    max-width: 300px;
  }

  &:hover {
    border: 2px solid ${darken(0.3, gray)};
  }

  &:focus {
    border: 2px solid ${blue};
    outline: none;
  }
`;

export const FormLabel = styled.label`
  font-size: 24px;
  color: ${black};
  margin-bottom: 8px;
`;

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormStyle = styled.form`

`;

export const FormButton = styled.input`
  background-color: ${teal};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${black};
  font-size: 18px;
  padding: 16px 24px;
  margin-top: 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:focus {
    background-color: ${darken(0.2, teal)};
    outline: none;
  }
`;

export const CreatedBy = styled.div`
  border-top: 2px solid ${gray};
  border-left: 2px solid ${gray};
  border-top-left-radius: 8px;
  bottom: 0;
  position: fixed;
  padding: 16px 24px;
  right: 0;

  a {
    color: ${blue};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;