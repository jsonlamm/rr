import { connect } from 'react-redux';

import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = function (state, ownProps) {
  return {
    stations: convertSongsToStations(state.songs)
  };
}


function mapDispatchToProps(dispatch, ownProps) {
  return {

  }
}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer

