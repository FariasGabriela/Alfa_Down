import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import Texto01 from './../../Audios/Texto/texto01.mp3';
import Texto02 from './../../Audios/Texto/texto02.mp3';
import Texto03 from './../../Audios/Texto/texto03.mp3';
import Texto04 from './../../Audios/Texto/texto04.mp3';
import Texto05 from './../../Audios/Texto/texto05.mp3';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import * as animationData from './../../icons/winFase.json';
import Modal from '@material-ui/core/Modal';

const style = ({
    divButton: {
        cursor: 'pointer',
        font: 20,
        height: 70,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(42, 157, 143)',
        borderRadius: 10,
        marginBottom: 15
    },
    divModal: {
        transition: 'opacity 1s linear',
        flexDirection: 'column',
        width: '50%', 
        height: '50%', 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        transition: 'opacity 1s linear',
        width: '100%', 
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        position: 'absolute',
        top: -10,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        height: '85%',
        width: '100%',
        flexDirection: 'column'
    }
})

class Texto extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            animation: false,
            open: false,
            frase: [],
            frasesUtilizadas0: [
                {
                    name: 'A GATA NA MALA',
                    index: 0
                },
                {
                    name: 'A GATA NA CAMA',
                    index: 1
                },
                {
                    name: 'A GATA NA SALA',
                    index: 2
                },
                {
                    name: 'A GATA NA LATA',
                    index: 3
                },
            ],
            sound: Texto01,
            frasesUtilizadas1: [
                {
                    name: 'O SAPATO DO RATO',
                    index: 0
                },
                {
                    name: 'O ROBÔ DO SAPO',
                    index: 1
                },
                {
                    name: 'O SOFÁ DO GATO',
                    index: 2
                },
                {   name: 'O DADO DO CAVALO',
                    index: 3
                },
            ],
            frasesUtilizadas2: [
                {
                    name: 'JOÃO CORTA PAU',
                    index: 0
                },
                {
                    name: 'MARIA MEXE SAGU',
                    index: 1,
                },
                {
                    name: 'TEREZA PÕE A MESA',
                    index: 2,

                },
                {
                    name: 'PARA A FESTA DO TATU',
                    index: 3
                }
            ],
            frasesUtilizadas3: [
                {
                    name: 'A MOTO DO MACACO',
                    index: 0
                },
                {   
                    name: 'A BOLA DA FOCA',
                    index: 1
                },
                {   
                    name: 'O RATO ROEU O QUEIJO',
                    index: 2
                },
                {   
                    name: 'O RÁDIO TOCA A MÚSICA',
                    index: 3
                }
            ],
            frasesUtilizadas4: [
                {   
                    name: 'O PÁSSARO VOA NO CÉU',
                    index: 0
                },
                {   
                    name: 'ANA FAZ DOCE DE ABACAXI',
                    index: 1
                },
                {   
                    name: 'O AVIÃO TEM ASAS',
                    index: 2
                },
                {   
                    name: 'O ABACATE TEM CAROÇO',
                    index: 3
                }
            ],
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);
        this.clickBack = this.clickBack.bind(this);
    }

    componentDidMount(){

        var frases = [
            this.state.frasesUtilizadas0,
            this.state.frasesUtilizadas2,
            this.state.frasesUtilizadas1,
            this.state.frasesUtilizadas3,
            this.state.frasesUtilizadas4
        ]

        var audio = null;

        if (parseFloat(this.props.match.params.index) === 0) {
            audio = Texto01;
        } else if (parseFloat(this.props.match.params.index) === 1) {
            audio = Texto02;
        } else if (parseFloat(this.props.match.params.index) === 2) {
            audio = Texto03;
        } else if (parseFloat(this.props.match.params.index) === 3) {
            audio = Texto04;
        } else if (parseFloat(this.props.match.params.index) === 4) {
            audio = Texto05;
        }

        this.setState({
            sound: audio,
            frase: frases[parseFloat(this.props.match.params.index)]
        }, () => {
            this.setState({
                play: Sound.status.PLAYING
            })
        })
        
    }

    clickProximo(){
        
        firebase.auth().onAuthStateChanged(doc => {
            if (doc){
                firebase.firestore().collection("Progresso").doc(doc.uid).set({
                    atividade: 'silaba',
                    vogal: parseFloat(this.props.match.params.index) + 1,
                    index: 0
                })
            }

            this.setState({
                open: true,
                animation: false
            }, () => {
                setTimeout(() => { 
                    this.setState({
                        animation: true
                    })
                }, 1800)
            })
        })
    }

    clickOuvir(){
        this.setState({
            play: Sound.status.PLAYING
        })
    }

    clickClose(){
        this.props.history.push('/')
    }

    clickInfo(){
        Swal.fire(
            'Texto',
            'Veja o texto e escute a sua pronúncia clicando no botão ouvir',
            'question'
        )
    }

    clickBack(){
        this.props.history.push(
            '/frase/' + this.props.match.params.index
        )
    }

    render() {
        const {classes} = this.props;
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }
        
        return (
            <ViewQuadro 
                clickBack={this.clickBack}
                clickInfo={this.clickInfo}
                clickClose={this.clickClose}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                    {this.state.frase.map(doc => {
                        return (
                            <div key={doc.index} style={{height: 50, marginBottom: 10}}>
                                {doc.name}
                            </div>
                        )
                    })}
                </div>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                    open={this.state.open}
                    >
                    <div className={classes.divModal}>
                            <Lottie options={defaultOptions}
                                    height={300}
                                    width={300}
                                    isStopped={false}
                                    isPaused={this.state.animation}/>
                        <div className={classes.divButton}
                                onClick={() => this.props.history.push('/iniciar/' + parseFloat(this.props.match.params.index))}> 
                                Continuar 
                        </div>
                    </div>
                    
                </Modal>
                
                <Sound
                    url={this.state.sound}
                    playStatus={this.state.play}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {
                            this.setState({
                                play: Sound.status.PAUSED
                            })
                    }}
                />
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(Texto);
