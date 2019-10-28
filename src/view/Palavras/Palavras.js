import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import banana from '../../Audios/Palavras/banana.mp3';
import macaco from '../../Audios/Palavras/macaco.mp3';
import batata from '../../Audios/Palavras/batata.mp3';
import bala from '../../Audios/Palavras/bala.mp3';
import faca from '../../Audios/Palavras/faca.mp3';
import lampada from '../../Audios/Palavras/lampada.mp3';
import canela from '../../Audios/Palavras/canela.mp3';
import caneta from '../../Audios/Palavras/caneta.mp3';
import abacate from '../../Audios/Palavras/abacate.mp3';
import jacare from '../../Audios/Palavras/jacare.mp3';
import leite from '../../Audios/Palavras/leite.mp3';
import peixe from '../../Audios/Palavras/peixe.mp3';
import lixo from '../../Audios/Palavras/lixo.mp3';
import ioio from '../../Audios/Palavras/ioio.mp3';
import limao from '../../Audios/Palavras/limao.mp3';
import meia from '../../Audios/Palavras/meia.mp3';
import palito from '../../Audios/Palavras/palito.mp3';
import papai from '../../Audios/Palavras/papai.mp3';
import foca from '../../Audios/Palavras/foca.mp3';
import fogo from '../../Audios/Palavras/fogo.mp3';
import gato from '../../Audios/Palavras/gato.mp3';
import goiaba from '../../Audios/Palavras/goiaba.mp3';
import copo from '../../Audios/Palavras/copo.mp3';
import carro from '../../Audios/Palavras/carro.mp3';
import luva from '../../Audios/Palavras/luva.mp3';
import lupa from '../../Audios/Palavras/lupa.mp3';
import uva from '../../Audios/Palavras/uva.mp3';
import suco from '../../Audios/Palavras/suco.mp3';
import touro from '../../Audios/Palavras/touro.mp3';
import urubu from '../../Audios/Palavras/urubu.mp3';

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
import Swal from 'sweetalert2';

const style = ({
    view: {
        position: 'absolute',
        top: 5,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 85,
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
            icon: iconbanana,
            palavrasUtilizadas: [
                [ 'BANANA', 'MACACO', 'BATATA', 'BALA', 'FACA', 'LÂMPADA' ],
                [ 'CANELA', 'CANETA', 'ABACATE', 'JACARÉ', 'LEITE', 'PEIXE' ],
                [ 'LIXO', 'IOIÔ', 'LIMÃO', 'MEIA', 'PALITO', 'PAPAI' ],
                [ 'FOCA', 'FOGO', 'GATO', 'GOIABA', 'COPO', 'CARRO' ],
                [ 'LUVA', 'LUPA', 'UVA', 'SUCO', 'TOURO', 'URUBU' ]
            ], 
            iconsUtilizados: [
                [ iconbanana, iconmacaco, iconbatata, iconbala, iconfaca, iconlampada ],
                [ iconcanela, iconcaneta, iconabacate, iconjacare, iconleite, iconpeixe ],
                [ iconlixo, iconioio, iconlimao, iconmeia, iconpalito, iconpapai ],
                [ iconfoca, iconfogo, icongato, icongoiaba, iconcopo, iconcarro ],
                [ iconluva, iconlupa, iconuva, iconsuco, icontouro, iconurubu ]
            ],
            sonsUtilizados: [
                [ banana, macaco, batata, bala, faca, lampada ],
                [ canela, caneta, abacate, jacare, leite, peixe ],
                [ lixo, ioio, limao, meia, palito, papai ],
                [ foca, fogo, gato, goiaba, copo, carro ],
                [ luva, lupa, uva, suco, touro, urubu ]
            ],
            palavraAtual: '',
            indexNivelPalavras: 0,
            index: 0,
            play: Sound.status.PAUSED,
            sound: banana
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);

    }

    componentDidMount(){
        var rodada = parseFloat(this.props.match.params.vogal);

        this.setState({
            icon: this.state.iconsUtilizados[rodada][parseFloat(this.props.match.params.index)],
            sound: this.state.sonsUtilizados[rodada][parseFloat(this.props.match.params.index)],
            palavraAtual: this.state.palavrasUtilizadas[rodada][parseFloat(this.props.match.params.index)],
            letraNivel: rodada,
            indexNivelPalavras: parseFloat(this.props.match.params.index)
        })
        
    }

    clickProximo(){  
        if ( this.state.indexNivelPalavras < 5 ){
            this.setState({
                sound: this.state.sonsUtilizados[this.state.letraNivel][this.state.indexNivelPalavras + 1],
                icon: this.state.iconsUtilizados[this.state.letraNivel][this.state.indexNivelPalavras + 1],
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

    clickClose(){
        this.props.history.push('/')
    }

    clickInfo(){
        Swal.fire(
            'Palavra',
            'Veja a palavra e escute a sua pronúncia clicando no botão ouvir',
            'question'
        )
    }

    render() {
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
                clickInfo={this.clickInfo}
                clickClose={this.clickClose}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                <img   src={this.state.icon} 
                    style={{ height: 150, width: 150 }}
                    alt="Quadro" /> {/*Referenciar criador*/}
                {this.state.palavraAtual}
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

export default withStyles(style)(Palavras);
