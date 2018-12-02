import styled from 'styled-components';
import { gray, black } from '../../utils/colors';
import { mediumBp } from '../../utils/breakpoints';

export const ScoreBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 64px auto 0;
`;

export const ScoreBar1 = styled.div`
  height: 10px;
  background-color: red;
  border-radius: 4px 0 0 4px;
  position: absolute;
  left: 0;
`;

export const ScoreBar2 = styled.div`
  height: 10px;
  background-color: blue;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 0;
`;

export const ScoreBarScore1 = styled.div`
  font-size: 36px;
  font-weight: bold;
  line-height: 24px;
  
  span {
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
  }
`;

export const ScoreBarScore2 = styled.div`
  font-size: 38px;
  font-weight: bold;
  line-height: 24px;
  text-align: right;
  
  span {
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
  }
`;

export const ScoreBarNumbers = styled.div`
  display: flex;
  justify-content: space-between;

`;