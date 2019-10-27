import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import iconFarmerOne from './../../icons/farmer.svg';
import iconFarmerTwo from './../../icons/farmer_second.svg';
import iconFarmerThree from './../../icons/farmer_three.svg';
import iconFarmerFour from './../../icons/farmer_four.svg';
import { Formik } from "formik";
import * as Yup from 'yup';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

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
    borderRadius: 10,
    cursor: 'pointer'
  },
  grid: {
    height: 70,
    display: 'flex', 
    justifyContent: 'center',
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
  },
  buttonModal: {
    color: '#FFFFFF', 
    height: 40,
    width: 90,
    backgroundColor: 'rgb(42, 157, 143)',
    borderRadius: 5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 15,
    cursor: 'pointer'
  },
  modal: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 400,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 5,
    fontSize: 20
  },
  cardModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        "&$focused": {
          color: "#2C5364"
        }
      }
    },
    MuiFormLabel: {
      root: {
          color: '#2C5364'
      }
    },
    MuiInput: {
      underline: {
        '&:after' : {
          borderBottom: '2px solid #2C5364'
        }
      },
    },
    MuiGrid: {
      item: {
        padding: 0
      }
    }
  }
  
})

class ViewQuadro extends Component {
  constructor(props){
    super(props);
    window.soundManager.setup({ debugMode: false });

    this.state = {
        open: false,
        indexItem: 0,
        opacity: false,
        name: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    }

    this.changeOpacity = this.changeOpacity.bind(this);
    this.onSalvar = this.onSalvar.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.clickFechar = this.clickFechar.bind(this);
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

  handleClose(){
    this.setState({
      open: false
    });
  }

  clickFechar(){
    this.setState({
      open: false
    })
  }

  onSalvar(){
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then((doc) => {
        firebase.firestore().collection("Usuario").doc(doc.user.uid).set({
            name: this.state.name,
            email: this.state.email,
            indexItem: this.state.indexItem
        })
        .then((docRef) => {
            this.props.history.push(
              '/'
          )
        })
        .catch((error) => {
          this.setState({
            open: true
          });
        });
      })
      .catch((error) => {
        this.setState({
          open: true
        });
      });
  }
  
  onClickIcon(index){
    this.setState({
        indexItem: index
    })
  }

  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.card} style={{ opacity: this.state.opacity ? 1 : 0 }}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.cardModal}>
            <div className={classes.modal}>
              Ocorreu um erro ao cadastrar usuário
              <div className={classes.buttonModal} onClick={this.clickFechar} > Fechar </div>
            </div>
          </div>
        </Modal>
          <Formik
            initialValues={{
              nome: this.state.name,
              email: this.state.email,
              senha: this.state.senha,
              confirmarSenha: this.state.confirmarSenha
            }}
            onSubmit={this.onSalvar}
            validationSchema={Yup.object().shape({
              nome: Yup.string()
              .required( 'Campo obrigatório' ),
              email: Yup.string()
              .required( 'Campo obrigatório' ),
              senha: Yup.string()
              .required( 'Campo obrigatório' ),
              confirmarSenha: Yup.string()
              .oneOf([Yup.ref('senha'), null], 'Senhas não confere')
              .required( 'Campo obrigatório' ),
            })}
          >
          {props => {
            const {
              values,
              handleSubmit,
              errors,
              touched,
              setFieldValue
            } = props;  return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={8} >
                  <Grid item xs={12} className={classes.grid} style={{marginTop: 15 }}>
                      <TextField 
                          label={'Nome'} 
                          value={values.nome}
                          onChange={(value) => {
                            setFieldValue("nome", value.currentTarget.value);

                            this.setState({
                              name: value.currentTarget.value
                            })
                          }}
                          onBlur={(value) => {
                            setFieldValue("nome", value.currentTarget.value);

                            this.setState({
                              name: value.currentTarget.value
                            })
                          }}
                          helperText={errors.nome && touched.nome ? errors.nome : ''}
                          error={errors.nome && touched.nome}
                      />
                  </Grid>
                  <Grid item xs={12} className={classes.grid}>
                      <TextField 
                          label={'Email'}
                          value={values.email}
                          onChange={(value) => {
                            setFieldValue("email", value.currentTarget.value);

                            this.setState({
                              email: value.currentTarget.value
                            })
                          }}
                          onBlur={(value) => {
                            setFieldValue("email", value.currentTarget.value);

                            this.setState({
                              email: value.currentTarget.value
                            })
                          }}
                          helperText={errors.email && touched.email ? errors.email : ''}
                          error={errors.email && touched.email}
                      />
                  </Grid>
                  <Grid item xs={12} className={classes.grid}>
                      <TextField 
                          type='password'
                          label={'Senha'}
                          value={values.senha}
                          onChange={(value) => {
                            setFieldValue("senha", value.currentTarget.value);

                            this.setState({
                              senha: value.currentTarget.value
                            })
                          }}
                          onBlur={(value) => {
                            setFieldValue("senha", value.currentTarget.value);

                            this.setState({
                              senha: value.currentTarget.value
                            })
                          }}
                          helperText={errors.senha && touched.senha ? errors.senha : ''}
                          error={errors.senha && touched.senha}
                      />
                  </Grid>
                  <Grid item xs={12} className={classes.grid}>
                      <TextField 
                          type='password'
                          label={'Confirmar senha'}
                          value={values.confirmarSenha}
                          onChange={(value) => {
                            setFieldValue("confirmarSenha", value.currentTarget.value);

                            this.setState({
                              confirmarSenha: value.currentTarget.value
                            })
                          }}
                          onBlur={(value) => {
                            setFieldValue("confirmarSenha", value.currentTarget.value);

                            this.setState({
                              confirmarSenha: value.currentTarget.value
                            })
                          }}
                          helperText={errors.confirmarSenha && touched.confirmarSenha ? errors.confirmarSenha : ''}
                          error={errors.confirmarSenha && touched.confirmarSenha}
                      />
                  </Grid>
                  <Grid item xs={12} className={classes.grid} style={{flexDirection: 'column', height: 170, padding: 0 }}>
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
                  <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', padding: 0}}>
                      <div className={classes.button} onClick={handleSubmit} >
                          Cadastrar
                      </div>
                      
                  </Grid>
              </Grid>
            </form>  
            )}}
          </Formik >
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(ViewQuadro);
