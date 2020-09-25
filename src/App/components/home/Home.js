import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import "./Home.css"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            ip: "unknown",
            nips: 0
        };
    }

    componentDidMount() {
        this.callApi()
            .then(jsondata => this.setState({ ip: jsondata.ip, nips: jsondata.nips }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/ip');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className="Home-container">
                    <div className="Home-text">Hi, welcome to my website!</div>
                    <div className="Home-text">Learn more about me,</div>
                    <div className="Home-text"t>learn how this webpage was created,</div>
                    <div className="Home-text">or just look at some pictures!</div>
                </div>    
                <div className="IP-text">your ip is: {this.state.ip}, {this.state.nips} unique IPs has visited this webpage.</div>
            </div>
        );
    }
}
export default Home;
