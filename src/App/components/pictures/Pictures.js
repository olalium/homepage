import React, {Component} from 'react'
import NavBar from "../navbar/NavBar";

class Pictures extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/picturedata');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        return body;
    };

    render() {
        return(
            <div className="App">
                <NavBar/>
                <div>Pictures</div>
            </div>
        );
    }
}

export default Pictures;