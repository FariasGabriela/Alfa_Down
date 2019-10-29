import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import aBolaDaFoca from './../../Audios/Frases/aBolaDaFoca.mp3';
import aGataNaMala from './../../Audios/Frases/aGataNaMala.mp3';
import oTatuCavaoBuraco from './../../Audios/Frases/oTatuCavaoBuraco.mp3';
import oTelefoneTocou from './../../Audios/Frases/oTelefoneTocou.mp3';
import oRadioTocaAMusica from './../../Audios/Frases/oRadioTocaAMusica.mp3';
import TenteNovamente from '../../Audios/TenteNovamente.mp3';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import Swal from 'sweetalert2';

const style = ({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 33,
        height: '75%',
        width: '100%',
        flexDirection: 'column'
    },
    cardVogal: {
        fontSize: 30, 
        marginTop: 30, 
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center',
        cursor: 'pointer',
        padding: 10
    },
    viewPalavra: {
        marginLeft: 5,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 28,
        borderBottom: '2px solid #000000', 
        height: 45, 
        marginTop: 20, 
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class AtividadeVogalFrase extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            playTenteNovamente: Sound.status.PAUSED,
            frase: [],
            frasesUtilizadas: [
                ['A GATA NA MALA'],
                ['A BOLA DA FOCA'],
                ['O RÁDIO TOCA A MÚSICA'],
                ['O TATU CAVA O BURACO'],
                ['O TELEFONE TOCOU'],
            ],
            allQtFrases: [3, 3, 4, 4, 2],
            qtFrases: 0,
            itemOne: '',
            itemTwo: '',
            itemThree: '',
            itemFour: '',
            itemFive: '',
            audiosUtilizados: [
                aGataNaMala,
                aBolaDaFoca,
                oRadioTocaAMusica,
                oTatuCavaoBuraco,
                oTelefoneTocou
            ],
            currentIndex: 0,
            itensPalavra: [],
            itensPalavraFirst: [
                {
                    name: 'MALA',
                    key: 0,
                    select: false,
                    index: 3
                }, 
                {
                    name:'GATA',
                    key: 1,
                    select: false,
                    index: 1
                }, 
                {
                    name:'A',
                    key: 2,
                    select: false,
                    index: 0
                }, 
                {
                    name:'NA',
                    key: 3,
                    select: false,
                    index: 2
                }
            ],
            itensPalavraSecond: [
                {
                    name: 'A',
                    key: 0,
                    select: false,
                    index: 0
                }, 
                {
                    name:'FOCA',
                    key: 1,
                    select: false,
                    index: 3
                }, 
                {
                    name:'DA',
                    key: 2,
                    select: false,
                    index: 2
                }, 
                {
                    name:'BOLA',
                    key: 3,
                    select: false,
                    index: 1
                }
            ],
            itensPalavraThree: [
                {
                    name: 'TOCA',
                    key: 0,
                    select: false,
                    index: 2
                }, 
                {
                    name:'MÚSICA',
                    key: 1,
                    select: false,
                    index: 4
                }, 
                {
                    name:'RÁDIO',
                    key: 2,
                    select: false,
                    index: 1
                }, 
                {
                    name:'O',
                    key: 3,
                    select: false,
                    index: 0
                },
                {
                    name:'A',
                    key: 4,
                    select: false,
                    index: 3
                }
            ],
            itensPalavraFour: [
                {
                    name: 'BURACO',
                    key: 0,
                    select: false,
                    index: 4
                }, 
                {
                    name:'O',
                    key: 1,
                    select: false,
                    index: 0
                }, 
                {
                    name:'TATU',
                    key: 2,
                    select: false,
                    index: 1
                }, 
                {
                    name:'O',
                    key: 3,
                    select: false,
                    index: 3
                },
                {
                    name:'CAVA',
                    key: 4,
                    select: false,
                    index: 2
                }
            ],
            itensPalavraFive: [
                {
                    name: 'TOCOU',
                    key: 0,
                    select: false,
                    index: 2
                }, 
                {
                    name:'O',
                    key: 1,
                    select: false,
                    index: 0
                }, 
                {
                    name:'TELEFONE',
                    key: 2,
                    select: false,
                    index: 1
                }, 
            ],
            sound: aGataNaMala,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);
        this.clicBack = this.clicBack.bind(this);
    }

    componentDidMount(){
        var itensPalavra = [];

        if(parseFloat(this.props.match.params.index) === 0){
            itensPalavra = this.state.itensPalavraFirst;
        } else if(parseFloat(this.props.match.params.index) === 1){
            itensPalavra = this.state.itensPalavraSecond;
        } else if(parseFloat(this.props.match.params.index) === 2){
            itensPalavra = this.state.itensPalavraThree;
        } else if(parseFloat(this.props.match.params.index) === 3){
            itensPalavra = this.state.itensPalavraFour;
        } else if(parseFloat(this.props.match.params.index) === 4){
            itensPalavra = this.state.itensPalavraFive;
        }

        this.setState({
            sound: this.state.audiosUtilizados[parseFloat(this.props.match.params.index)],
            itensPalavra: itensPalavra,
            qtFrases: this.state.allQtFrases[parseFloat(this.props.match.params.index)],
            frase: this.state.frasesUtilizadas[parseFloat(this.props.match.params.index)],
            indexNivelPalavras: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){
        this.props.history.push(
            '/texto/' + parseFloat(this.props.match.params.index)
        )
    }

    clickOuvir(){
        this.setState({
            play: Sound.status.PLAYING
        })
    }

    clickItem(item){
        var list = this.state.itensPalavra;
        var soundSelect = {}
        list.forEach(doc => {
            if(item.key === doc.key) {
                soundSelect = doc;
                doc.select = true;
                setTimeout(() => { 
                    doc.select = false;
                    soundSelect.select = false;
                }, 100);
            } else {
                doc.select = false;
            }
        })

        if (this.state.currentIndex === item.index){
            if (this.state.currentIndex === 0 ){
                this.setState({
                    itemOne: item.name,
                })
            } else if (this.state.currentIndex === 1 ){
                this.setState({
                    itemTwo: item.name,
                })
            } else if (this.state.currentIndex === 2 ){
                this.setState({
                    itemThree: item.name,
                })

                if (this.state.qtFrases === 2){
                    var user = firebase.auth().currentUser; 
                    firebase.firestore().collection("Progresso").doc(user.uid).set({
                        atividade: 'frase',
                        vogal: parseFloat(this.props.match.params.index),
                        index: 0
                    })

                    setTimeout(() => { 
                        this.props.history.push(
                            '/texto/' + parseFloat(this.props.match.params.index)
                        )
                    }, 100);
                }
            } else if (this.state.currentIndex === 3 ){
                this.setState({
                    itemFour: item.name,
                })

                if (this.state.qtFrases === 3){
                    var userLogin = firebase.auth().currentUser;
                    firebase.firestore().collection("Progresso").doc(userLogin.uid).set({
                        atividade: 'frase',
                        vogal: parseFloat(this.props.match.params.index),
                        index: 0
                    })

                    setTimeout(() => { 
                        this.props.history.push(
                            '/texto/' + parseFloat(this.props.match.params.index)
                        )
                    }, 100);
                }
            } else if (this.state.currentIndex === 4 ){
                this.setState({
                    itemFive: item.name,
                })

                var userLogado = firebase.auth().currentUser;
                
                firebase.firestore().collection("Progresso").doc(userLogado.uid).set({
                    atividade: 'frase',
                    vogal: parseFloat(this.props.match.params.index),
                    index: 0
                })

                setTimeout(() => { 
                    this.props.history.push(
                        '/texto/' + parseFloat(this.props.match.params.index)
                    )
                }, 100);
            }

            this.setState({
                silabas: list,
                currentIndex: this.state.currentIndex + 1
            })
        } else {
            this.setState({
                playTenteNovamente: Sound.status.PLAYING,
                silabas: list,
            })
        }
    }

    clickClose(){
        this.props.history.push('/')
    }

    clickInfo(){
        Swal.fire(
            'Frase',
            'Escute a frase e monte-a clicando nas palavras',
            'question'
        )
    }

    clicBack(){
        this.props.history.push(
            '/palavra/' + parseFloat(this.props.match.params.index) + '/' 0
        )
    }

    render() {
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
                clickInfo={this.clickInfo}
                clickClose={this.clickClose}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                    {this.state.frase}
                <div style={{display: 'flex'}}>   
                    <div className={classes.viewPalavra}>{this.state.itemOne}</div>
                    <div className={classes.viewPalavra}>{this.state.itemTwo}</div>
                    <div className={classes.viewPalavra}>{this.state.itemThree}</div>
                    {this.state.qtFrases > 2 && <div className={classes.viewPalavra}>{this.state.itemFour}</div>}
                    {this.state.qtFrases > 3 && <div className={classes.viewPalavra}>{this.state.itemFive}</div>}
                </div>
                <div style={{display: 'flex'}}>
                    {this.state.itensPalavra.map(doc => {
                        return(
                            <div
                                key={doc.key}
                                onClick={() => this.clickItem(doc)}
                                style={{
                                    transition: doc.select ? 'opacity 1s linear' : 'none',
                                    backgroundColor: doc.select ? 'rgb(231, 111, 81)' : '',
                                    borderRadius: doc.select ? 20 : '',
                                    color: doc.select ? '#FFFFFF' : '',
                                    boxShadow: doc.select ?'0px 6px 9px rgb(0, 0, 0, 0.2)' : '',
                                }}
                                className={classes.cardVogal} >
                                {doc.name}
                            </div>
                        )
                        
                    })}
                </div>
                </div>
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
                <Sound
                    url={TenteNovamente}
                    playStatus={this.state.playTenteNovamente}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {
                            this.setState({
                                playTenteNovamente: Sound.status.PAUSED
                            })
                    }}
                />
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(AtividadeVogalFrase);
