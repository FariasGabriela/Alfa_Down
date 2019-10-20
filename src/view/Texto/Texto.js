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

class Texto extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            frasesUtilizadas0: [
                ['A PACA NA MALA'],
                ['A PACA NA CAMA'],
                ['A PACA NA SALA'],
                ['A PACA NA LATA'],
            ],
            frasesUtilizadas1: [
                ['JOÃO CORTA PAU'],
                ['MARIA MEXE SAGU'],
                ['TEREZA PÕE A MESA'],
                ['PARA A FESTA DO TATU']
            ],
            frasesUtilizadas2: [
                ['O SAPATO DO RATO'],
                ['O ROBÔ DO SAPO'],
                ['O SOFA DO GATO'],
                ['O DADO DO CAVALO'],
                ['A MOTO DO MACACO'],
                ['A BOLA DA FOCA']
            ],
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        
        
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
                {'A PACA NA MALA'}
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

export default withStyles(style)(Texto);
