import React, { Component } from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';

import {
  FormInputGroup,
  FormLabel,
  FormField,
  FormButton,
} from '../../components/FormElements'

import { FormContainer, EmailHeader } from './styled';
import { TwitterContainer } from '../LandingHero/styled';

class EmailSubscribe extends Component {
  render() {
    return (
      <FormContainer>
        <EmailHeader>
          Subscribe to be notified about upcoming competitions
        </EmailHeader>
        <form action="https://kylemcd.us19.list-manage.com/subscribe/post?u=5f38c3d669ea51ac7ac7d8d39&amp;id=bedf8665f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
          <FormInputGroup>
            <FormLabel htmlFor="mce-EMAIL">Email</FormLabel>
            <FormField type="email" name="EMAIL" id="mce-EMAIL" placeholder="king.arthur@makersbattle.com" required/>
          </FormInputGroup>
          <FormButton type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"v/> 
        </form>
        <TwitterContainer>
        <TwitterFollowButton
                screenName={'makersbattle'}
              />
        </TwitterContainer>
      </FormContainer>
    );
  }
}

export default EmailSubscribe;
