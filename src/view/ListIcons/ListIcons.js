import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import alligator from './../../icons/alligator.svg';
import avocado from './../../icons/avocado.svg';
import bala from './../../icons/bala.svg';
import banana from './../../icons/banana.svg';
import bull from './../../icons/bull.svg';
import car from './../../icons/car.svg';
import cat from './../../icons/cat.svg';
import cinnamon from './../../icons/cinnamon.svg';
import farmer_four from './../../icons/farmer_four.svg';
import farmer_second from './../../icons/farmer_second.svg';
import farmer_three from './../../icons/farmer_three.svg';
import farmer from './../../icons/farmer.svg';
import father from './../../icons/father.svg';
import fire from './../../icons/fire.svg';
import fish from './../../icons/fish.svg';
import footprint from './../../icons/footprint.svg';
import garbage from './../../icons/garbage.svg';
import glass from './../../icons/glass.svg';
import grapes from './../../icons/grapes.svg';
import guava from './../../icons/guava.svg';
import knife from './../../icons/knife.svg';
import lampada from './../../icons/lampada.svg';
import lemon from './../../icons/lemon.svg';
import match from './../../icons/match.svg';
import milk from './../../icons/milk.svg';
import mitten from './../../icons/mitten.svg';
import monkey from './../../icons/monkey.svg';
import orangeJuice from './../../icons/orange-juice.svg';
import pen from './../../icons/pen.svg';
import play from './../../icons/play.svg';
import potato from './../../icons/potato.svg';
import quadro from './../../icons/Quadro.svg';
import research from './../../icons/research.svg';
import rightArrow from './../../icons/right-arrow.svg';
import seal from './../../icons/seal.svg';
import socks from './../../icons/socks.svg';
import speaker from './../../icons/speaker.svg';
import trofeu from './../../icons/trofeu.svg';
import vulture from './../../icons/vulture.svg';
import yoyo from './../../icons/yoyo.svg';
import crown from './../../icons/crown.svg';
import Grid from '@material-ui/core/Grid';

const styles = ({
    img: {
        height: 70,
        width: 100
    },
    card: {
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }
})

class ListIcons extends Component {

    constructor(props){
        super(props);

        window.soundManager.setup({ debugMode: false });
    }

    render(){
        const {classes} = this.props;

        return (
            <div className={classes.card}>
                <Grid container spacing={8} >
                    <Grid item xs={12} className={classes.grid} style={{marginTop: 15, fontSize: 20, display: 'flex', justifyContent: 'center' }}>
                        <div> As imagens utilizadas neste trabalho, foram retiradas no site <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={alligator} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={avocado} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={bala} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={banana} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>   

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={bull} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={car} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={cat} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={cinnamon} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid> 

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={farmer_four} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={farmer_second} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={farmer_three} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={farmer} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid> 

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={father} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={fire} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={fish} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={footprint} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={garbage} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={glass} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={grapes} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={guava} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={knife} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={lampada} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={lemon} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={match} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  


                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={milk} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={mitten} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={monkey} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={orangeJuice} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={pen} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={play} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={potato} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={quadro} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={research} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={rightArrow} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/lyolya" title="Lyolya">Lyolya</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={seal} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={socks} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid>  

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={speaker} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={trofeu} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={vulture} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={yoyo} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                </Grid> 

                <Grid container spacing={8} >
                    <Grid item xs={3} className={classes.grid} style={{marginTop: 15 }}>
                        <img   src={crown} 
                            className={classes.img}
                            alt="Quadro"/> {/*Referenciar criador*/}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ListIcons);
