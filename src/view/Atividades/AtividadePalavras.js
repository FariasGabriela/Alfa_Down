import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';

const styles = ({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 100,
        height: '80%',
        width: '100%'
    },
    silabas: {
        display: 'flex',
        width: '81%',
        height: '64%',
        flexWrap: 'wrap'
    },
    name: {
        display: 'flex',
        height: 116,
        fontSize: 70,
        alignItems: 'center',
        justifyContent: 'center',
        width: 119
    }
})

class AtividadePalavra extends Component {
    constructor(props){
        super(props);

        this.state = {
            silabas: [],
            silabasOne: [
                {
                    key: 0,
                    name: 'BA',
                    select: false
                },
                {   
                    key: 1,
                    name: 'CA',
                    select: false
                },
                {
                    key: 2,
                    name: 'DA',
                    select: false
                },
                {
                    key: 3,
                    name: 'FA',
                    select: false
                },
                {
                    key: 4,
                    name: 'GA',
                    select: false
                },
                {   
                    key: 5,
                    name: 'JA',
                    select: false
                },
            ],
            sibalasTwo: [
                {
                    key: 0,
                    name: 'JA',
                    select: false
                },
                {   
                    key: 1,
                    name: 'LA',
                    select: false
                },
                {
                    key: 2,
                    name: 'MA',
                    select: false
                },
                {
                    key: 3,
                    name: 'NA',
                    select: false
                },
                {
                    key: 4,
                    name: 'PA',
                    select: false
                },
                {   
                    key: 5,
                    name: 'QA',
                    select: false
                },
            ],
            silabasThree: [
                {
                    key: 0,
                    name: 'RA',
                    select: false
                },
                {   
                    key: 1,
                    name: 'SA',
                    select: false
                },
                {
                    key: 2,
                    name: 'TA',
                    select: false
                },
                {
                    key: 3,
                    name: 'VA',
                    select: false
                },
                {
                    key: 4,
                    name: 'XA',
                    select: false
                },
                {   
                    key: 5,
                    name: 'ZA',
                    select: false
                },
            ]
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
    }

    componentDidMount(){
        console.log(this.props.match.params.index)
        const value = parseFloat(this.props.match.params.index)
        if ( value === 0 ) {
            console.log("teste")
            this.setState({
                silabas: this.state.silabasOne
            })
        } else if ( value === 1 ) {
            this.setState({
                silabas: this.state.sibalasTwo
            })
        } else if ( value === 2 ) {
            this.setState({
                silabas: this.state.silabasThree
            })
        }
    }

    clickProximo(){
        var value = parseFloat(this.props.match.params.index)
        if ( value !== 2 ) {
            this.props.history.push(
                '/palavra/' + this.props.match.params.vogal + "/" + (value + 1)
            )
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

        console.log(list)
        this.setState({
            silabas: list
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <ViewQuadro 
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
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
                    </div>
                </div>
            </ViewQuadro>
        );
    }
}

export default withStyles(styles)(AtividadePalavra);
