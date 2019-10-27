import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';
import Trofeu from './../../icons/trofeu.svg';
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
        '&:hover' : {
            boxShadow: '0.5px 1px 10px #000000'
        },
        cursor: 'pointer',
        borderRadius: 20, 
        border: '2px solid #000000', 
        height: 60,
        width: 110, 
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
            cont: 0,
            indexItemSelect: [],
            itemSelect: [],
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
            allIconsOne: [
                [
                    {
                        icon: iconbanana,
                        firstItem: {
                            item: 'BA',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'TATA',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconbala,
                        firstItem: {
                            item: 'BA',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'CA',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconfoca,
                        firstItem: {
                            item: 'FO',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'TO',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: icongoiaba,
                        firstItem: {
                            item: 'GO',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'RO',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconlixo,
                        firstItem: {
                            item: 'LI',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'IO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconmeia,
                        firstItem: {
                            item: 'ME',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'PAI',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconluva,
                        firstItem: {
                            item: 'LU',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'VA',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconsuco,
                        firstItem: {
                            item: 'SU',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'RO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconcanela,
                        firstItem: {
                            item: 'CA',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'BACA',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconjacare,
                        firstItem: {
                            item: 'JA',
                            index: 0,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'CARÉ',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                ],
            ],
            allIconsTwo: [
                [
                    {
                        icon: iconmacaco,
                        firstItem: {
                            item: 'MA',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'NANA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconfaca,
                        firstItem: {
                            item: 'FA',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'LA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    }
                ],
                [
                    {
                        icon: iconfogo,
                        firstItem: {
                            item: 'FO',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'GO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconcopo,
                        firstItem: {
                            item: 'CO',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'IABA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconioio,
                        firstItem: {
                            item: 'IO',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'MÃO',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconpalito,
                        firstItem: {
                            item: 'PA',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'IA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconlupa,
                        firstItem: {
                            item: 'LU',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'VA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: icontouro,
                        firstItem: {
                            item: 'TOU',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'RUBU',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconabacate,
                        firstItem: {
                            item: 'A',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'NETA',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconleite,
                        firstItem: {
                            item: 'LEI',
                            index: 1,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'XE',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    },
                ],
            ],
            allIconsThree: [
                [
                    {
                        icon: iconbatata,
                        firstItem: {
                            item: 'BA',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'CACO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconlampada,
                        firstItem: {
                            item: 'LÂM',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'PADA',
                            index: 2,
                            select: false,
                            disable: false
                        }
                    }
                ],
                [
                    {
                        icon: icongato,
                        firstItem: {
                            item: 'GA',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'CA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconcarro,
                        firstItem: {
                            item: 'CAR',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'PO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconlimao,
                        firstItem: {
                            item: 'LI',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'XO',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconpapai,
                        firstItem: {
                            item: 'PA',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'LITO',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconuva,
                        firstItem: {
                            item: 'U',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'PA',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconurubu,
                        firstItem: {
                            item: 'U',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'CO',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                ],
                [
                    {
                        icon: iconcaneta,
                        firstItem: {
                            item: 'CA',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'NELA',
                            index: 0,
                            select: false,
                            disable: false
                        }
                    },
                    {
                        icon: iconpeixe,
                        firstItem: {
                            item: 'PEI',
                            index: 2,
                            select: false,
                            disable: false
                        },
                        secondItem: {
                            item: 'TE',
                            index: 1,
                            select: false,
                            disable: false
                        }
                    },
                ],
            ],
            iconOne: {
                icon: '',
                firstItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                },
                secondItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                }
            },
            iconTwo: {
                icon: '',
                firstItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                },
                secondItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                }
            },
            iconThree: {
                icon: '',
                firstItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                },
                secondItem: {
                    item: '',
                    index: 0,
                    select: false,
                    disable: false
                }
            },
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        this.setState({
            iconOne: this.state.allIconsOne[parseFloat(this.props.match.params.vogal)][parseFloat(this.props.match.params.index)],
            iconTwo: this.state.allIconsTwo[parseFloat(this.props.match.params.vogal)][parseFloat(this.props.match.params.index)],
            iconThree: this.state.allIconsThree[parseFloat(this.props.match.params.vogal)][parseFloat(this.props.match.params.index)]
        })
    }

    clickProximo(){
        var value = parseFloat(this.props.match.params.index)
        if ( value !== 2 ) {
            this.props.history.push(
                '/frase/' + this.props.match.params.vogal
            )
        }
    }

    clickItem(item, index, secondIndex){
        if(!item.disable) {
            var itens = [
                [this.state.iconOne.firstItem, this.state.iconOne.secondItem],
                [this.state.iconTwo.firstItem, this.state.iconTwo.secondItem],
                [this.state.iconThree.firstItem, this.state.iconThree.secondItem],
            ]
            
            var currentItem = itens[index][secondIndex];
            currentItem.select = true;

            if (this.state.itemSelect.length === 0){
                this.setState({
                    itemSelect: currentItem,
                    indexItemSelect: {
                        index: index, 
                        secondIndex: secondIndex
                    }
                })
                
            } else {
                if (this.state.itemSelect.index === item.index) {
                    var indexItemSelect = itens[this.state.indexItemSelect.index][this.state.indexItemSelect.secondIndex];
                    indexItemSelect.select = false;
                    currentItem.select = false;
                    indexItemSelect.disable = true;
                    currentItem.disable = true;
                    
                    this.setState({
                        cont: this.state.cont + 1,
                        itemSelect: [],
                        indexItemSelect: []
                    }, () => {
                        if (this.state.cont === 3 ){
                            if (parseFloat(this.props.match.params.index) === 0){
                                this.setState({
                                    cont: 0,
                                    iconOne: this.state.allIconsOne[parseFloat(this.props.match.params.vogal)][1],
                                    iconTwo: this.state.allIconsTwo[parseFloat(this.props.match.params.vogal)][1],
                                    iconThree: this.state.allIconsThree[parseFloat(this.props.match.params.vogal)][1]
                                })

                                this.props.history.push(
                                    '/atividade-ligar/' + this.props.match.params.vogal + '/' + 1
                                )
                                
                            } else {
                                this.props.history.push(
                                    '/frase/' + this.props.match.params.vogal
                                )
                            }
                            
                        }
                    })

                    
                } else {
                    setTimeout(() => { 
                        currentItem.select = false;
                        var indexItemSelect = itens[this.state.indexItemSelect.index][this.state.indexItemSelect.secondIndex];
                        indexItemSelect.select = false;
            
                        this.setState({
                            indexItemSelect: [],
                            itemSelect: []
                        })
                    }, 1000);

                    this.setState({
                        playTenteNovamente: Sound.status.PLAYING,
                    })
                }
            }
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
                noShow={true}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>

                    <div className={classes.viewIcons}>                        
                        <img   src={this.state.iconOne.icon} 
                            style={{ height: 80, width: 60, marginRight: 10 }}
                            alt="Quadro" /> {/*Referenciar criador*/}
                        <div onClick={ () => this.clickItem(this.state.iconOne.firstItem, 0, 0)} 
                            className={classes.cardLetra} 
                            style={{ backgroundColor: this.state.iconOne.firstItem.select ? 'rgb(231, 111, 81)' : '', 
                            opacity: this.state.iconOne.firstItem.disable ? '0.3' : 1,
                            border: this.state.iconOne.firstItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconOne.firstItem.select ? '#FFFFFF' : '#000000',
                            boxShadow: this.state.iconOne.firstItem.select ? '0.5px 1px 10px #000000' : ''}} >
                            {this.state.iconOne.firstItem.item}
                        </div>
                        <div onClick={ () => this.clickItem(this.state.iconOne.secondItem, 0, 1)} 
                            className={classes.cardLetra} 
                            style={{marginLeft: 75, width: 150, backgroundColor: this.state.iconOne.secondItem.select ? 'rgb(231, 111, 81)' : '', 
                            opacity: this.state.iconOne.secondItem.disable ? '0.3' : 1,
                            border: this.state.iconOne.secondItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconOne.secondItem.select ? '#FFFFFF' : '#000000',
                            boxShadow: this.state.iconOne.secondItem.select ? '0.5px 1px 10px #000000' : ''}} >
                                {this.state.iconOne.secondItem.item}
                        </div>
                    </div>

                    <div className={classes.viewIcons}>
                        <img   src={this.state.iconTwo.icon} 
                        style={{ height: 80, width: 60, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div onClick={ () => this.clickItem(this.state.iconTwo.firstItem, 1, 0)} 
                            className={classes.cardLetra} 
                            style={{ backgroundColor: this.state.iconTwo.firstItem.select ? 'rgb(231, 111, 81)' : '', 
                            opacity: this.state.iconTwo.firstItem.disable ? '0.3' : 1,
                            border: this.state.iconTwo.firstItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconTwo.firstItem.select ? '#FFFFFF' : '#000000',
                            boxShadow: this.state.iconTwo.firstItem.select ? '0.5px 1px 10px #000000' : ''}}>
                                {this.state.iconTwo.firstItem.item}
                        </div>
                        <div onClick={ () => this.clickItem(this.state.iconTwo.secondItem, 1, 1)} 
                            className={classes.cardLetra} 
                            style={{backgroundColor: this.state.iconTwo.secondItem.select ? 'rgb(231, 111, 81)' : '', 
                            marginLeft: 75, 
                            width: 150, 
                            opacity: this.state.iconTwo.secondItem.disable ? '0.3' : 1,
                            border: this.state.iconTwo.secondItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconTwo.secondItem.select ? '#FFFFFF' : '#000000', 
                            boxShadow: this.state.iconTwo.secondItem.select ? '0.5px 1px 10px #000000' : ''}} >
                                {this.state.iconTwo.secondItem.item}
                        </div>
                    </div>

                    <div className={classes.viewIcons}>
                        <img   src={this.state.iconThree.icon} 
                        style={{ height: 80, width: 60, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                        <div onClick={ () => this.clickItem(this.state.iconThree.firstItem, 2, 0)} 
                            className={classes.cardLetra} 
                            style={{backgroundColor: this.state.iconThree.firstItem.select ? 'rgb(231, 111, 81)' : '', 
                            opacity: this.state.iconThree.firstItem.disable ? '0.3' : 1,
                            border: this.state.iconThree.firstItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconThree.firstItem.select ? '#FFFFFF' : '#000000',
                            boxShadow: this.state.iconThree.firstItem.select ? '0.5px 1px 10px #000000' : ''}}>
                                {this.state.iconThree.firstItem.item}
                        </div>
                        <div onClick={ () => this.clickItem(this.state.iconThree.secondItem, 2, 1)} 
                            className={classes.cardLetra} 
                            style={{backgroundColor: this.state.iconThree.secondItem.select ? 'rgb(231, 111, 81)' : '',
                            opacity: this.state.iconThree.secondItem.disable ? '0.3' : 1,
                            border: this.state.iconThree.secondItem.select ? '2px solid transparent' : '2px solid #000000',
                            color: this.state.iconThree.secondItem.select ? '#FFFFFF' : '#000000',
                            marginLeft: 75, width: 150,  
                            boxShadow: this.state.iconThree.secondItem.select ? '0.5px 1px 10px #000000' : ''}}>
                                {this.state.iconThree.secondItem.item}
                        </div>
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
                        /> */}
                        <Sound
                            url={TenteNovamente}
                            playStatus={this.state.playTenteNovamente}
                            onLoading={() => {}}
                            onPlaying={() => {}}
                            onFinishedPlaying={() => {
                                    this.setState({
                                        playTenteNovamente: Sound.status.PAUSED
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

export default withStyles(styles)(AtividadeLigarPalavras);
