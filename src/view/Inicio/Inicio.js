import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = ({
  card: {
    height: 'calc(100% - 100px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iniciar: {
    boxShadow: '0px 6px 9px rgb(0, 0, 0, 0.2)',
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
      width: '50%', 
  },
  title: {
    marginLeft: 20,
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    color: '#2A9D8F',
    fontSize: 50,
    width: '50%', 
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
    this.clickConta = this.clickConta.bind(this)
  }

  clickIcones(){
    this.props.history.push('/icons')
  }

  clickMetodo(){

  }

  clickConta(){
    this.props.history.push('/login')
  }

  render() {
    const {classes} = this.props;

    return (
        <div style={{width: '100%'}}>
          <div className={classes.head} > 
              <div className={classes.title} >
                AlfaDown
              </div>
              <div className={classes.barra} >
                  <div className={classes.itemBarra} onClick={this.clickIcones}>Ícones</div>
                  <div className={classes.itemBarra} onClick={this.clickConta}>Criar conta</div>
              </div>
          </div>

          <div className={classes.card}>
            <div className={classes.iniciar} onClick={() => this.props.history.push('/iniciar/0')}>INICIAR</div>
          </div>
        </div>
    );
  }
}

export default withStyles(style)(App);
