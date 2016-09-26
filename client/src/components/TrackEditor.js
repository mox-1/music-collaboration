import React, { Component } from 'react';

import { Song } from 'react-music';
import { RaisedButton, Paper } from 'material-ui';

import TempoController from './TempoController';
import AddLayer from './AddLayer';

class TrackEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: 150,
            playing: false
        }
    }

    _handlePlay = () => {
        this.setState({
            playing: !this.state.playing
        });
    }

    _setTempo = (tempo) => {
        this.setState({
            tempo: tempo
        });
    }

    _handleKeyDown = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault();
            this._handlePlay();
        }
    }

    _convertTempoToSliderValue = (tempo) => {
        // 40-200 to 0-1
        return (tempo - 40) / 160;
    }

    componentWillMount() {
        document.body.addEventListener('keydown', this._handleKeyDown);
    }

    render() {
        // Note: the Array.max of 'steps' must not exceed the resolution of the sequencer
        // To allow for multiple bars, we may have to pretend that the tempo is different
        return (
            <div className={'layer-wrapper'}>
                    <RaisedButton
                      label={this.state.playing ? 'Stop' : 'Play'}
                      secondary={true}
                      onTouchTap={this._handlePlay}
                      style={{margin: '14px 0px'}}
                    />
                    <Song tempo={this.state.tempo} playing={this.state.playing}>
                        <div className={'layers'}>
                            <AddLayer/>
                            <AddLayer showLights={true}/>
                        </div>
                    </Song>
                    <TempoController setTempo={this._setTempo} value={this._convertTempoToSliderValue(this.state.tempo)}/>
            </div>
        )
    }
}

export default TrackEditor;
