import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import aBolaDaFoca from './../../Audios/Frases/aBolaDaFoca.mp3';
import aGataNaMala from './../../Audios/Frases/aGataNaMala.mp3';
import oTatuCavaoBuraco from './../../Audios/Frases/oTatuCavaoBuraco.mp3';
import oTelefoneTocou from './../../Audios/Frases/oTelefoneTocou.mp3';
import oRadioTocaAMusica from './../../Audios/Frases/oRadioTocaAMusica.mp3';
import Swal from 'sweetalert2';

const style = ({
    view: {
        position: 'absolute',
        top: -10,
        left: 23,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        height: '80%',
        width: 'calc(100% - 50px)',
        flexDirection: 'column'
    }
})

class Frase extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            frase: [],
            frasesUtilizadas: [
                ['A GATA NA MALA'],
                ['A BOLA DA FOCA'],
                ['O RÁDIO TOCA A MÚSICA'],
                ['O TATU CAVA O BURACO'],
                ['O TELEFONE TOCOU'],
            ],
            audiosUtilizados: [
                aGataNaMala,
                aBolaDaFoca,
                oRadioTocaAMusica,
                oTatuCavaoBuraco,
                oTelefoneTocou
            ],
            sound: aGataNaMala,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);
        this.clickBack = this.clickBack.bind(this);
    }

    componentDidMount(){
        this.setState({
            sound: this.state.audiosUtilizados[parseFloat(this.props.match.params.index)],
            frase: this.state.frasesUtilizadas[parseFloat(this.props.match.params.index)]
        }, () => {
            this.setState({
                play: Sound.status.PLAYING,
            })
        })
        
    }

    clickProximo(){
        this.props.history.push('/atividade-frase/' + this.props.match.params.index)
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
            'Frase',
            'Veja a frase e escute a sua pronúncia clicando no botão ouvir',
            'question'
        )
    }

    clicBack(){
        this.props.history.push(
            '/palavra/' + parseFloat(this.props.match.params.index) + '/' + 0
        )
    }

    render() {
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
                clicBack={this.clickBack}
                clickInfo={this.clickInfo}
                clickClose={this.clickClose}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                    {this.state.frase}
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
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(Frase);
