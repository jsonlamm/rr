import { connect } from 'react-redux';

import Station from '../components/Station';
import { toggleSong } from '../action-creators/player';
import { convertSong } from '../utils';


const mapStateToProps = function (state, ownProps) {
  // console.log('ownprops', ownProps)
  // console.log('stations container state', state)

  return {
    genreName: ownProps.params.genreName,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong)
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};


const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;

