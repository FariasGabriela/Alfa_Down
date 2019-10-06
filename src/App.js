import React, { Component } from 'react';
import './App.css';
import Inicio from './view/Inicio/Inicio';
import { withStyles } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AtividadeSilabas from './view/Silabas/AtividadeSilabas';
import Silaba from './view/Silabas/Silabas';
import Palavra from './view/Palavras/Palavras';
import AtividadeMontarPalavra from './view/Palavras/AtividadeMontarPalavra';
import AtividadeLigarPalavras from './view/Palavras/AtividadeLigarPalavras';
import Frase from './view/Frase/Frase';
import AtividadeVogalFrase from './view/Frase/AtividadeVogalFrase';

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
              <Route path="/silaba/:vogal/:index" component={Silaba} />
              <Route path="/atividade/:vogal/:index" component={AtividadeSilabas} />
              <Route path="/palavra/:vogal/:index" component={Palavra} />
              <Route path="/atividade-palavra/:vogal/:index" component={AtividadeMontarPalavra} />
              <Route path="/atividade-ligar/:vogal/:index" component={AtividadeLigarPalavras} />
              <Route path="/frase/:vogal/:index" component={Frase} />
              <Route path="/atividade-frase-vogal/:vogal/:index" component={AtividadeVogalFrase} /> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(style)(App);
