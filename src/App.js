import React, { Component } from 'react';
import './App.css';
import Inicio from './view/Inicio/Inicio';
import { withStyles } from '@material-ui/styles';

const style = ({
  card: {
    backgroundColor: '#E0FBFC',
    display: 'flex',
    position: 'absolute',
    overflow: 'hidden',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
})

class App extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.card} >
        <Inicio />
      </div>
    );
  }
}

export default withStyles(style)(App);
