import React, { Component } from 'react';
import Mapa from './../../components/Mapa/Mapa';
import { withStyles } from '@material-ui/styles';

const style = ({
  meiaLuaRight: {
    position: 'absolute',
    margin: 'auto',
    top: -65,
    right: 40,
    bottom: 0,
    width: 126,
    height: 192,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    boxShadow: '7px 0px 0 0 #3E5151'
  },
  meiaLuaLeft: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    margin: 'auto',
    left: 45,
    bottom: 60,
    width: 126,
    height: 192,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    boxShadow: '7px 0px 0 0 #3E5151'
  },
  body: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column'
  },
  lineReta: {
    borderBottom: '5px solid #3E5151',
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  letras: {
    zIndex: 1000,
    height: 80,
    width: 80,
    backgroundColor: '#1f4037',
    color: '#FFFFFF',
    fontSize: 40,
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    boxShadow: '2px 0px 10px 0px #3C3B3F'
  }
})

class App extends Component {
  render() {
    const {classes} = this.props;

    return (
        <Mapa>
          <div className={classes.body}>
            <div className={classes.card}>
              <div className={classes.letras} style={{marginLeft: 80}}>A</div>
              <div className={classes.lineReta} style={{width: 'calc(100% - 320px)'}} />
              <div className={classes.letras} style={{marginRight: 80}}>O</div>
            </div>
            <div className={classes.meiaLuaRight} />
            <div className={classes.card}>
              <div className={classes.letras} style={{marginLeft: 80}}>I</div>
              <div className={classes.lineReta} style={{width: 'calc(100% - 320px)'}}/>
              <div className={classes.letras} style={{marginRight: 80}}>E</div>
            </div>
            <div className={classes.meiaLuaLeft} />
            <div className={classes.card}>
              <div className={classes.letras} style={{marginLeft: 80, backgroundColor: '#6be585', boxShadow: 'none'}}>U</div>
              <div className={classes.lineReta} style={{width: 'calc(100% - 320px)'}} />
              <div className={classes.letras} style={{marginRight: 80, backgroundColor: '#6be585', boxShadow: 'none'}}>FI</div>
            </div>
          </div>
        </Mapa>
    );
  }
}

export default withStyles(style)(App);
