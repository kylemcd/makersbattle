import React, { Component } from 'react';
import {
  ScoreBarContainer,
  ScoreBar1,
  ScoreBar2,
  ScoreBarScore1,
  ScoreBarScore2,
  ScoreBarNumbers
} from './styled';

class ScoreBar extends Component {
  render() {
    const { user1Score, user2Score, value, emoji } = this.props;
    const user1ScoreParse = parseInt(user1Score);
    const user2ScoreParse = parseInt(user2Score);
    return (
      <ScoreBarContainer>
        <ScoreBarNumbers>
        <ScoreBarScore1>{user1ScoreParse}<br/> <span><span role="img" aria-label="value">{emoji}</span> {value}</span></ScoreBarScore1>
        <ScoreBarScore2>{user2ScoreParse}<br/> <span>{value} <span role="img" aria-label="value">{emoji}</span></span></ScoreBarScore2>
        </ScoreBarNumbers>
        <ScoreBar1  style={{ width: `${100 * user1ScoreParse / (user1ScoreParse + user2ScoreParse)}%` }}/>
        <ScoreBar2 style={{ width: `${100 * user2ScoreParse / (user1ScoreParse + user2ScoreParse)}%` }}/>
      </ScoreBarContainer>
    );
  }
}

export default ScoreBar;
