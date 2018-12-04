import React, { Component } from 'react';

import Header from '../../components/Header';
import {
  FormInputGroup,
  FormLabel,
  FormField,
  FormButton,
  FormTextArea
} from '../../components/FormElements'

import {
  FormContainer,
  SponsorHeader,
  SponsorParagraph
} from './styled';

class SponsorForm extends Component {
  render() {
    return (
      <div>
        <Header/> 
        <FormContainer>
          <SponsorHeader>
            Become a Sponsor of Makers Battle
          </SponsorHeader>
          <SponsorParagraph>
            Help support the Maker community while also reaching it! Get in touch with us by filling out the form below!
          </SponsorParagraph>
          <form method="POST" action="https://formspree.io/hello@kylemcd.com">
            <FormInputGroup>
              <FormLabel htmlFor="name">Name*</FormLabel>
              <FormField id="name" name="name" type="text" required/>
            </FormInputGroup>
            <FormInputGroup>
              <FormLabel htmlFor="company">Company</FormLabel>
              <FormField id="company" name="company" type="text"/>
            </FormInputGroup>
            <FormInputGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormField id="email" name="email" type="email" required/>
            </FormInputGroup>
             <FormInputGroup>
              <FormLabel htmlFor="message">Message*</FormLabel>
              <FormTextArea id="message" name="message" type="text" rows="15" required></FormTextArea>
            </FormInputGroup>
            <FormButton type="submit" value="Submit"></FormButton>
          </form>
        </FormContainer>

      </div>
    );
  }
}

export default SponsorForm;
