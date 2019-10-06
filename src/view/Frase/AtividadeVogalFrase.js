import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';

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
    }
})

class AtividadeVogalFrase extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            letraNivel: 'A',
            silaba: 'A',
            silabasUtilizadas: [
                ['B', 'C', 'D', 'F', 'G', 'H'],
                ['J', 'L', 'M', 'N', 'P', 'Q'],
                ['R', 'S', 'T', 'V', 'X', 'Z']
            ], 
            indexNivelPalavras: 0,
            index: 0,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        var vogal = this.props.match.params.vogal.toUpperCase()

        this.setState({
            letraNivel: vogal,
            indexNivelPalavras: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){
        if (this.state.index <= 5) {
            this.setState({
                silaba: this.state.silabasUtilizadas[this.state.indexNivelPalavras][this.state.index] + this.state.letraNivel,
                index: this.state.index + 1
            })
        } else {
            this.props.history.push('/atividade/'+ this.props.match.params.vogal + "/" + this.state.indexNivelPalavras )
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
                {'A PACA NA MALA'}
                <div style={{borderBottom: '2px solid #000000', width: 100, height: 50, marginTop: 20, marginBottom: 10}}></div>
                <div style={{display: 'flex'}}>
                    <div style={{fontSize: 100, width: 80, display: 'flex', justifyContent: 'center', alignContent: 'center' }} >
                        A
                    </div>
                    <div style={{fontSize: 100, width: 80, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        O
                    </div>
                    <div style={{fontSize: 100, width: 80, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        U
                    </div>
                    <div style={{fontSize: 100, width: 80, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        I
                    </div>
                    <div style={{fontSize: 100, width: 80, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        E
                    </div>
                </div>
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

export default withStyles(style)(AtividadeVogalFrase);
