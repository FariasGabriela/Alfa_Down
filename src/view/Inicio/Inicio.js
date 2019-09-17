import React, { Component } from 'react';
import Mapa from './../../components/Mapa/Mapa';
import { withStyles } from '@material-ui/styles';

const style = ({

})

class App extends Component {
  render() {
    return (
        <Mapa />
    );
  }
}

export default withStyles(style)(App);
