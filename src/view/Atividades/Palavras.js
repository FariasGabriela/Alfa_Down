import React, { Component } from 'react';
import ViewQuadro from './../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/styles';

const style = ({
    view: {
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
        const {classes} = this.props;
        
        return (
            <ViewQuadro 
                onClickProximo={this.clickProximo}>
                <div className={classes.view}>
                {this.state.silaba}
                </div>
            </ViewQuadro>
        );
    }
}

export default withStyles(style)(Palavra);
