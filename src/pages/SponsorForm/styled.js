import styled from 'styled-components';
import { black } from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';

import { FormInputGroup } from '../../components/FormElements';

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  padding: 40px 0;

  @media(max-width: ${mediumBp}px){
    margin: 0 12px;
  }

  form {
    @media(max-width: ${mediumBp}px){
      width: 100%;
    }
  }

  ${FormInputGroup} {
    margin-bottom: 24px;
  }
`;

export const SponsorHeader = styled.h1`
  color: ${black};
  margin-bottom: 8px;
  text-align: center;
`;

export const SponsorParagraph = styled.p`
  color: ${black};
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 36px;
  text-align: center;
`;