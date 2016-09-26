import React, { Component, PropTypes } from 'react';
import { Popover, FloatingActionButton, IconButton } from 'material-ui';

import TrackEditor from './TrackEditor';


class AddTrack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    _open = (event) => {
      event.preventDefault();
      this.setState({
        open: true,
        anchorEl: event.currentTarget,
      });
    };

    _handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };

    render() {
        return (
            <div>
                <IconButton onTouchTap={this._open} className={'add-icon-wrapper'} tooltip="Start new track">
                    <div className={'add-icon'}></div>
                </IconButton>
                <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  onRequestClose={this._handleRequestClose}
                >
                    <TrackEditor/>
                </Popover>
            </div>
        );
    }

}

export default AddTrack;
