import React, { Component } from 'react';
import Farmer from './../../icons/farmer.svg';
import Play from './../../icons/play.svg';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'

const styles = ({
    card: {
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
    }
})

class Mapa extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'João'
        }
    }
  
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.card} > 
                    <div className={classes.barra} >
                        <img src={Farmer} 
                        style={{ height: 60, width: 42 }}
                        alt="Personagem" /> {/*Referenciar criador*/}

                        <p className={classes.frase}> 
                            Olá {this.state.name}, veja como está sua evolução
                        </p>
                    </div>

                    <div className={classes.button} >
                        <img src={Play} 
                            onClick={() => { this.props.history.push('/palavra')}}
                            className={classes.icon}
                            alt="Play" /> {/*Referenciar criador*/}
                         <p onClick={() => { this.props.history.push('/palavra')}}
                            className={classes.iniciar}> 
                            Iniciar
                        </p>
                    </div>
            </div>
        )
    }
  
}

export default withRouter(withStyles(styles)(Mapa));
