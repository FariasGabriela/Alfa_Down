import React, { Component } from 'react';
import './App.css';
//import Mapa from './components/Mapa/Mapa'
import ViewQuadro from './components/Quadro/ViewQuadro';

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
        <ViewQuadro />
      </div>
    );
  }
}

export default App;
