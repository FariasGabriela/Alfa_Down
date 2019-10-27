import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro'
import { withStyles } from '@material-ui/styles';
import Sound from 'react-sound';
import A from '../../Audios/a.mp3';
import E from '../../Audios/e.mp3';
import I from '../../Audios/i.mp3';
import O from '../../Audios/o.mp3';
import U from '../../Audios/u.mp3';
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
import BE from '../../Audios/be.mp3';
import CE from '../../Audios/ce.mp3';
import DE from '../../Audios/de.mp3';
import FE from '../../Audios/fe.mp3';
import GE from '../../Audios/ge.mp3';
import HE from '../../Audios/he.mp3';
import JE from '../../Audios/je.mp3';
import LE from '../../Audios/le.mp3';
import ME from '../../Audios/me.mp3';
import NE from '../../Audios/ne.mp3';
import PE from '../../Audios/pe.mp3';
import QUE from '../../Audios/que.mp3';
import RE from '../../Audios/re.mp3';
import SE from '../../Audios/se.mp3';
import TE from '../../Audios/te.mp3';
import VE from '../../Audios/ve.mp3';
import XE from '../../Audios/xe.mp3';
import ZE from '../../Audios/ze.mp3';
import BI from '../../Audios/bi.mp3';
import CI from '../../Audios/ci.mp3';
import DI from '../../Audios/di.mp3';
import FI from '../../Audios/fi.mp3';
import GI from '../../Audios/gui.mp3';
import HI from '../../Audios/hi.mp3';
import JI from '../../Audios/ji.mp3';
import LI from '../../Audios/li.mp3';
import MI from '../../Audios/mi.mp3';
import NI from '../../Audios/ni.mp3';
import PI from '../../Audios/pi.mp3';
import QUI from '../../Audios/qui.mp3';
import RI from '../../Audios/ri.mp3';
import SI from '../../Audios/si.mp3';
import TI from '../../Audios/ti.mp3';
import VI from '../../Audios/vi.mp3';
import XI from '../../Audios/xi.mp3';
import ZI from '../../Audios/zi.mp3';
import BO from '../../Audios/bo.mp3';
import CO from '../../Audios/co.mp3';
import DO from '../../Audios/do.mp3';
import FO from '../../Audios/fo.mp3';
import GO from '../../Audios/go.mp3';
import HO from '../../Audios/ho.mp3';
import JO from '../../Audios/jo.mp3';
import LO from '../../Audios/lo.mp3';
import MO from '../../Audios/mo.mp3';
import NO from '../../Audios/no.mp3';
import PO from '../../Audios/po.mp3';
import QUO from '../../Audios/quo.mp3';
import RO from '../../Audios/ro.mp3';
import SO from '../../Audios/so.mp3';
import TO from '../../Audios/to.mp3';
import VO from '../../Audios/vo.mp3';
import XO from '../../Audios/xo.mp3';
import ZO from '../../Audios/zo.mp3';
import BU from '../../Audios/bu.mp3';
import CU from '../../Audios/cu.mp3';
import DU from '../../Audios/du.mp3';
import FU from '../../Audios/fu.mp3';
import GU from '../../Audios/gu.mp3';
import HU from '../../Audios/hu.mp3';
import JU from '../../Audios/ju.mp3';
import LU from '../../Audios/lu.mp3';
import MU from '../../Audios/mu.mp3';
import NU from '../../Audios/nu.mp3';
import PU from '../../Audios/pu.mp3';
import QU from '../../Audios/qu.mp3';
import RU from '../../Audios/ru.mp3';
import SU from '../../Audios/su.mp3';
import TU from '../../Audios/tu.mp3';
import VU from '../../Audios/vu.mp3';
import XU from '../../Audios/xu.mp3';
import ZU from '../../Audios/zu.mp3';

const style = ({
    view: {
        transition: 'opacity 1s linear',
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

class Silabas extends Component {
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
            listVogais: [A, O, U, I, E],
            soundListA: [
                [BA, CA, DA, FA, GA, HA],
                [JA, LA, MA, NA, PA, QUA],
                [RA, SA, TA, VA, XA, ZA]
            ],
            soundListO: [
                [BO, CO, DO, FO, GO, HO],
                [JO, LO, MO, NO, PO, QUO],
                [RO, SO, TO, VO, XO, ZO]
            ],
            soundListU: [
                [BU, CU, DU, FU, GU, HU],
                [JU, LU, MU, NU, PU, QU],
                [RU, SU, TU, VU, XU, ZU]
            ],
            soundListI: [
                [BI, CI, DI, FI, GI, HI],
                [JI, LI, MI, NI, PI, QUI],
                [RI, SI, TI, VI, XI, ZI]
            ],
            soundListE: [
                [BE, CE, DE, FE, GE, HE],
                [JE, LE, ME, NE, PE, QUE],
                [RE, SE, TE, VE, XE, ZE]
            ],
            soundList: [],
            indexNivelSilabas: 0,
            index: 0,
            play: Sound.status.PAUSED
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
    }

    componentDidMount(){
        var soundList = [];
        var somVogal = {}; 
        var vogalShow = '';

        if (parseFloat(this.props.match.params.vogal) === 0) {
            soundList = this.state.soundListA;
            somVogal = this.state.listVogais[0];
            vogalShow = 'A';
        } else if (parseFloat(this.props.match.params.vogal) === 1) {
            soundList = this.state.soundListO;
            somVogal = this.state.listVogais[1];
            vogalShow = 'O';
        } else if (parseFloat(this.props.match.params.vogal) === 2) {
            soundList = this.state.soundListU;
            somVogal = this.state.listVogais[2];
            vogalShow = 'U';
        }  else if (parseFloat(this.props.match.params.vogal) === 3) {
            soundList = this.state.soundListI;
            somVogal = this.state.listVogais[3];
            vogalShow = 'I';
        } else if (parseFloat(this.props.match.params.vogal) === 4) {
            soundList = this.state.soundListE;
            somVogal = this.state.listVogais[4];
            vogalShow = 'E';
        }

        this.setState({
            sound: somVogal,
            silaba: vogalShow,
            soundList: soundList,
            letraNivel: vogalShow,
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
            this.props.history.push('/atividade/'+ parseFloat(this.props.match.params.vogal) + "/" + this.state.indexNivelSilabas )
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

    render() {
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
                clickClose={this.clickClose}
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

export default withStyles(style)(Silabas);
