import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './nav.js';

export default class App extends Component{
    render(){
        return (
            <div>
                <Nav />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
