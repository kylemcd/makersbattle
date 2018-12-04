import styled from 'styled-components';
import { darken } from 'polished';
import { gray, black, teal, blue } from '../utils/colors';
import { mediumBp } from '../utils/breakpoints';

export const FormField = styled.input`
  border: 2px solid ${gray};
  border-radius: 8px;
  color: ${black};
  font-size: 18px;
  padding: 16px 24px;
  transition: border 0.2s ease-in-out;
  width: auto;
  -webkit-appearance: none;

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

export const FormTextArea = styled.textarea`
  border: 2px solid ${gray};
  border-radius: 8px;
  color: ${black};
  font-size: 18px;
  padding: 16px 24px;
  transition: border 0.2s ease-in-out;
  width: auto;
  -webkit-appearance: none;

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
  @media(max-width: ${mediumBp}px){
    width: 100%;
  }
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
  -webkit-appearance: none;

  &:hover, &:focus {
    background-color: ${darken(0.2, teal)};
    outline: none;
  }
`;
