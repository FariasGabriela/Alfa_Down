import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import BA from '../../Audios/ba.mp3';
import CA from '../../Audios/ca.mp3';
import DA from '../../Audios/da.mp3';
import FA from '../../Audios/fa.mp3';
import GA from '../../Audios/ga.mp3';
import HA from '../../Audios/ha.mp3';
import Modal from '@material-ui/core/Modal';
import Trofeu from './../../icons/trofeu.svg'

const styles = ({
    divButton: {
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
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 100,
        height: '80%',
        width: '100%'
    },
    silabas: {
        display: 'flex',
        width: '81%',
        height: '64%',
        flexWrap: 'wrap'
    },
    name: {
        display: 'flex',
        height: 116,
        fontSize: 70,
        alignItems: 'center',
        justifyContent: 'center',
        width: 119
    }
})

class AtividadePalavra extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            open: false,
            play: Sound.status.PAUSED,
            silabas: [],
            soundSelect: "",
            indexSoundSelect: 0,
            soundListA: [
                [FA, BA, DA, HA, CA, GA],
                ['J', 'L', 'M', 'N', 'P', 'Q'],
                ['R', 'S', 'T', 'V', 'X', 'Z']
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
                    select: false
                },
                {   
                    key: 1,
                    name: 'LA',
                    select: false
                },
                {
                    key: 2,
                    name: 'MA',
                    select: false
                },
                {
                    key: 3,
                    name: 'NA',
                    select: false
                },
                {
                    key: 4,
                    name: 'PA',
                    select: false
                },
                {   
                    key: 5,
                    name: 'QA',
                    select: false
                },
            ],
            silabasThree: [
                {
                    key: 0,
                    name: 'RA',
                    select: false
                },
                {   
                    key: 1,
                    name: 'SA',
                    select: false
                },
                {
                    key: 2,
                    name: 'TA',
                    select: false
                },
                {
                    key: 3,
                    name: 'VA',
                    select: false
                },
                {
                    key: 4,
                    name: 'XA',
                    select: false
                },
                {   
                    key: 5,
                    name: 'ZA',
                    select: false
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
                silabas: this.state.sibalasTwo
            })
        } else if ( value === 2 ) {
            this.setState({
                silabas: this.state.silabasThree
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
                    soundSelect: this.state.soundListA[0][this.state.indexSoundSelect + 1],
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
                    <div className={classes.silabas}>
                        {this.state.silabas.map((doc) => {
                            return (<div key={doc.key}
                                onClick={() => this.clickItem(doc)}
                                className={classes.name}
                                style={{
                                    backgroundColor: doc.select ? 'rgb(231, 111, 81)' : '',
                                    borderRadius: doc.select ? 20 : '',
                                    color: doc.select ? '#FFFFFF' : '',
                                    boxShadow: doc.select ?'0px 6px 9px rgb(0, 0, 0, 0.2)' : '',
                                }}>
                                    {doc.name}
                                </div>
                            )
                        })}
                        <Sound
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

export default withStyles(styles)(AtividadePalavra);
