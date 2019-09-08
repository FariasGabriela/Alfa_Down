import React, {Component} from 'react';


class Button extends Component {

    render(){
        return (
            <div 
            style={{
                backgroundColor: 'rgb(42, 157, 143)',
                height: 100,
                width: 100,
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
                }}
                onClick={this.props.onClick}> 
               <img   src={this.props.icon} 
                style={{ height: 40, width: 45 }}
                alt="Quadro" /> {/*Referenciar criador*/}
                <p style={{ fontSize: 20, 
                            margin: 0,
                            marginTop: 10,
                            color: '#FFFFFF'}} >
                    {this.props.name}
                </p> 
            </div>
        )
    }
}

export default Button;