import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import aBolaDaFoca from './../../Audios/Frases/aBolaDaFoca.mp3';
import aGataNaMala from './../../Audios/Frases/aGataNaMala.mp3';
import oTatuCavaoBuraco from './../../Audios/Frases/oTatuCavaoBuraco.mp3';
import oTelefoneTocou from './../../Audios/Frases/oTelefoneTocou.mp3';
import pipocaPulaNaPanela from './../../Audios/Frases/pipocaPulaNaPanela.mp3';

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
        width: 409,
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
                ['A PIPOCA PULA NA PANELA'],
                ['O TATU CAVA O BURACO'],
                ['O TELEFONE TOCOU'],
            ],
            audiosUtilizados: [
                [aGataNaMala],
                [aBolaDaFoca],
                [pipocaPulaNaPanela],
                [oTatuCavaoBuraco],
                [oTelefoneTocou]
            ],
            sound: aGataNaMala,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        this.setState({
            sound: this.state.audiosUtilizados[parseFloat(this.props.match.params.index)],
            frase: this.state.frasesUtilizadas[parseFloat(this.props.match.params.index)]
        })
        
    }

    clickProximo(){
        
    }

    clickOuvir(){
        this.setState({
            play: Sound.status.PLAYING
        })
    }

    render() {
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
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
