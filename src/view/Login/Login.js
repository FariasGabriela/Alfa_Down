import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import iconFarmerOne from './../../icons/farmer.svg';
import iconFarmerTwo from './../../icons/farmer_second.svg';
import iconFarmerThree from './../../icons/farmer_three.svg';
import iconFarmerFour from './../../icons/farmer_four.svg';

const styles = ({
  card: { 
    transition: 'opacity 1s linear',
    backgroundColor: '#FFFFFF', 
    margin: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    boxShadow: '0px 6px 9px rgb(0, 0, 0, 0.2)',
    padding: 20,
    maxWidth: 600,
  },
  button: {
    height: 40,
    backgroundColor: 'rgb(42, 157, 143)',
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    borderRadius: 10
  },
  grid: {
    display: 'flex', 
    justifyContent: 'center',
    padding: '10px !important',
    alignItems: 'center'
  },
  allGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  image: {
    cursor: 'pointer',
    '&:hover' : {
        boxShadow: '0.5px 1px 10px #000000'
    }
  },
  img: {
      height: 70,
      width: 100
  },
  cardIcons: {
    display: 'flex'
  },
  cardWrite: {
    height: 40
  }
})

class ViewQuadro extends Component {
  constructor(props){
    super(props);
    window.soundManager.setup({ debugMode: false });

    this.state = {
        indexItem: 0,
        opacity: false,
        name: '',
        email: '',
        senha: ''
    }

    this.changeOpacity = this.changeOpacity.bind(this);
    this.onSalvar = this.onSalvar.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
  }

  componentDidMount(){
    setTimeout(() => { 
      this.changeOpacity()
    }, 100);
   
  }

  changeOpacity(){
    this.setState({
      opacity: true
    })
  }

  onSalvar(){
      console.log("salvar itens");
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.senha);
      console.log(this.state.indexItem);
  }
  
  onClickIcon(index){
    this.setState({
        indexItem: index
    })
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.card} style={{ opacity: this.state.opacity ? 1 : 0 }}>
        <Grid container spacing={8} >
            <Grid item xs={12} className={classes.grid}>
                <TextField 
                    label={'Nome'} 
                    value={this.state.name}
                    onChange={(value) => {
                        this.setState({
                            name: value.target.value
                        })
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
                <TextField 
                    label={'Email'}
                    value={this.state.email}
                    onChange={(value) => {
                        this.setState({
                            email: value.target.value
                        })
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
                <TextField 
                    type='password'
                    label={'Senha'}
                    value={this.state.senha}
                    onChange={(value) => {
                        this.setState({
                            senha: value.target.value
                        })
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.grid} style={{flexDirection: 'column'}}>
                <div className={classes.cardWrite}>
                   ESCOLHA SEU PERSONAGEM 
                </div>
                <div className={classes.cardIcons}>
                    <div style={{boxShadow: this.state.indexItem === 0 ? '0.5px 1px 10px #000000' : null}} className={classes.image} onClick={() => this.onClickIcon(0)} >
                        <img   src={iconFarmerOne} 
                                className={classes.img}
                                alt="Quadro"/> {/*Referenciar criador*/}
                    </div>
                    <div style={{boxShadow: this.state.indexItem === 1 ? '0.5px 1px 10px #000000' : null}} className={classes.image} onClick={() => this.onClickIcon(1)}>
                        <img   src={iconFarmerTwo} 
                                className={classes.img}
                                alt="Quadro"/> {/*Referenciar criador*/}
                    </div>
                    <div style={{boxShadow: this.state.indexItem === 2 ? '0.5px 1px 10px #000000' : null}} className={classes.image} onClick={() => this.onClickIcon(2)}>
                        <img   src={iconFarmerThree} 
                                className={classes.img}
                                alt="Quadro"/> {/*Referenciar criador*/}
                    </div>
                    <div style={{boxShadow: this.state.indexItem === 3 ? '0.5px 1px 10px #000000' : null}} className={classes.image} onClick={() => this.onClickIcon(3)}>
                        <img   src={iconFarmerFour} 
                                className={classes.img}
                                alt="Quadro"/> {/*Referenciar criador*/}
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <div className={classes.button} onClick={this.onSalvar} >
                    Cadastrar
                </div>
                
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ViewQuadro);
