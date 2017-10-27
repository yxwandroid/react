import React, { Component } from 'react';
import Square from './Square'

class LikeButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
          like: false,
        };
      }
    

    handleClick(){
        
       this.setState({like: !this.state.like});
    };
    render(){
        var text = this.state.like? '喜欢' : '不喜欢';
        
        return (<div><p onClick={() => this.handleClick()}>我{text}&nbsp;</p> <Square value="1" /> <Square value="2" /></div>);
    };
}

export default LikeButton;