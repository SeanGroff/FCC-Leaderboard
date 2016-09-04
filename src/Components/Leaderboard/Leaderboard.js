import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import '../../Styles/Leaderboard.scss';

class Leaderboard extends Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    );
  }
}

export default Leaderboard;
