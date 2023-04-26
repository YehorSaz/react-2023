import {Component} from "react";

import './App.css';

import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

class App extends Component {

    render() {

        return (

            <div className={'wrapper'}>

                <div className={'left'}><Posts/></div>
                <div className={'right'}><Comments/></div>

            </div>
        );
    }
}

export default App;
