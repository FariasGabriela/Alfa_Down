import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';

import banana from '../../Audios/Palavras/banana.mp3';
import macaco from '../../Audios/Palavras/macaco.mp3';
import batata from '../../Audios/Palavras/batata.mp3';
import bala from '../../Audios/Palavras/bala.mp3';
import faca from '../../Audios/Palavras/faca.mp3';
import lampada from '../../Audios/Palavras/lampada.mp3';
import canela from '../../Audios/Palavras/canela.mp3';
import caneta from '../../Audios/Palavras/caneta.mp3';
import dedo from '../../Audios/Palavras/dedo.mp3';
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
import icondedo from './../../icons/dedo.svg';
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
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import * as animationData from './../../icons/winNivel.json';

const styles = ({
    divButton: {
        cursor: 'pointer',
        font: 20,
        height: 70,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(42, 157, 143)',
        borderRadius: 10,
        marginBottom: 15
    },
    divModal: {
        transition: 'opacity 1s linear',
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
        transition: 'opacity 1s linear',
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
    },
    itemSilaba: {
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: 20,
        borderBottom: '2px solid #000000', 
        width: 80, 
    }
})

class AtividadeMontarPalavra extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            animation: false,
            firstSilaba: '',
            secondSilaba: '',
            threeSilaba: '',
            indexItemSelect: 0,
            index: 0,
            open: false,
            playTenteNovamente: Sound.status.PAUSED,
            play: Sound.status.PAUSED,
            palavrasUtilizadas: [
                [ 'BANANA', 'MACACO', 'BATATA', 'BALA', 'FACA', 'LÂMPADA' ],
                [ 'FOCA', 'FOGO', 'GATO', 'GOIABA', 'COPO', 'CARRO' ],
                [ 'LUVA', 'LUPA', 'UVA', 'SUCO', 'TOURO', 'URUBU' ],
                [ 'LIXO', 'IOIÔ', 'LIMÃO', 'MEIA', 'PALITO', 'PAPAI' ],
                [ 'CANELA', 'CANETA', 'DEDO', 'JACARÉ', 'LEITE', 'PEIXE' ],
                [ 'MACACO', 'COPO', 'PALITO', 'MEIA', 'SUCO', 'DEDO']
            ], 
            iconsUtilizados: [
                [ iconbanana, iconmacaco, iconbatata, iconbala, iconfaca, iconlampada ],
                [ iconfoca, iconfogo, icongato, icongoiaba, iconcopo, iconcarro ],
                [ iconluva, iconlupa, iconuva, iconsuco, icontouro, iconurubu ],
                [ iconlixo, iconioio, iconlimao, iconmeia, iconpalito, iconpapai ],
                [ iconcanela, iconcaneta, icondedo, iconjacare, iconleite, iconpeixe ],
                [ iconmacaco, iconcopo, iconpalito, iconmeia, iconsuco, icondedo]
            ],
            sonsUtilizados: [
                [ banana, macaco, batata, bala, faca, lampada ],
                [ foca, fogo, gato, goiaba, copo, carro ],
                [ luva, lupa, uva, suco, touro, urubu ],
                [ lixo, ioio, limao, meia, palito, papai ],
                [ canela, caneta, dedo, jacare, leite, peixe ],
                [ macaco, copo, palito, meia, suco, dedo]
            ], 
            qtSilabas: 0,
            silabasAtual: [],
            silabas: [],
            qtSilabasOne: [2, 2, 2, 1, 1, 2],
            qtSilabasTwo: [1, 1, 1, 2, 1, 1],
            qtSilabasThree: [1, 1, 1, 1, 1, 2],
            qtSilabasFour: [1, 1, 1, 1, 2, 1],
            qtSilabasFive: [2, 2, 1, 2, 1, 1],
            qtSilabasSix: [2, 1, 2, 1, 1, 1],
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
                        indexSelect: 1,
                    },
                    {
                        key: 2,
                        name: 'BA',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 2,
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'MA',
                        select: false,
                        indexSelect: 0,
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
                        indexSelect: 2
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
                        indexSelect: 1
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
                        indexSelect: 1
                    },
                    {
                        key: 3,
                        name: 'BA',
                        select: false,
                        indexSelect: 0
                    },
                    {
                        key: 4,
                        name: 'TA',
                        select: false,
                        indexSelect: 2
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 1
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
                        indexSelect: 0
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'DA',
                        select: false,
                        indexSelect: 2
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
                        indexSelect: 0
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
                        indexSelect: 1
                    },
                ],
            ],
            silabasFour: [
                [
                    {
                        key: 0,
                        name: 'BE',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'NE',
                        select: false,
                        indexSelect: 1
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
                        indexSelect: 2
                    },
                    {
                        key: 4,
                        name: 'CA',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 0
                    },
                    {
                        key: 3,
                        name: 'TA',
                        select: false,
                        indexSelect: 2
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
                        indexSelect: 1
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
                        name: 'DE',
                        select: false,
                        indexSelect: 0
                    },
                    {
                        key: 3,
                        name: 'DO',
                        select: false,
                        indexSelect: 1
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
                        indexSelect: 2
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
                        indexSelect: 0
                    },
                    {
                        key: 5,
                        name: 'CA',
                        select: false,
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 1
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
                        indexSelect: 0
                    },
                ],
            ],
            silabasFive: [
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
                    },
                    {
                        key: 2,
                        name: 'PA',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 2
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
                        indexSelect: 0
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
                        indexSelect: 1
                    },
                ],
            ],
            silabasTwo: [
                [
                    {
                        key: 0,
                        name: 'FO',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
                    },
                    {
                        key: 5,
                        name: 'GO',
                        select: false,
                        indexSelect: 1
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 2
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 1
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
                        indexSelect: 0
                    },
                ],
            ],
            silabasThree: [
                [
                    {
                        key: 0,
                        name: 'LU',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'TOU',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 1
                    },
                    {
                        key: 1,
                        name: 'U',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 2
                    },
                    {
                        key: 5,
                        name: 'PU',
                        select: false,
                    },
                ],
            ],
            silabasSix: [
                [
                    {
                        key: 0,
                        name: 'MA',
                        select: false,
                        indexSelect: 0,
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
                        indexSelect: 2
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
                        indexSelect: 1
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
                        name: 'TA',
                        select: false,
                    },
                    {
                        key: 1,
                        name: 'CO',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 1
                    },
                    {
                        key: 2,
                        name: 'PA',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 2
                    },
                ],
                [
                    {
                        key: 0,
                        name: 'ME',
                        select: false,
                        indexSelect: 0
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
                        indexSelect: 1
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
                        indexSelect: 0
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
                        indexSelect: 1
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
                        name: 'DE',
                        select: false,
                        indexSelect: 0
                    },
                    {
                        key: 3,
                        name: 'DO',
                        select: false,
                        indexSelect: 1
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
            ],
            icon: iconbanana,
            soundSelect: banana,
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);
        this.clickBack = this.clickBack.bind(this);

    }

    componentDidMount(){
        var rodada = parseFloat(this.props.match.params.vogal);
        var silabas = [];
        var qtSilabas = [];

        if ( rodada === 0 ) {
            silabas = this.state.silabasOne;
            qtSilabas = this.state.qtSilabasOne;
        } else if ( rodada === 1 ) {
            silabas = this.state.silabasTwo;
            qtSilabas = this.state.qtSilabasTwo;
        } else if ( rodada === 2 ) {
            silabas = this.state.silabasThree;
            qtSilabas = this.state.qtSilabasThree;
        } else if ( rodada === 3 ) {
            silabas = this.state.silabasFour;
            qtSilabas = this.state.qtSilabasFour;
        } else if ( rodada === 4 ) {
            silabas = this.state.silabasFive;
            qtSilabas = this.state.qtSilabasFive;
        } else if ( rodada === 5 ){
            silabas = this.state.silabasSix;
            qtSilabas = this.state.qtSilabasSix;
        }

        this.setState({
            silabasAtual: silabas,
            qtSilabas: qtSilabas[this.props.match.params.index],
            play: Sound.status.PLAYING,
            silabas: silabas[this.props.match.params.index],
            icon: this.state.iconsUtilizados[rodada][parseFloat(this.props.match.params.index)],
            soundSelect: this.state.sonsUtilizados[rodada][parseFloat(this.props.match.params.index)],
        })
    }

    clickProximo(){
        var rodada = parseFloat(this.props.match.params.vogal);

        var silabas = [];
        var qtSilabas = [];

        if ( rodada === 0 ) {
            silabas = this.state.silabasOne;
            qtSilabas = this.state.qtSilabasOne;
        } else if ( rodada === 1 ) {
            silabas = this.state.silabasTwo;
            qtSilabas = this.state.qtSilabasTwo;
        } else if ( rodada === 2 ) {
            silabas = this.state.silabasThree;
            qtSilabas = this.state.qtSilabasThree;
        } else if ( rodada === 3 ) {
            silabas = this.state.silabasFour;
            qtSilabas = this.state.qtSilabasFour;
        } else if ( rodada === 4 ) {
            silabas = this.state.silabasFive;
            qtSilabas = this.state.qtSilabasFive;
        }  else if ( rodada === 5 ){
            silabas = this.state.silabasSix;
            qtSilabas = this.state.qtSilabasSix;
        }

       if ( this.state.index < 5){
        this.setState({
            qtSilabas: qtSilabas[this.state.index + 1],
            //qtSilabas: this.state.silabasAtual[this.state.index + 1],
            silabas: silabas[this.state.index + 1],
            icon: this.state.iconsUtilizados[rodada][this.state.index + 1],
            soundSelect: this.state.sonsUtilizados[rodada][this.state.index + 1],
            index: this.state.index + 1,
        }, () => {
            this.setState({
                play: Sound.status.PLAYING
            })
        })
       } else {
           if (this.state.open){
                if (rodada === 5){
                    this.props.history.push('/iniciar/6');
                } else {
                    this.props.history.push('/atividade-ligar/'+ this.props.match.params.vogal + "/" + this.props.match.params.index )
 
                }
           } else {
                this.setState({
                    open: true,
                    animation: false
                }, () => {
                    this.setState({
                        firstSilaba: '',
                        secondSilaba: '',
                        threeSilaba: '',
                        indexItemSelect: 0
                    })

                    setTimeout(() => { 
                        this.setState({
                            animation: true
                        })
                    }, 1200)
                })
            }
        }
    }

    clickItem(item){
        var list = this.state.silabas;
        list.forEach(doc => {
            if(item.key === doc.key) {
                doc.select = true;
            } else {
                doc.select = false;
            }
        }) 

        if (item.indexSelect !== undefined && item.indexSelect === this.state.indexItemSelect) {
            if ( this.state.indexItemSelect > 2 ) {
                this.setState({
                    open: true
                })
            } else {
                this.setState({
                    indexItemSelect: this.state.indexItemSelect + 1,
                    silabas: list
                })
            }

            if ( item.indexSelect === 0 ) {
                this.setState({
                    firstSilaba: item.name
                })
            } else if ( item.indexSelect === 1 ) {
                this.setState({
                    secondSilaba: item.name
                })
                if (this.state.qtSilabas === 1) {
                    /*var user = firebase.auth().currentUser;
                
                    firebase.firestore().collection("Progresso").doc(user.uid).set({
                        atividade: 'palavra',
                        vogal: parseFloat(this.props.match.params.vogal),
                        index: parseFloat(this.props.match.params.index)
                    })*/
                    firebase.auth().onAuthStateChanged(doc => {
                        if (doc) {
                            firebase.firestore().collection("Progresso").doc(doc.uid).set({
                                atividade: 'palavra',
                                vogal: parseFloat(this.props.match.params.vogal),
                                index: parseFloat(this.props.match.params.index)
                            })
                        }
                    })

                    setTimeout(() => { 
                        this.setState({
                            firstSilaba: '',
                            secondSilaba: '',
                            threeSilaba: '',
                            indexItemSelect: 0
                        })

                        this.clickProximo()
                    }, 1000);
                }
            } else if ( item.indexSelect === 2 ) {
                this.setState({
                    threeSilaba: item.name
                }, () => {
                    /*var user = firebase.auth().currentUser;
                
                    firebase.firestore().collection("Progresso").doc(user.uid).set({
                        atividade: 'palavra',
                        vogal: parseFloat(this.props.match.params.vogal),
                        index: parseFloat(this.props.match.params.index)
                    })*/
                    firebase.auth().onAuthStateChanged(doc => {
                        if (doc) {
                            firebase.firestore().collection("Progresso").doc(doc.uid).set({
                                atividade: 'palavra',
                                vogal: parseFloat(this.props.match.params.vogal),
                                index: parseFloat(this.props.match.params.index)
                            })
                        }
                    })
                    
                    setTimeout(() => { 
                        this.setState({
                            firstSilaba: '',
                            secondSilaba: '',
                            threeSilaba: '',
                            indexItemSelect: 0
                        })

                        this.clickProximo()
                      }, 1000);
                })
            }
            
        } else {
            this.setState({
                silabas: list,
                playTenteNovamente: Sound.status.PLAYING
            })
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
            'Atividade com palavras',
            'Monte a palavra pronunciada selecionando suas sílabas',
            'question'
        )
    }

    clickBack(){
        this.props.history.push(
            '/silaba/' + this.props.match.params.vogal + '/' + this.props.match.params.index
        )
    }

    render() {
        const {classes} = this.props;
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }

        return (
            <ViewQuadro 
                clickBack={this.clickBack}
                clickInfo={this.clickInfo}
                clickClose={this.clickClose}
                onClickOuvir={this.clickOuvir}
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 10}} >
                    <img   src={this.state.icon} 
                        style={{ height: 80, width: 80, marginRight: 10 }}
                        alt="Quadro" /> {/*Referenciar criador*/}
                    <div className={classes.itemSilaba} style={{marginRight: 5, marginLeft: 10}}>{this.state.firstSilaba}</div>
                    <div className={classes.itemSilaba} style={{marginRight: 5}}>{this.state.secondSilaba}</div>
                    {this.state.qtSilabas === 2 &&
                        <div className={classes.itemSilaba}>{this.state.threeSilaba}</div>
                    }
                    </div>
                    <div className={classes.silabas}>
                        {this.state.silabas.map((doc) => {
                            return (<div key={doc.key}
                                onClick={() => this.clickItem(doc)}
                                className={classes.name}
                                style={{
                                    fontSize: doc.name.length > 2 ? 58 : 70,
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
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            className={classes.modal}
                            open={this.state.open}
                        >
                        <div className={classes.divModal}>
                                <Lottie options={defaultOptions}
                                        height={400}
                                        width={400}
                                        isStopped={false}
                                        isPaused={this.state.animation}/>
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
