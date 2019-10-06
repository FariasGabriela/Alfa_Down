import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
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
//import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';
import Trofeu from './../../icons/trofeu.svg';
import iconAviao from './../../icons/airplane.svg'
import IconCat from './../../icons/cat.svg';
import IconBanana from './../../icons/banana.svg';

const styles = ({
    divButton: {
        cursor: 'pointer',
        font: 20,
        height: 50,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(42, 157, 143)',
        borderRadius: 10,
        marginTop: 70
    },
    divModal: {
        flexDirection: 'column',
        width: '50%', 
        height: '50%', 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '100%', 
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100
    },
    view: {
        flexDirection: 'column',
        position: 'absolute',
        top: 50,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 100,
        height: '78%',
        width: '100%'
    },
    silabas: {
        display: 'flex',
        width: 370,
        height: 90,
        flexWrap: 'wrap'
    },
    name: {
        display: 'flex',
        height: 80,
        fontSize: 65,
        alignItems: 'center',
        justifyContent: 'center',
        width: 119
    }
})

class AtividadeLigarPalavras extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            open: false,
            playTenteNovamente: Sound.status.PAUSED,
            play: Sound.status.PAUSED,
            silabas: [],
            soundSelect: "",
            indexSoundSelect: 0,
            soundListA: [
                [FA, BA, DA, HA, CA, GA],
                [LA, NA, PA, JA, QUA, MA],
                [RA, TA, ZA, VA, XA, SA]
            ],
            silabasOne: [
                {
                    key: 0,
                    name: 'BA',
                    audio: BA,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CA',
                    audio: CA,
                    select: false
                },
                {
                    key: 2,
                    name: 'DA',
                    audio: DA,
                    select: false
                },
                {
                    key: 3,
                    name: 'FA',
                    audio: FA,
                    select: false
                },
                {
                    key: 4,
                    name: 'GA',
                    audio: GA,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HA',
                    audio: HA,
                    select: false
                },
            ],
            sibalasTwo: [
                {
                    key: 0,
                    name: 'JA',
                    select: false,
                    audio: JA,
                },
                {   
                    key: 1,
                    name: 'LA',
                    select: false,
                    audio: LA,
                },
                {
                    key: 2,
                    name: 'MA',
                    select: false,
                    audio: MA,
                },
                {
                    key: 3,
                    name: 'NA',
                    select: false,
                    audio: NA,
                },
                {
                    key: 4,
                    name: 'PA',
                    select: false,
                    audio: PA,
                },
                {   
                    key: 5,
                    name: 'QA',
                    select: false,
                    audio: QUA,
                },
            ],
            silabasThree: [
                {
                    key: 0,
                    name: 'RA',
                    select: false,
                    audio: RA,
                },
                {   
                    key: 1,
                    name: 'SA',
                    select: false,
                    audio: SA,
                },
                {
                    key: 2,
                    name: 'TA',
                    select: false,
                    audio: TA,
                },
                {
                    key: 3,
                    name: 'VA',
                    select: false,
                    audio: VA,
                },
                {
                    key: 4,
                    name: 'XA',
                    select: false,
                    audio: XA,
                },
                {   
                    key: 5,
                    name: 'ZA',
                    select: false,
                    audio: ZA,
                },
            ]
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        const value = parseFloat(this.props.match.params.index)
        if ( value === 0 ) {
            this.setState({
                silabas: this.state.silabasOne,
                soundSelect: this.state.soundListA[0][this.state.indexSoundSelect]
            })
        } else if ( value === 1 ) {
            this.setState({
                silabas: this.state.sibalasTwo,
                soundSelect: this.state.soundListA[1][this.state.indexSoundSelect]
            })
        } else if ( value === 2 ) {
            this.setState({
                silabas: this.state.silabasThree,
                soundSelect: this.state.soundListA[2][this.state.indexSoundSelect]
            })
        }
    }

    clickProximo(){
        var value = parseFloat(this.props.match.params.index)
        if ( value !== 2 ) {
            this.props.history.push(
                '/palavra/' + this.props.match.params.vogal + "/" + (value + 1)
            )
        }
    }

    clickItem(item){
        var list = this.state.silabas;
        var soundSelect = {}
        list.forEach(doc => {
            if(item.key === doc.key) {
                soundSelect = doc;
                doc.select = true;
            } else {
                doc.select = false;
            }
        }) 

        if (soundSelect.audio === this.state.soundSelect) {
            if ( this.state.indexSoundSelect > 4 ) {
                this.setState({
                    open: true
                })
            } else {
                this.setState({
                    soundSelect: this.state.soundListA[parseFloat(this.props.match.params.index)][this.state.indexSoundSelect + 1],
                    indexSoundSelect: this.state.indexSoundSelect + 1,
                    silabas: list
                })
            }
            
        } else {
            this.setState({
                silabas: list
            })
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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <img   src={iconAviao} 
                            style={{ height: 80, width: 80, marginRight: 10 }}
                            alt="Quadro" /> {/*Referenciar criador*/}
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 100, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex'}} >A</div>
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 170, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: 35}} >TO</div>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <img   src={IconCat} 
                        style={{ height: 80, width: 80, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 100, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex'}} >BA</div>
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 170, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: 35}} >NANA</div>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <img   src={IconBanana} 
                        style={{ height: 80, width: 80, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 100, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex'}} >GA</div>
                        <div style={{borderRadius: 20, border: '2px solid #000000', height: '100%', width: 170, fontSize: 60, alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: 35}} >VIÃO</div>
                    </div>
                    

                    


                    <div className={classes.silabas}>
                        
                        {/*<Sound
                            url={this.state.soundSelect}
                            playStatus={this.state.play}
                            onLoading={() => {}}
                            onPlaying={() => {}}
                            onFinishedPlaying={() => {
                                    this.setState({
                                        play: Sound.status.PAUSED
                                    })
                            }}
                        />
                        {/*<Sound
                            url={TenteNovamente}
                            playStatus={this.state.playTenteNovamente}
                            onLoading={() => {}}
                            onPlaying={() => {}}
                            onFinishedPlaying={() => {
                                    this.setState({
                                        playTenteNovamente: Sound.status.PAUSED
                                    })
                            }}
                        />*/}
                        <Modal
                            className={classes.modal}
                            open={this.state.open}
                        >
                        <div className={classes.divModal}>
                            <img  src={Trofeu} 
                                className={classes.img}
                                alt="Trofeu"/> {/*Referenciar criador*/}
                            <div className={classes.divButton}
                                 onClick={this.clickProximo}> 
                                    Continuar 
                            </div>
                        </div>
                            
                        </Modal>
                    </div>
                </div>
            </ViewQuadro>
        );
    }
}

export default withStyles(styles)(AtividadeLigarPalavras);
