import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import Helpers from '../../Utils/Helpers';
import '../../Styles/Leaderboard.scss';

class Leaderboard extends Component {
  constructor() {
    super();

    this.state = {
      recent: [],
      allTime: []
    }
  }

  componentDidMount() {
    Helpers.getTopCampersInfo()
      .then((data) => {
        this.setState({
          recent: data.recent.data,
          allTime: data.allTime.data
        });
    });
  }

  render() {
    console.log(this.state.recent[0].username);
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>{ 'test' }</Cell>}
          width={200}
        />
      </Table>
    );
  }
}

export default Leaderboard;
