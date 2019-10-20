import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
//import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';
import Trofeu from './../../icons/trofeu.svg';

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
        top: -35,
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

class AtividadeMontarPalavra extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            index: 0,
            open: false,
            playTenteNovamente: Sound.status.PAUSED,
            play: Sound.status.PAUSED,
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
            palavrasUtilizadas: [
                [ 'BANANA', 'MACACO', 'BATATA', 'BALA', 'FACA', 'LÂMPADA' ],
                [ 'CANELA', 'CANETA', 'ABACATE', 'JACARÉ', 'LEITE', 'PEIXE' ],
                [ 'LIXO', 'IOIÔ', 'LIMÃO', 'MEIA', 'PALITO', 'PAPAI' ],
                [ 'FOCA', 'FOGO', 'GATO', 'GOIABA', 'COPO', 'CARRO' ],
                [ 'LUVA', 'LUPA', 'UVA', 'SUCO', 'TOURO', 'URUBU' ]
            ], 
            silabas: [],
            silabasOne: [
                [
                    {
                        key: 0,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'NA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'NA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'MA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CO',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'NA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'VA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'FA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'VA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'TA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'FA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'DA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'QUA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LAM',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'PA',
                        select: false,
                    },
                ],
            ],
            silabasTwo: [
                [
                    {
                        key: 0,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'NE',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'MA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'ME',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'BE',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'NE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TE',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'A',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'RÉ',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'VA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'JA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LEI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'TE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'DA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'XE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'PEI',
                        select: false,
                    },
                ],
            ],
            silabasThree: [
                [
                    {
                        key: 0,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XO',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'MI',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'IO',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'TI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'IO',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'NE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'MÃO',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'PI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'BI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TO',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'IA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'ME',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'PI',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XE',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'TO',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'DE',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'XI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'RI',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'PAI',
                        select: false,
                    },
                ],
            ],
            silabasFour: [
                [
                    {
                        key: 0,
                        name: 'FO',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'NO',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LE',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'CA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'MO',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'ME',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LE',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'TO',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'FO',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'GO',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TI',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'TO',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BO',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'BI',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'GA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'TE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'GO',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'IO',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'PE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'IA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'JI',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'BA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'CO',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CI',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RE',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XI',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'PO',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'DA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'TI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'TO',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RO',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'RA',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CAR',
                        select: false,
                    },
                ],
            ],
            silabasFive: [
                [
                    {
                        key: 0,
                        name: 'U',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'NE',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'BE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'VA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'CI',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'MU',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'ME',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LU',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'CO',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'PA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'BU',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'NU',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TE',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'U',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'A',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'BU',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'TO',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'VA',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'BA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'RE',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'SU',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'VA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'JU',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'CO',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TOU',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'LI',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'NA',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'RO',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'XO',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'ZE',
                        select: false,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'RU',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'U',
                        select: false,
                    },
                    {
                        key: 2,
                        name: 'XE',
                        select: false,
                    },
                    {
                        key: 3,
                        name: 'LA',
                        select: false,
                    },
                    {
                        key: 4,
                        name: 'BU',
                        select: false,
                    },
                    {
                        key: 5,
                        name: 'PU',
                        select: false,
                    },
                ],
            ],
            icon: iconbanana,
            soundSelect: banana,
            indexSoundSelect: 0,
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
    }

    componentDidMount(){
        var rodada = parseFloat(this.props.match.params.vogal);
        var silabas = [];

        if ( rodada === 0 ) {
            silabas = this.state.silabasOne
        } else if ( rodada === 1 ) {
            silabas = this.state.silabasTwo
        } else if ( rodada === 2 ) {
            silabas = this.state.silabasThree
        } else if ( rodada === 3 ) {
            silabas = this.state.silabasFour
        } else if ( rodada === 4 ) {
            silabas = this.state.silabasFive
        } 

        this.setState({
            silabas: silabas[this.props.match.params.index],
            icon: this.state.iconsUtilizados[rodada][parseFloat(this.props.match.params.index)],
            soundSelect: this.state.sonsUtilizados[rodada][parseFloat(this.props.match.params.index)],
        })
    }

    clickProximo(){
        var rodada = parseFloat(this.props.match.params.vogal);

        var silabas = [];

        if ( rodada === 0 ) {
            silabas = this.state.silabasOne
        } else if ( rodada === 1 ) {
            silabas = this.state.silabasTwo
        } else if ( rodada === 2 ) {
            silabas = this.state.silabasThree
        } else if ( rodada === 3 ) {
            silabas = this.state.silabasFour
        } else if ( rodada === 4 ) {
            silabas = this.state.silabasFive
        } 

       if ( this.state.index < 5){
        this.setState({
            silabas: silabas[this.state.index + 1],
            icon: this.state.iconsUtilizados[rodada][this.state.index + 1],
            soundSelect: this.state.sonsUtilizados[rodada][this.state.index + 1],
            index: this.state.index + 1,
        })
       } else {
        this.props.history.push('/atividade-ligar/'+ this.props.match.params.vogal + "/" + this.props.match.params.index )
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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 10}} >
                    <img   src={this.state.icon} 
                        style={{ height: 80, width: 80, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                    <div style={{borderBottom: '2px solid #000000', width: 80, marginRight: 5, marginLeft: 10}} ></div>
                    <div style={{borderBottom: '2px solid #000000', width: 80, marginRight: 5}} ></div>
                    <div style={{borderBottom: '2px solid #000000', width: 80}} ></div>
                    </div>
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

export default withStyles(styles)(AtividadeMontarPalavra);
