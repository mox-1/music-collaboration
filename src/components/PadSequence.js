import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';
import Pad from './Pad';

class PadSequence extends Component {
    static contextTypes = {
      audioContext: PropTypes.object,
      bars: PropTypes.number,
      barInterval: PropTypes.number,
      bufferLoaded: PropTypes.func,
      connectNode: PropTypes.object,
      getMaster: PropTypes.func,
      resolution: PropTypes.number,
      scheduler: PropTypes.object,
      tempo: PropTypes.number,
    };

    static propTypes = {
        showLights: PropTypes.bool,
        setSteps: PropTypes.func.isRequired,
        steps: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            activeLight: 0,
        };
    }

    componentDidMount() {
        // need to add unique key in case of multiple lights
        if (this.props.showLights) {
            this.id = uuid.v1();
            const master = this.context.getMaster();
            master.instruments[this.id] = this._playLights;
        }
    }

    componentWillUnmount() {
        if (this.props.showLights) {
            const master = this.context.getMaster();
            delete master.instruments[this.id];
        }
    }

    _playLights = (playbackTime) => {
        for(var i = 0; i < this.context.resolution; i++) {
            var offset = i * (this.context.barInterval / this.context.resolution) / 1000;
            this.context.scheduler.insert(playbackTime + offset, this._turnOnLight, {
              index: i
            });
        }
    }

    _turnOnLight = (e) => {
        this.setState({
            activeLight: e.args.index
        });
    }

    _setSteps = (i) => {
        this.props.setSteps(i);
    }

    render() {
        var pads = [];
        for(var i = 0; i < this.context.resolution; i++) {
            pads.push(<Pad key={i} index={i} showLights={this.props.showLights} setSteps={this._setSteps} activePad={!!~this.props.steps.indexOf(i)} activeLight={this.state.activeLight === i}/>);
        }
        return (
            <div className={'pad-wrapper'}>
                {pads}
            </div>
        );
    }
}

export default PadSequence;
