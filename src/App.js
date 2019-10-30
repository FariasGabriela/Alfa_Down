import React, { Component } from 'react';
import './App.css';
import Inicio from './view/Inicio/Inicio';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AtividadeSilabas from './view/Silabas/AtividadeSilabas';
import Silaba from './view/Silabas/Silabas';
import Palavra from './view/Palavras/Palavras';
import AtividadeMontarPalavra from './view/Palavras/AtividadeMontarPalavra';
import AtividadeLigarPalavras from './view/Palavras/AtividadeLigarPalavras';
import Frase from './view/Frase/Frase';
import AtividadeMontarFrase from './view/Frase/AtividadeMontarFrase';
import Login from './view/Login/Login';
import ListIcons from './view/ListIcons/ListIcons';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import Texto from './view/Texto/Texto';
import IniciarMapa from './view/Inicio/InicioMapa';

var firebaseConfig = {
  apiKey: "AIzaSyBjXbuYW6HQqNrPsOiB1mNXxuIZcW8eqls",
  authDomain: "alfa-down.firebaseapp.com",
  databaseURL: "https://alfa-down.firebaseio.com",
  projectId: "alfa-down",
  storageBucket: "",
  messagingSenderId: "796685600919",
  appId: "1:796685600919:web:fda0859a27b59d19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
              <Route path="/iniciar/:index" component={IniciarMapa} />
              <Route path="/silaba/:vogal/:index" component={Silaba} />
              <Route path="/atividade/:vogal/:index" component={AtividadeSilabas} />
              <Route path="/palavra/:vogal/:index" component={Palavra} />
              <Route path="/atividade-palavra/:vogal/:index" component={AtividadeMontarPalavra} />
              <Route path="/atividade-ligar/:vogal/:index" component={AtividadeLigarPalavras} />
              <Route path="/frase/:index" component={Frase} />
              <Route path="/atividade-frase/:index" component={AtividadeMontarFrase} /> 
              <Route path="/texto/:index" component={Texto} />
              <Route path="/login" component={Login} />
              <Route path="/icons" component={ListIcons} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(style)(App);
