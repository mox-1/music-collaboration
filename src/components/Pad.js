import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';

class Pad extends Component {

    _setSteps = () => {
        this.props.setSteps(this.props.index);
    }

    render() {
        return (
            <Paper className={'pad' + (this.props.activePad ? ' active' : '')} onTouchTap={this._setSteps}>
                { this.props.showLights && <div className={'pad-light' + (this.props.activeLight ? ' active' : '')}></div>}
            </Paper>
        );
    }
}

Pad.propTypes = {
    showLights: PropTypes.bool,
    index: PropTypes.number,
    activeLight: PropTypes.bool,
    activePad: PropTypes.bool,
    setSteps: PropTypes.func
}

export default Pad;
