import React, { Component } from 'react';
import Farmer from './../../icons/farmer.svg'
import Play from './../../icons/play.svg'

class Mapa extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'João'
        }
    }
  
    render(){
        return (
            <div style={{ 
                height: 100, 
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF' }} > 
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: 30 }} >
                        <img src={Farmer} 
                        style={{ height: 60, width: 42 }}
                        alt="Personagem" /> {/*Referenciar criador*/}

                        <p style={{ fontSize: 25, color: 'rgb(112, 112, 122)', marginLeft: 25 }}> 
                            Olá {this.state.name}, veja como está sua evolução
                        </p>
                    </div>

                    <div 
                    style={{ display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: 100,
                    width: 100,
                    flexDirection: 'column' }} >
                        <img src={Play} 
                            style={{ height: 40, width: 40 }}
                            alt="Play" /> {/*Referenciar criador*/}
                         <p style={{ 
                             margin: 0,
                             marginTop: 5,
                             fontSize: 20, 
                             color: 'rgb(112, 112, 122)' }}> 
                            Iniciar
                        </p>
                    </div>
            </div>
        )
    }
  
}

export default Mapa;
