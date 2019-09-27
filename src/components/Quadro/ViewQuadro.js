import React, { Component } from 'react';
import Quadro from './../../icons/Quadro.svg'
import Button from '../Button/Button';
import Speaker from './../../icons/speaker.svg'
import Proximo from './../../icons/right-arrow.svg';
import { withStyles } from '@material-ui/styles';

const styles = ({
  card: {
    '&:fade-out' : {
      opacity: 0.5
    },
    opacity: 1,
    transition: 'opacity 6s linear',
    backgroundColor: '#FFFFFF', 
    margin: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    boxShadow: '0px 6px 9px rgb(0, 0, 0, 0.2)',
    padding: 20,
    maxWidth: 600
  },
  image: {
    position: 'relative', 
    width: '80%'
  },
  img: {
    height: '100%',
    width: '100%'
  },
  quadro: {
    width: 150, 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  proximo: {
    height: '50%',
    display: 'flex',
    alignItems: 'flex-end', 
  },
  ouvir: {
    height: '50%',
    display: 'flex',
    alignItems: 'flex-start'
  }
})

class ViewQuadro extends Component {
  //constructor(props){
  //  super(props);

    
  //}

  componentDidMount(){
   
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.card}>
        <div className={classes.image} >
         <img   src={Quadro} 
                className={classes.img}
                alt="Quadro"/> {/*Referenciar criador*/}
          {this.props.children}
        </div>   
        <div className={classes.quadro} >
            <div className={classes.ouvir} >
                <Button  name={'Ouvir'} icon={Speaker} onClick={() => console.log("ouvir")}/>
            </div>
            <div className={classes.proximo}>
                <Button name={'Próximo'} icon={Proximo} onClick={this.props.onClickProximo} />
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ViewQuadro);
