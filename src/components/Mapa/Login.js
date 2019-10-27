import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
    height: 80,
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
  divButtons: {
    display: 'flex',
    padding: 10,
    width: 200,
    justifyContent: 'space-between'
  },
  modalAll: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        height: 80
      }
    },
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
        email: '',
        senha: '',
    }

    this.onSalvar = this.onSalvar.bind(this);
    this.clickFechar = this.clickFechar.bind(this);
  }

  onSalvar(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then((doc) =>{
            firebase.firestore().collection("Usuario").doc(doc.user.uid).get().then((user) => {
                this.props.clickSalvar(user.data())
            })
        }).catch((err) => {
            //TODo: validar erro
        })
  }

  clickFechar(){
    this.props.clickFechar();
  }


  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
          <Formik
            initialValues={{
              email: this.state.email,
              senha: this.state.senha,
            }}
            onSubmit={this.onSalvar}
            validationSchema={Yup.object().shape({
              email: Yup.string()
              .required( 'Campo obrigatório' ),
              senha: Yup.string()
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
            <div className={classes.modalAll}>
              <Grid container spacing={8} style={{margin: 0}}>
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
              </Grid>
              <div className={classes.divButtons}>
              <div className={classes.buttonModal} onClick={handleSubmit} > Entrar </div>
              <div className={classes.buttonModal} onClick={this.clickFechar} > Fechar </div>
          </div>
            </div>  
            )}}
          </Formik >
          
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(ViewQuadro);
