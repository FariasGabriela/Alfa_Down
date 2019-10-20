import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';

const style = ({
    view: {
        position: 'absolute',
        top: -10,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 43,
        height: '80%',
        width: '100%',
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
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        this.setState({
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

export default withStyles(style)(Frase);
