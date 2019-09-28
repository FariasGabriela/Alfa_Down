import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import ba from '../../Audios/ba.mp3'

const style = ({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 196,
        height: '80%',
        width: '100%'
    }
})

class Palavra extends Component {
    constructor(props){
        super(props);

        this.state = {
            letraNivel: 'A',
            silaba: 'A',
            silabasUtilizadas: [
                ['B', 'C', 'D', 'F', 'G', 'H'],
                ['J', 'L', 'M', 'N', 'P', 'Q'],
                ['R', 'S', 'T', 'V', 'X', 'Z']
            ], 
            indexNivelSilabas: 0,
            index: 0,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        console.log(this.props.match.params)
        var vogal = this.props.match.params.vogal.toUpperCase()

        console.log(vogal)
        this.setState({
            letraNivel: vogal,
            indexNivelSilabas: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){
        if (this.state.index <= 5) {
            console.log(this.state.silabasUtilizadas)
            this.setState({
                silaba: this.state.silabasUtilizadas[this.state.indexNivelSilabas][this.state.index] + this.state.letraNivel,
                index: this.state.index + 1
            })
        } else {
            this.props.history.push('/atividade/'+ this.props.match.params.vogal + "/" + this.state.indexNivelSilabas )
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
                {this.state.silaba}
                </div>
                <Sound
                    url={ba}
                    playStatus={this.state.play}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {}}
                />
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(Palavra);
