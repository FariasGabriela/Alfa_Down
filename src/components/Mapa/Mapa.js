import React, { Component } from 'react';
import Play from './../../icons/play.svg';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Login from './Login';
import Modal from '@material-ui/core/Modal';
import iconFarmerOne from './../../icons/farmer.svg';
import iconFarmerTwo from './../../icons/farmer_second.svg';
import iconFarmerThree from './../../icons/farmer_three.svg';
import iconFarmerFour from './../../icons/farmer_four.svg';
import crown from './../../icons/crown.svg';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import Swal from 'sweetalert2';

const styles = ({
    img: {
        height: 50,
        width: 50,
        marginTop: -5
    },
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
      },
      modal: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        height: 300,
        width: 400,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 5,
        fontSize: 20
      },
      cardModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      },
})

class Mapa extends Component {
    constructor(props){
        super(props)
        window.soundManager.setup({ debugMode: false });

        this.state = {
            allIconsFarmer: [iconFarmerOne, iconFarmerTwo, iconFarmerThree, iconFarmerFour],
            iconFarmer: iconFarmerOne,
            open: true,
            name: 'Amigo',
            nivel: 0,
            index: 0,
            vogal: 0,
            item: 'silaba'
        }

        this.clickIniciar = this.clickIniciar.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.clickSalvar = this.clickSalvar.bind(this);
        this.criarConta = this.criarConta.bind(this);

    }

    clickIniciar() {
        this.props.history.push('/' + this.state.item +'/'+ this.state.vogal +'/' + this.state.index)
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged(doc => {
            if (doc) {
                this.getDados(doc.uid);

                this.setState({
                    open: false
                })
            }
            
        })
    }

    handleClose(name, senha){
        this.setState({
            open: false,
        })

        if (name === undefined && senha === undefined) {
            var user = firebase.auth().currentUser;

            this.getDados(user.uid);
        } else {
            Swal.fire({
                title: 'Carregando',
                imageWidth: 400,
                imageHeight: 200,
              })

            Swal.showLoading();

            firebase.auth().signInWithEmailAndPassword(name, senha).then((doc) =>{
                firebase.firestore().collection("Usuario").doc(doc.user.uid).get().then((user) => {
                    Swal.close();

                    var userLogin = firebase.auth().currentUser;

                    this.getDados(userLogin.uid);
                }).catch((err) => {
                    Swal.fire('Ocorreu um erro ao realizar o login')
                })
            }).catch((err) => {
                Swal.fire('Ocorreu um erro ao realizar o login')
            })
        }
        
    }

    getDados(uid){
        firebase.firestore().collection("Usuario").doc(uid).get().then((user) => {
            this.setState({
                iconFarmer: this.state.allIconsFarmer[user.data().indexItem],
            })
        })

        firebase.firestore().collection("Progresso").doc(uid).get().then((user) => {
            this.setState({
                item: user.data().atividade,
                index: user.data().index,
                vogal: user.data().vogal,
                nivel: user.data().vogal,
            })
        })
    }

    clickSalvar(infoUser){
        this.setState({
            open: false,
            iconFarmer: this.state.allIconsFarmer[infoUser.indexItem]
        })

        var user = firebase.auth().currentUser;

        this.getDados(user.uid);
    }

    criarConta(){
        this.props.history.push('/login')
    }
  
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.card} >
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div className={classes.cardModal}>
                        <div className={classes.modal}>
                         <Login criarConta={this.criarConta} clickSalvar={this.clickSalvar} clickFechar={this.handleClose} />
                    </div>
                    </div>
                </Modal>
                <div className={classes.head} > 
                    <div className={classes.barra} >
                        <img src={this.state.iconFarmer} 
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
                    <div className={classes.letras} style={{marginLeft: 80, backgroundColor: this.state.nivel > 2 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 2 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>U</div>
                    <div style={{width: 'calc(100% - 320px)', borderBottom: this.state.nivel > 2 ? '5px solid #3E5151' : '5px solid #bdc3c7'}}/>
                    <div className={classes.letras} style={{marginRight: 80, backgroundColor: this.state.nivel > 3 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 3 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>I</div>
                    </div>
                    <div className={classes.meiaLuaLeft} style={{boxShadow: this.state.nivel > 3 ? '7px 0px 0 0 #3E5151' : '7px 0px 0 0 #bdc3c7'}} />
                    <div className={classes.cardMapa}>
                    <div className={classes.letras} style={{marginLeft: 80, backgroundColor: this.state.nivel > 4 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 4 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>E</div>
                    <div style={{width: 'calc(100% - 320px)', borderBottom: this.state.nivel > 4 ? '5px solid #3E5151' : '5px solid #bdc3c7'}} />
                    <div className={classes.letras} style={{marginRight: 80, backgroundColor: this.state.nivel > 5 ? '#1f4037' : '#11998e', boxShadow: this.state.nivel > 5 ? '2px 0px 10px 0px #3C3B3F' : 'none'}}>
                        <img   src={crown} 
                            className={classes.img}
                            alt="Quadro"/>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
  
}

export default withRouter(withStyles(styles)(Mapa));
