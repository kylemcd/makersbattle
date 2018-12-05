import styled from 'styled-components';
import { mediumBp } from '../../utils/breakpoints';
import { black, gray } from '../../utils/colors';

export const FormContainer = styled.div`
  padding: 40px 0;

   @media(max-width: ${mediumBp}px){
    padding: 20px 0;
  }

  form {
    width: 100%;
  }
`;

export const EmailHeader = styled.h2`
  color: ${black};
`;

export const TwitterContainer = styled.div`
  padding: 20px 0;
  margin: 0 12px 40px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  margin: 40px 12px 40px;

  @media(min-width: ${mediumBp}px){
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const SponsorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;

  @media(min-width: ${mediumBp}px){
    padding: 0 40px;
  }
`;

export const SponsorIcon = styled.div`
  font-size: 72px;
`;

export const SponsorParagraph = styled.div`
  padding: 0 40px;
  color: ${black};
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

export const SponsorCard = styled.a`
  border: 3px solid ${gray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${gray};
  }
`;
