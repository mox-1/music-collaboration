import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500, lightBlue50} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AddTrack from './components/AddTrack';
import logo from './logo.svg';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
          <MuiThemeProvider muiTheme={muiTheme}>
              <AddTrack/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
