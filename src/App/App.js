import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Home from './components/home/Home';
import Pictures from "./components/pictures/Pictures";
import About from "./components/about/About";
import Documentation from "./components/documentation/Documentation";

class App extends Component {

    //routing logic
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component = {Home}/>
                    <Route exact path='/documentation' component = {Documentation}/>
                    <Route exact path='/linkedIn' component={() => window.location = 'https://www.linkedin.com/in/ola-lium-9a1a54112/'}/>
                    <Route exact path='/github' component={() => window.location = 'https://github.com/olalium'}/>
                    <Route exact path='/pictures' component={Pictures}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </div>
        );

        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;
