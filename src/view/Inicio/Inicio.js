import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const style = ({
  card: {
    height: 'calc(100% - 100px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iniciar: {
    fontSize: 40,
    height: 100,
    width: 200,
    backgroundColor: 'rgb(17, 153, 142)',
    cursor: 'pointer',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: '#FFFFFF'
  },
  menu: {
    height: 40,
    width:  '100%'
  },
  head: {
    height: 100, 
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF' 
  },
  barra: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end',
      width: '100%', 
  },
  itemBarra: {
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
})

class App extends Component {
  constructor(props){
    super(props);

    this.clickIcones = this.clickIcones.bind(this);
    this.clickMetodo = this.clickMetodo.bind(this);
  }

  clickIcones(){
    this.props.history.push('/icons')
  }

  clickMetodo(){

  }

  render() {
    const {classes} = this.props;

    return (
        <div style={{width: '100%'}}>
          <div className={classes.head} > 
              <div className={classes.barra} >
                  <div className={classes.itemBarra} onClick={this.clickIcones}>Ícones</div>
                  <div className={classes.itemBarra} onClick={this.clickMetodo}>Abacada</div>
              </div>
          </div>

          <div className={classes.card}>
            <div className={classes.iniciar} onClick={() => this.props.history.push('/iniciar')}>INICIAR</div>
          </div>
        </div>
    );
  }
}

export default withStyles(style)(App);
