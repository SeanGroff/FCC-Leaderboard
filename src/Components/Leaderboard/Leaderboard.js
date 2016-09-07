import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import Helpers from '../../Utils/Helpers';
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
        width={ 1000 }
        height={ 500 }>
        <Column
          header={ <Cell style={{border: '1px solid red'}}>#</Cell> }
          cell={props => (
            <Cell {...props}>
              { props.rowIndex }
            </Cell>
          )}
          width={ 200 }
        />
        <Column
          header={ <Cell>Camper Name</Cell> }
          cell={props => (
            <Cell {...props}>
              {this.state.recent[props.rowIndex].username}
            </Cell>
          )}
          width={ 200 }
          />
      </Table>
    );
  }
}

export default Leaderboard;
