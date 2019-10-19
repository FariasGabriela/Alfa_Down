import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
//import Aviao from '../../Audios/Palavras/Aviao.mp3';
import iconAviao from './../../icons/airplane.svg'

const style = ({
    view: {
        position: 'absolute',
        top: 5,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 100,
        height: '80%',
        width: '100%',
        flexDirection: 'column'
    }
})

class Palavras extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            letraNivel: 'A',
            silaba: 'A',
            palavrasUtilizadas: [
                [ 'Avião', 'Elefante', 'Igreja', 'Ovo', 'Urubu', '' ],
                ['Banana', 'Cachorro', 'Dado', 'Faca', 'Gato', 'Hipopotamo'],
                ['Janela', 'Lebre', 'Maca', 'Navio', 'Papagaio', 'Queijo'],
                ['Rato', 'Sapo', 'Tatu', 'Vaca', 'X', 'Z']
            ], 
            palavraAtual: '',
            indexNivelPalavras: 0,
            index: 0,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        var rodada = parseFloat(this.props.match.params.vogal);

        this.setState({
            palavraAtual: this.state.palavrasUtilizadas[rodada][parseFloat(this.props.match.params.index)],
            letraNivel: rodada,
            indexNivelPalavras: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){  
        if ( this.state.indexNivelPalavras <= 6 ){
            this.setState({
                palavraAtual: this.state.palavrasUtilizadas[this.state.letraNivel][this.state.indexNivelPalavras + 1],
                indexNivelPalavras: this.state.indexNivelPalavras + 1
            })
        } else {
            this.props.history.push('/atividade-palavra/'+ this.state.letraNivel + "/" + this.state.letraNivel )
        }
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
                <img   src={iconAviao} 
                    style={{ height: 150, width: 150 }}
                    alt="Quadro" /> {/*Referenciar criador*/}
                {this.state.palavraAtual}
                </div>
                {/*<Sound
                    url={this.state.sound}
                    playStatus={this.state.play}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {
                            this.setState({
                                play: Sound.status.PAUSED
                            })
                    }}
                />*/}
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(Palavras);
