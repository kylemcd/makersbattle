import styled from 'styled-components';

const barBlue = '#47b8e0';
const barRed = '#ff7473';

export const ScoreBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 40px auto 16px;
`;

export const ScoreBar1 = styled.div`
  height: 10px;
  background-color: ${barRed};
  border-radius: 4px 0 0 4px;
  position: absolute;
  left: 0;
`;

export const ScoreBar2 = styled.div`
  height: 10px;
  background-color: ${barBlue};
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