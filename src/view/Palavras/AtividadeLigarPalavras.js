import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
//import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';
import Trofeu from './../../icons/trofeu.svg';
import iconAviao from './../../icons/airplane.svg'
import IconCat from './../../icons/cat.svg';
import IconBanana from './../../icons/banana.svg';
import iconbanana from './../../icons/banana.svg';
import iconmacaco from './../../icons/monkey.svg';
import iconbatata from './../../icons/potato.svg';
import iconbala from './../../icons/bala.svg';
import iconfaca from './../../icons/knife.svg';
import iconlampada from './../../icons/lampada.svg';
import iconcanela from './../../icons/cinnamon.svg';
import iconcaneta from './../../icons/pen.svg';
import iconabacate from './../../icons/avocado.svg';
import iconjacare from './../../icons/alligator.svg';
import iconleite from './../../icons/milk.svg';
import iconpeixe from './../../icons/fish.svg';
import iconlixo from './../../icons/garbage.svg';
import iconioio from './../../icons/yoyo.svg';
import iconlimao from './../../icons/lemon.svg';
import iconmeia from './../../icons/socks.svg';
import iconpalito from './../../icons/match.svg';
import iconpapai from './../../icons/father.svg';
import iconfoca from './../../icons/seal.svg';
import iconfogo from './../../icons/fire.svg';
import icongato from './../../icons/cat.svg';
import icongoiaba from './../../icons/guava.svg';
import iconcopo from './../../icons/glass.svg';
import iconcarro from './../../icons/car.svg';
import iconluva from './../../icons/mitten.svg';
import iconlupa from './../../icons/research.svg';
import iconuva from './../../icons/grapes.svg';
import iconsuco from './../../icons/orange-juice.svg';
import icontouro from './../../icons/bull.svg';
import iconurubu from './../../icons/vulture.svg';

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
        top: 45,
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
    },
    viewIcons: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    cardLetra: {
        borderRadius: 20, 
        border: '2px solid #000000', 
        height: 60,
        width: 100, 
        fontSize: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        display: 'flex'
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
            iconsUtilizados: [
                [ iconbanana, iconmacaco, iconbatata, iconbala, iconfaca, iconlampada ],
                [ iconcanela, iconcaneta, iconabacate, iconjacare, iconleite, iconpeixe ],
                [ iconlixo, iconioio, iconlimao, iconmeia, iconpalito, iconpapai ],
                [ iconfoca, iconfogo, icongato, icongoiaba, iconcopo, iconcarro ],
                [ iconluva, iconlupa, iconuva, iconsuco, icontouro, iconurubu ]
            ],
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        
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
                    <div className={classes.viewIcons}>                        
                        <img   src={iconAviao} 
                            style={{ height: 80, width: 60, marginRight: 10 }}
                            alt="Quadro" /> {/*Referenciar criador*/}
                        <div className={classes.cardLetra} >A</div>
                        <div className={classes.cardLetra} style={{marginLeft: 75, width: 150}} >TO</div>
                    </div>
                    <div className={classes.viewIcons}>
                        <img   src={IconCat} 
                        style={{ height: 80, width: 60, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div className={classes.cardLetra} >BA</div>
                        <div className={classes.cardLetra} style={{marginLeft: 75, width: 150}} >NANA</div>
                    </div>
                    <div className={classes.viewIcons}>
                        <img   src={IconBanana} 
                        style={{ height: 80, width: 60, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div className={classes.cardLetra} >GA</div>
                        <div className={classes.cardLetra} style={{marginLeft: 75, width: 150}} >VIÃO</div>
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
