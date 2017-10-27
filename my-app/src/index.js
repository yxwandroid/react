import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Foot from './Foot';
import TextImg from './TextImg';
import LikeButton from './LikeButton';
import Wellcome from './Wellcome';
import Clock from './Clock';
import ListTrain from './ListTrain'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Foot />, document.getElementById('foot'));
ReactDOM.render(<TextImg />, document.getElementById('comp'));
ReactDOM.render(<LikeButton />, document.getElementById('like'));
ReactDOM.render(<div><Wellcome name="Tommy" /> <Clock /></div>, document.getElementById('wellcome'));
ReactDOM.render(<ListTrain />, document.getElementById('list'));


registerServiceWorker();
