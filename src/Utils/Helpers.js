import Axios from 'axios';

let getRecentTopCampers = () => {
  return Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

let getAllTimeTopCampers = () => {
  return Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

let helpers = {
  getTopCampersInfo: () => {
    return Axios.all([getRecentTopCampers(), getAllTimeTopCampers()])
      .then((campersInfo) => {
        return {
          recent: campersInfo[0],
          allTime: campersInfo[1]
        }
      });
  }
}

export default helpers;