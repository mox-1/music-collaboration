import React, { Component } from 'react';

import {
  Analyser,
  Song,
  Sequencer,
  Sampler,
  Synth,
} from 'react-music';

class BeatGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            currentSample: null,
        }
    }

    _handleSampleInput = (e) => {
        var files = this._input.files;
        var file = URL.createObjectURL(files[0]);
        this.setState({
            currentSample: file
        });
    }

    _handlePlay = () => {
        this.setState({
            playing: !this.state.playing
        });
    }

    render() {
        return (
            <div>
                <input id="audio_file" type="file" accept="audio/*" onChange={this._handleSampleInput} ref={(c) => this._input = c}  />
                <input type="button" onClick={this._handlePlay}/>
                <Song tempo={90} playing={this.state.playing}>
                    <Sequencer resolution={16} bars={1}>
                        {this.state.currentSample && <Sampler sample={this.state.currentSample} steps={[0, 2, 8, 10]}/>}
                    </Sequencer>
                </Song>
            </div>
        )
    }
}

export default BeatGrid;
