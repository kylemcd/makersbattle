import styled from 'styled-components';
import { black } from '../../utils/colors';

const tableBorder = '#eee';

export const NumericalTableContainer = styled.div`
  color: ${black};
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  td {
    padding: 5px;
    text-align: center;
    border: 1px solid ${tableBorder};
    width: 25px;
    padding: 5px 0;
  }

  tr {
    &:first-child {
      background-color: #ccc;
    }
    td {
      padding: 5px 0;
    }
  }
`;