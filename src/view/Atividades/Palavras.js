import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import A from '../../Audios/a.mp3';
import BA from '../../Audios/ba.mp3';
import CA from '../../Audios/ca.mp3';
import DA from '../../Audios/da.mp3';
import FA from '../../Audios/fa.mp3';
import GA from '../../Audios/ga.mp3';
import HA from '../../Audios/ha.mp3';
import JA from '../../Audios/ja.mp3';
import LA from '../../Audios/la.mp3';
import MA from '../../Audios/ma.mp3';
import NA from '../../Audios/na.mp3';
import PA from '../../Audios/pa.mp3';
import QUA from '../../Audios/qua.mp3';
import RA from '../../Audios/ra.mp3';
import SA from '../../Audios/sa.mp3';
import TA from '../../Audios/ta.mp3';
import VA from '../../Audios/va.mp3';
import XA from '../../Audios/xa.mp3';
import ZA from '../../Audios/za.mp3';


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
        window.soundManager.setup({ debugMode: false });

        this.state = {
            letraNivel: 'A',
            silaba: 'A',
            silabasUtilizadas: [
                ['B', 'C', 'D', 'F', 'G', 'H'],
                ['J', 'L', 'M', 'N', 'P', 'Q'],
                ['R', 'S', 'T', 'V', 'X', 'Z']
            ], 
            sound: A,
            soundListA: [
                [BA, CA, DA, FA, GA, HA],
                [JA, LA, MA, NA, PA, QUA],
                [RA, SA, TA, VA, XA, ZA]
            ],
            soundList: [],
            indexNivelSilabas: 0,
            index: 0,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        var vogal = this.props.match.params.vogal.toUpperCase()

        var soundList = [];

        if (this.props.match.params.vogal.toUpperCase() === 'A') {
            soundList = this.state.soundListA
        }

        this.setState({
            soundList: soundList,
            letraNivel: vogal,
            indexNivelSilabas: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){
        if (this.state.index <= 5) {
            this.setState({
                sound: this.state.soundList[this.state.indexNivelSilabas][this.state.index],
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

export default withStyles(style)(Palavra);
