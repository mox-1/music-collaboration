import React, { Component, PropTypes } from 'react';
import { IconButton, Paper, RaisedButton, FloatingActionButton } from 'material-ui';
import {
  Sequencer,
  Sampler
} from 'react-music';
import PadSequence from './PadSequence';


class AddLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSample: null,
            steps: []
        }
    }

    static propTypes = {
        showLights: PropTypes.bool
    }

    _handleSampleInput = (e) => {
        var files = this._input.files;
        var file = URL.createObjectURL(files[0]);
        this.setState({
            currentSampleName: files[0].name,
            currentSample: file
        });
    }

    _setSteps = (i) => {
        let steps = this.state.steps.slice();
        let indx = steps.indexOf(i);
        if (~indx) {
            steps.splice(indx, 1);
            this.setState({
                steps: steps
            });
        } else {
            this.setState({
                steps: steps.concat([i])
            });
        }
    }

    render() {
        var buttonStyle = {
            display: 'inline-block',
            left: -30,
            top: 0,
            verticalAlign: 'top',
            margin: '10px 0px',
            position: 'relative'
        };
        return (
            <div className={'layer'}>
                <FloatingActionButton containerElement='label' style={buttonStyle} secondary={!this.state.currentSampleName}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
                    <input id="audio_file" type="file" accept="audio/*" onChange={this._handleSampleInput} ref={(c) => this._input = c}  />
                </FloatingActionButton>
                <Sequencer resolution={8} bars={1}>
                    <PadSequence setSteps={this._setSteps} steps={this.state.steps} showLights={this.props.showLights}/>
                    {this.state.currentSample && <Sampler sample={this.state.currentSample} steps={this.state.steps}/>}
                </Sequencer>
                {this.state.currentSampleName && <span className={'file-uploaded'}>{this.state.currentSampleName}</span>}
            </div>
        )
    }
}

export default AddLayer;
