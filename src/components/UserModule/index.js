import React, { Component } from 'react';

import {
  UserModuleContainer,
  UserModuleCard,
  UserModuleSection,
  UserModuleCardContent,
  UserAvatar,
  UserName,
  UserSocialList,
  UserScore,
  UserScoreHeader,
  UserScoreScore,
  MakerlogContainer,
  Makerlog
} from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faProductHunt, 
} from '@fortawesome/free-brands-svg-icons';

class UserModule extends Component {
  render() {
    const { user, score } = this.props;
    console.log(user)
    return (
      <UserModuleContainer>
        <UserModuleCard>
          <UserModuleSection>
            <UserAvatar src={user.avatar} />
            <UserModuleCardContent>
              <UserName>{user.first_name} {user.last_name}</UserName>
              <UserSocialList>
                {user.twitter_handle &&
                  <li>
                    <a href={`https://twitter.com/${user.twitter_handle}`} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} /> 
                    </a>
                  </li>
                }
                {user.product_hunt_handle &&
                  <li>
                    <a href={`https://producthunt.com/${user.product_hunt_handle}`} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faProductHunt} /> 
                    </a>
                  </li>
                }
              </UserSocialList>
            </UserModuleCardContent>
          </UserModuleSection>
          <UserScore>
            <UserScoreHeader>Score</UserScoreHeader>
            <UserScoreScore>{score}</UserScoreScore>
          </UserScore>
          <MakerlogContainer>
            View&nbsp; 
            <Makerlog href={`https://getmakerlog.com/@${user.username}`} target="_blank" rel="noopener noreferrer">
              Makerlog
            </Makerlog> 
            &nbsp;Profile
          </MakerlogContainer>
        </UserModuleCard>
      </UserModuleContainer>
    );
  }
}

export default UserModule;
