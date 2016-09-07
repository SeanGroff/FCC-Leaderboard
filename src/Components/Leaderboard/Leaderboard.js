import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import Rank from '../../Components/Rank/Rank';
import Campers from '../../Components/Campers/Campers';
import RecentPoints from '../../Components/Recent/Recent';
import AllTimePoints from '../../Components/Alltime/Alltime';
import Helpers from '../../Utils/Helpers';
import 'fixed-data-table/dist/fixed-data-table.css';
import '../../Styles/Leaderboard.scss';

class Leaderboard extends Component {
  constructor() {
    super();

    this.state = {
      recent: [' '],
      allTime: [' ']
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
    return (
      <Table
        rowsCount={ this.state.allTime.length }
        rowHeight={ 50 }
        headerHeight={ 50 }
        width={ 1000 }
        height={ 500 }>
        <Column
          header={ <Cell>#</Cell> }
          cell={
            <Rank
              data={ this.state.recent }
              field='rank'
            />
          }
          fixed={ true }
          width={ 200 }
        />
        <Column
          header={ <Cell>Camper Name</Cell> }
          cell={
            <Campers
              data={ this.state.recent }
              field='username'
            />
          }
          fixed={ true }
          width={ 200 }
          />
        <Column
          header={ <Cell>Points in last 30 days</Cell> }
          cell={
            <RecentPoints
              data={ this.state.recent }
              field='recent'
            />
          }
          fixed={ true }
          width={ 200 }
          />
        <Column
          header={ <Cell>All time points</Cell> }
          cell={
            <AllTimePoints
              data={ this.state.allTime }
              field='alltime'
            />
          }
          fixed={ true }
          width={ 200 }
        />
      </Table>
    );
  }
}

export default Leaderboard;
