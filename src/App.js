import React, { Component } from 'react';
import './App.css';
//import Mapa from './components/Mapa/Mapa'
import Palavra from './view/Atividades/AtividadePalavras';

class App extends Component {
  render() {
    return (
      <div style={{ 
        backgroundColor: '#E0FBFC',
        display: 'flex',
        position: 'absolute',
        overflow: 'hidden',
        flex: 1,
        width: '100%',
        height: '100%'
        }} >
        <Palavra />
      </div>
    );
  }
}

export default App;
