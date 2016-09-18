import React, { Component, PropTypes } from 'react';
import TempoConstants from '../constants/TempoConstants';
import { Slider, Paper } from 'material-ui';

class TempoController extends Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
        setTempo: PropTypes.func.isRequired
    }

    _convertSliderValueToTempo = (x) => {
        // 0-1 to 40-200
        return x * 160 + 40;
    }

    _handleSliderChange = (x, y) => {
        this.props.setTempo(Math.round(this._convertSliderValueToTempo(y)));
    }

    render() {
        return (
            <div className={'tempo-controller'}>
                <Paper secondary={true} rounded={true} zDepth={2} style={{height: 50, width: 200, margin: '0px auto'}}>
                    <div className={'slider-wrapper'}>
                        <Slider style={{width: '80%', margin: '0px auto'}} name={'Tempo'} onChange={this._handleSliderChange} value={this.props.value} axis={'x'}/>
                    </div>
                    <div className={'tempo-display-wrapper'}>
                        {this._convertSliderValueToTempo(this.props.value)}
                    </div>
                </Paper>
            </div>
        )
    }
}

export default TempoController;
