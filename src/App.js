import React, { Component } from 'react';
import './App.css';
import Inicio from './view/Inicio/Inicio';
import { withStyles } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Atividade from './view/Atividades/AtividadePalavras';
import Palavra from './view/Atividades/Palavras';

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
      <div className={classes.card}>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Inicio} />
              <Route path="/palavra" component={Palavra} />
              <Route path="/atividade" component={Atividade} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(style)(App);
