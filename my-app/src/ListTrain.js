import React, { Component } from 'react';
function ListItem(props) {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:
      <li key={value.toString()}>
        {value}
      </li>
    );
  }
  
class ListTrain extends Component{
    render(){
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number)=>
            <li key={number.toString()}>
            {number}
            </li>);
       
        return (
            <ul>
            {listItems}
            </ul>
        );
       
      
    }
}

export default ListTrain;