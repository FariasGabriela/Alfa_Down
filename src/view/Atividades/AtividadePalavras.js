import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';

class AtividadePalavra extends Component {
    constructor(props){
        super(props);

        this.state = {
            silabas: [
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
            ]
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
    }

    clickProximo(){
        //this.setState({
        //    silaba: 'BA'
        //})
    }

    clickItem(item){
        console.log(item)
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
        return (
            <ViewQuadro 
                onClickProximo={this.clickProximo}>
                <div
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                fontSize: 100,
                height: '80%',
                width: '100%'}}>
                    <div style={{
                            display: 'flex',
                            width: '81%',
                            height: '64%',
                            flexWrap: 'wrap'
                    }} >
                        {this.state.silabas.map((doc) => {
                            return (<div key={doc.key}
                                onClick={() => this.clickItem(doc)}
                                style={{ display: 'flex',
                                    height: 116,
                                    fontSize: 70,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: doc.select ? 'rgb(231, 111, 81)' : '',
                                    borderRadius: doc.select ? 20 : '',
                                    color: doc.select ? '#FFFFFF' : '',
                                    boxShadow: doc.select ?'0px 6px 9px rgb(0, 0, 0, 0.2)' : '',
                                    width: 119 }}>{doc.name}</div>)
                        })}
                    </div>
                </div>
            </ViewQuadro>
        );
    }
}

export default AtividadePalavra;
