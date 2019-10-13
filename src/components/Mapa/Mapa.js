import React, { Component } from 'react';
import Farmer from './../../icons/farmer.svg';
import Play from './../../icons/play.svg';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'

const styles = ({
    card: {
        width: '100%',
        height: '100%'
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
        width: '100%', 
        marginLeft: 30
    },
    frase : { 
        fontSize: 25, 
        color: 'rgb(112, 112, 122)', 
        marginLeft: 25 
    },
    button: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 100,
        width: 100,
        flexDirection: 'column'
    },
    iniciar: {
        margin: 0,
        marginTop: 5,
        fontSize: 20, 
        color: 'rgb(112, 112, 122)', 
        cursor: 'pointer'
    },
    icon: {
        height: 40, 
        width: 40 ,
        cursor: 'pointer'
    },
    meiaLuaRight: {
        position: 'absolute',
        margin: 'auto',
        top: -65,
        right: 40,
        bottom: 0,
        width: 126,
        height: 192,
        backgroundColor: 'transparent',
        borderRadius: '50%',
      },
      meiaLuaLeft: {
        transform: 'rotate(180deg)',
        position: 'absolute',
        margin: 'auto',
        left: 45,
        bottom: 60,
        width: 126,
        height: 192,
        backgroundColor: 'transparent',
        borderRadius: '50%',
      },
      body: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column'
      },
      lineReta: {
        borderBottom: '5px solid #3E5151',
      },
      cardMapa: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      letras: {
        zIndex: 1000,
        height: 80,
        width: 80, 
        color: '#FFFFFF',
        fontSize: 40,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%'
      }
})

class Mapa extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Amigo',
            nivel: 2
        }

        this.clickIniciar = this.clickIniciar.bind(this);
    }

    clickIniciar() {
        //ToDo: Validar nível para iniciar
        this.props.history.push('/silaba/a/0')
    }

    componentDidMount(){
        //ToDo: Requisição Login: Name e Nível
        //Ou URL se nao tiver Login
    }
  
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.card} >
                <div className={classes.head} > 
                    <div className={classes.barra} >
                        <img src={Farmer} 
                        style={{ height: 60, width: 42 }}
                        alt="Personagem" /> {/*Referenciar criador*/}

                        <p className={classes.frase}> 
                            Olá {this.state.name}, veja como está sua evolução
                        </p>
                    </div>

                    <div className={classes.button} onClick={this.clickIniciar} >
                        <img src={Play} 
                            className={classes.icon}
                            alt="Play" /> {/*Referenciar criador*/}
                         <p className={classes.iniciar}> 
                            Iniciar
                        </p>
                    </div>
                </div>
                
                <div className={classes.body}>
                    <div className={classes.cardMapa}>
                    <div className={classes.letras} style={{marginLeft: 80, backgroundColor: this.state.nivel > 0 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 0 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>A</div>
                    <div style={{width: 'calc(100% - 320px)', borderBottom: this.state.nivel > 0 ? '5px solid #3E5151' : '5px solid #bdc3c7',}} />
                    <div className={classes.letras} style={{marginRight: 80, backgroundColor: this.state.nivel > 1 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 1 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>O</div>
                    </div>
                    <div className={classes.meiaLuaRight} style={{boxShadow: this.state.nivel > 1 ? '7px 0px 0 0 #3E5151' : '7px 0px 0 0 #bdc3c7'}} />
                    <div className={classes.cardMapa}>
                    <div className={classes.letras} style={{marginLeft: 80, backgroundColor: this.state.nivel > 2 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 2 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>I</div>
                    <div style={{width: 'calc(100% - 320px)', borderBottom: this.state.nivel > 2 ? '5px solid #3E5151' : '5px solid #bdc3c7'}}/>
                    <div className={classes.letras} style={{marginRight: 80, backgroundColor: this.state.nivel > 3 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 3 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>E</div>
                    </div>
                    <div className={classes.meiaLuaLeft} style={{boxShadow: this.state.nivel > 3 ? '7px 0px 0 0 #3E5151' : '7px 0px 0 0 #bdc3c7'}} />
                    <div className={classes.cardMapa}>
                    <div className={classes.letras} style={{marginLeft: 80, backgroundColor: this.state.nivel > 4 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 4 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>U</div>
                    <div style={{width: 'calc(100% - 320px)', borderBottom: this.state.nivel > 4 ? '5px solid #3E5151' : '5px solid #bdc3c7'}} />
                    <div className={classes.letras} style={{marginRight: 80, backgroundColor: this.state.nivel > 5 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 5 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>FI</div>
                    </div>
                </div>

            </div>
        )
    }
  
}

export default withRouter(withStyles(styles)(Mapa));
