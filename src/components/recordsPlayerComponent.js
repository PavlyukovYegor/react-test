import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import {Player, ControlBar, BigPlayButton, LoadingSpinner} from 'video-react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import "./video-react.css";

const sources = {
    bunnyMovie: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};

ControlBar.propTypes = {
    autoHide: PropTypes.bool
};

BigPlayButton.propTypes = {
    position: PropTypes.string
};

export default class RecordsPlayer extends Component {

  constructor(props, context) {
      super(props, context);

      this.state = {
          source: sources['bunnyMovie'],
      };
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-8 col-md-offset-2">
              <Player ref="player">
                  <source src={this.state.source}/>
                  <BigPlayButton position='center'/>
                  <ControlBar autoHide={false}/>
              </Player>
          </div>
      </div>
    );
  }

}
