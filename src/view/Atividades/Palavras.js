import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';

class Palavra extends Component {
    constructor(props){
        super(props);

        this.state = {
            silaba: 'A'
        }

        this.clickProximo = this.clickProximo.bind(this);
    }

    clickProximo(){
        this.setState({
            silaba: 'BA'
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
                fontSize: 196,
                height: '80%',
                width: '100%'
                }}>
                {this.state.silaba}
                </div>
            </ViewQuadro>
        );
    }
}

export default Palavra;
