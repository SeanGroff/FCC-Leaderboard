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
      allTime: [' '],
      showRecent: true
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

  _handleClick(yesOrNo) {
    this.setState({
      showRecent: yesOrNo
    })
  }

  render() {
    return (
      <div className="table-wrapper">
        <div className="table-title">Free Code Camp Leaderboard</div>
        <Table
          rowsCount={ this.state.allTime.length }
          rowHeight={ 50 }
          headerHeight={ 50 }
          width={ 800 }
          height={ 500 }>
          <Column
            header={ <Cell>#</Cell> }
            cell={
              <Rank
                data={ this.state.showRecent ? this.state.recent : this.state.allTime }
                field='rank'
              />
            }
            fixed={ true }
            flexGrow={ 0 }
            align={ 'center' }
            width={ 50 }
          />
          <Column
            header={ <Cell>Camper Name</Cell> }
            cell={
              <Campers
                data={ this.state.showRecent ? this.state.recent : this.state.allTime }
                field='username'
              />
            }
            fixed={ true }
            flexGrow={ 2 }
            align={ 'center' }            
            width={ 200 }
            />
          <Column
            header={ <Cell className='hover' onClick={ () => this._handleClick(true) }>Points in last 30 days</Cell> }
            cell={
              <RecentPoints
                data={ this.state.showRecent ? this.state.recent : this.state.allTime }
                field='recent'
              />
            }
            fixed={ true }
            flexGrow={ 2 }   
            align={ 'center' }            
            width={ 200 }
            />
          <Column
            header={ <Cell className='hover' onClick={ () => this._handleClick(false) }>All time points</Cell> }
            cell={
              <AllTimePoints
                data={ this.state.showRecent ? this.state.recent : this.state.allTime }
                field='alltime'
              />
            }
            fixed={ true }
            flexGrow={ 2 }   
            align={ 'center' }            
            width={ 200 }
          />
        </Table>
      </div>
    );
  }
}

export default Leaderboard;
