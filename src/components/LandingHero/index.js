import React, { Component } from 'react';

import Logo from '../Logo';

import {
  HeroContainer,
  HeroLeft,
  HeroRight,
  LogoContainer,
  ContentContainer,
  ContentTitle,
  ContentList,
  ContentListItem,
  Makerlog,
  FormField,
  FormLabel,
  FormInputGroup,
  FormStyle,
  FormButton,
  ContentParagraph,
  CreatedBy
} from './styled'

class LandingHero extends Component {
  render() {
    return (
      <HeroContainer>
        <HeroLeft>
          <ContentContainer>
            <LogoContainer>
              <Logo white />
            </LogoContainer>
            <ContentTitle>
              Are you ready to do battle?
            </ContentTitle>
            <ContentList>
              <ContentListItem>
                <span role="img" aria-label="maker">👨‍🎤</span>
                <span role="img" aria-label="maker">👩‍🎤</span>
                &nbsp;Weekly Maker vs Maker Battles
              </ContentListItem>
              <ContentListItem>
              <span role="img" aria-label="check">🗓</span> Challenge a new maker every week
              </ContentListItem>
              <ContentListItem>
                <span role="img" aria-label="check">✅ </span> Use <Makerlog href="https://getmakerlog.com" target="_blank">Makerlog</Makerlog> to defeat your friends and foes
              </ContentListItem>
            </ContentList>
          </ContentContainer>
        </HeroLeft>
        <HeroRight>
          <ContentContainer>
            <ContentTitle>
              War is waging
            </ContentTitle>
            <ContentParagraph>
              The battlefield is being built, give us your email so you know when the war begins!
            </ContentParagraph>
            <FormStyle action="https://kylemcd.us19.list-manage.com/subscribe/post?u=5f38c3d669ea51ac7ac7d8d39&amp;id=bedf8665f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <FormInputGroup>
                <FormLabel htmlFor="mce-EMAIL">Email</FormLabel>
                <FormField type="email" name="EMAIL" id="mce-EMAIL" placeholder="king.arthur@makerbattles.com" required/>
              </FormInputGroup>
              <FormButton type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"v/> 
            </FormStyle>
          </ContentContainer>
        </HeroRight>
        <CreatedBy>
          Created by <a href="https://twitter.com/designbykyle" target="_blank">@designbykyle</a>
        </CreatedBy>
      </HeroContainer>
    );
  }
}

export default LandingHero;
