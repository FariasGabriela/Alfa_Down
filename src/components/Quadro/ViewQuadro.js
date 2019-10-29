import React, { Component } from 'react';
import Quadro from './../../icons/Quadro.svg'
import Button from '../Button/Button';
import Speaker from './../../icons/speaker.svg'
import Proximo from './../../icons/right-arrow.svg';
import { withStyles } from '@material-ui/core/styles';
import cross from './../../icons/cross.svg';
import info from './../../icons/info.svg';
import back from './../../icons/back.svg';

const styles = ({
  card: { 
    transition: 'opacity 1s linear',
    backgroundColor: '#FFFFFF', 
    margin: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    boxShadow: '0px 6px 9px rgb(0, 0, 0, 0.2)',
    padding: 20,
    maxWidth: 750
  },
  image: {
    position: 'relative', 
    width: '100%'
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
  },
  buttonClose: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
    cursor: 'pointer'
  },
  buttonInfo: {
    height: 30,
    width: 55,
    position: 'absolute',
    top: 0,
    right: 30,
    padding: 20,
    cursor: 'pointer'
  },
  buttonBack: {
    height: 0,
    width: 55,
    position: 'absolute',
    top: 0,
    left: 30,
    padding: 20,
    cursor: 'pointer',
    paddingLeft: 10
  }
})

class ViewQuadro extends Component {
  constructor(props){
    super(props);

    this.state = {
      opacity: false
    }

    this.changeOpacity = this.changeOpacity.bind(this);
    
  }

  componentDidMount(){
    setTimeout(() => { 
      this.changeOpacity()
    }, 100);
   
  }

  changeOpacity(){
    this.setState({
      opacity: true
    })
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.card} style={{ opacity: this.state.opacity ? 1 : 0 }}>
        <img src={cross} 
              onClick={this.props.clickClose}
              className={classes.buttonClose}
              alt="Fechar" /> 
        <img src={info} 
              onClick={this.props.clickInfo}
              className={classes.buttonInfo}
              alt="Fechar" /> 
        <img src={back} 
              onClick={this.props.clicBack}
              className={classes.buttonBack}
              alt="Fechar" /> 

        <div className={classes.image} >
         <img   src={Quadro} 
                className={classes.img}
                alt="Quadro"/> 
          {this.props.children}
        </div>   
        <div className={classes.quadro} >
            { this.props.noShow && <div className={classes.ouvir} >
            </div> }
            { !this.props.noShow && <div className={classes.ouvir} >
                <Button  name={'Ouvir'} icon={Speaker} onClick={this.props.onClickOuvir}/>
            </div> }
            <div className={classes.proximo}>
                <Button name={'Próximo'} icon={Proximo} onClick={this.props.onClickProximo} />
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ViewQuadro);
