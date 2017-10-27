import React, { Component } from 'react';
import Textt from './Textt'
import ImageE from './ImageE'
class TextImg extends Component{
    render(){
        return (<div>
            <ImageE />
            <Textt />
        </div>);
    }
}

export default TextImg;