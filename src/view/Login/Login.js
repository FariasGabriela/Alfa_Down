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
  }
})

const theme = createMuiTheme({
  overrides: {
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
  }

  componentDidMount(){
    setTimeout(() => { 
      this.changeOpacity()
    }, 100);
   
      var firebaseConfig = {
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
  /*
        firebase.auth().signInWithEmailAndPassword('farias.gabrielaa@gmail.com', ' 123456').then((doc) =>{
            console.log('sucess')
            console.log(doc)
        }).catch((err) => {
            console.log(err)
        })*/

    
  }

  changeOpacity(){
    this.setState({
      opacity: true
    })
  }

  onSalvar(){
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        firebase.firestore().collection("Usuario").add({
            name: this.state.name,
            email: this.state.email,
            indexItem: this.state.indexItem
        }) //todo: pegar id do usuario para id da tabela
        .then((docRef) => {
            this.props.history.push(
              '/'
          )
        })
        .catch((error) => {
            //TODo: validar erro
        });
      })
      .catch((error) => {
        //todo: validar erro
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
          <Formik
            initialValues={{
              nome: this.state.name,
              email: this.state.email,
              senha: this.state.senha
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
              .oneOf([Yup.ref('senha'), null], 'Senhas diferentes') //TODO: MUDAR A FRASE
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
