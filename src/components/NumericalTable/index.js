import React, { Component } from 'react';

import {
  NumericalTableContainer,
  Table
} from './styled';

class NumericalTable extends Component {
  render() {
    const { pointsPerDay, tasksPerDay, praisePerDay } = this.props
    return (
      <NumericalTableContainer>
        <Table cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <span role="img" aria-label="Day">
                🗓
              </span>
            </td>
            <td>
              <span role="img" aria-label="Points">
                🎮
              </span>
            </td>
            <td>
              <span role="img" aria-label="Tasks">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label="Praise">
                🙏
              </span>
            </td>
          </tr>
          {tasksPerDay.map((task, index) => {
            return(
            <tr>
              <td>
                {index + 1}
              </td>
              <td>
                {pointsPerDay[index].toFixed(0)}
              </td>
              <td>
                {task}
              </td>
              <td>
                {praisePerDay[index]}
              </td>
            </tr>
            )
          })}
        </Table>
      </NumericalTableContainer>
    );
  }
}

export default NumericalTable;
