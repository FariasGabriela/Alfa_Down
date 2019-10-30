import React, { Component } from 'react';
import Mapa from './../../components/Mapa/Mapa';
import { withStyles } from '@material-ui/core/styles';

const style = ({

})

class App extends Component {
  render() {

    return (
        <Mapa index={parseFloat(this.props.match.params.index)} />
    );
  }
}

export default withStyles(style)(App);
