import React, { Component } from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

import {
  UserModuleContainer,
  UserModuleCard,
  UserModuleSection,
  UserModuleCardContent,
  UserAvatar,
  UserName,
  UserSocialList,
  UserScore,
  Winner, 
  Loser,
  UserAvatarContainer,
  Crown,
  TwitterContainer
} from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faProductHunt,
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class UserModule extends Component {
  render() {
    const { user, winner } = this.props;
    return (
      <UserModuleContainer>
        {user && 
          <UserModuleCard winnner={winner}>
            <UserModuleSection>
              <UserAvatarContainer>
                {winner !== null && (winner && <Crown><span role="img" aria-label="crown">👑</span></Crown>)}
                <UserAvatar src={user.avatar} />
              </UserAvatarContainer>
              <UserModuleCardContent>
                <UserName>{user.first_name} {user.last_name}</UserName>
                <UserSocialList>
                  {user.twitter_handle &&
                    <li>
                      <a href={`https://twitter.com/${user.twitter_handle}`} target="_blank" className="twitter" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} /> 
                      </a>
                    </li>
                  }
                  {user.product_hunt_handle &&
                    <li>
                      <a href={`https://producthunt.com/${user.product_hunt_handle}`} target="_blank" className="product-hunt" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faProductHunt} /> 
                      </a>
                    </li>
                  }
                  {user.username &&
                    <li>
                      <a href={`https://getmakerlog.com/@${user.username}`} target="_blank" className="makerlog" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCheck} /> 
                      </a>
                    </li>
                  }
                </UserSocialList>
              </UserModuleCardContent>
            </UserModuleSection>
            <UserScore>
              {winner !== null ? (winner ? 
                <Winner>
                  Winner Winner <span role="img" aria-label="chicken">🐔</span><span role="img" aria-label="dinner">🍽</span>
                </Winner> : 
                <Loser>Loser</Loser>
              ): (
                <TwitterContainer>
                <TwitterShareButton
                  url={'https://makersbattle.com'}
                  options={{ text: `I'm rooting for @${user.twitter_handle} in @MakersBattle!!` }}
                />
                </TwitterContainer>
              )}
            </UserScore>
          </UserModuleCard>
        }
      </UserModuleContainer>
    );
  }
}

export default UserModule;
