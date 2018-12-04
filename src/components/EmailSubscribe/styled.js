import styled from 'styled-components';
import { mediumBp } from '../../utils/breakpoints';
import { black } from '../../utils/colors';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  @media(max-width: ${mediumBp}px){
    margin: 0 12px 40px;
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
`;