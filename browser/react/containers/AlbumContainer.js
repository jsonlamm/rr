import { connect } from 'react-redux';

import Album from '../components/Album';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';


const mapStateToProps = function (state, ownProps) {
  // console.log('ownprops', ownProps)
  console.log('album container state', state)

  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};


const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

export default AlbumContainer;


/*import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle(song, list) {
    store.dispatch(toggleSong(song, list));
  }

  render() {
    return <Album
      selectedAlbum={this.state.albums.selected}
      currentSong={this.state.player.currentSong}
      isPlaying={this.state.player.isPlaying}
      toggleOne={this.toggle}
    />;
  }

}*/