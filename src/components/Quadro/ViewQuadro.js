import React, { Component } from 'react';
import Quadro from './../../icons/Quadro.svg'
import Button from '../Button/Button';
import Speaker from './../../icons/speaker.svg'
import Proximo from './../../icons/right-arrow.svg'

class ViewQuadro extends Component {
  render() {
    return (
      <div style={{ 
          backgroundColor: '#FFFFFF', 
          margin: 60,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          borderRadius: 10,
          boxShadow: '0px 6px 9px rgb(0, 0, 0, 0.2)',
          padding: 20
        }} >
        <div style={{ position: 'relative', width: '80%' }} >
         <img   src={Quadro} 
                style={{ height: '100%', width: '100%' }}
                alt="Quadro"/> {/*Referenciar criador*/}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              fontSize: 196,
              height: '80%',
              width: '100%'
            }}>
              BA
            </div>
        </div>   
        <div style={{ 
            width: 150, 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }} >
            <div style={{ height: '50%' }} >
                <Button name={'Ouvir'} icon={Speaker} onClick={() => console.log("ouvir")}/>
            </div>
            <div style={{ 
                height: '50%',
                display: 'flex',
                alignItems: 'flex-end'
                }} >
                <Button name={'Próximo'} icon={Proximo} onClick={() => console.log("proximo")} />
            </div>
        </div>
      </div>
    );
  }
}

export default ViewQuadro;
