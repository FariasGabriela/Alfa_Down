import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import aBolaDaFoca from './../../Audios/Frases/aBolaDaFoca.mp3';
import aGataNaMala from './../../Audios/Frases/aGataNaMala.mp3';
import oTatuCavaoBuraco from './../../Audios/Frases/oTatuCavaoBuraco.mp3';
import oTelefoneTocou from './../../Audios/Frases/oTelefoneTocou.mp3';
import pipocaPulaNaPanela from './../../Audios/Frases/pipocaPulaNaPanela.mp3';
import Swal from 'sweetalert2';

const style = ({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 43,
        height: '80%',
        width: '100%',
        flexDirection: 'column'
    },
    cardVogal: {
        fontSize: 100, 
        width: 80, 
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center'
    }
})

class AtividadeVogalFrase extends Component {
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
                aGataNaMala,
                aBolaDaFoca,
                pipocaPulaNaPanela,
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
    }

    componentDidMount(){
        this.setState({
            frase: this.state.frasesUtilizadas[parseFloat(this.props.match.params.index)],
            indexNivelPalavras: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){

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
                <div style={{borderBottom: '2px solid #000000', width: 100, height: 50, marginTop: 20, marginBottom: 10}}></div>
                <div style={{display: 'flex'}}>
                    <div className={classes.cardVogal} >
                        A
                    </div>
                    <div className={classes.cardVogal}>
                        O
                    </div>
                    <div className={classes.cardVogal}>
                        U
                    </div>
                    <div className={classes.cardVogal}>
                        I
                    </div>
                    <div className={classes.cardVogal}>
                        E
                    </div>
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
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(AtividadeVogalFrase);
