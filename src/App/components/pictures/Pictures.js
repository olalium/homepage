import React, {Component} from 'react'
import NavBar from "../navbar/NavBar"
import "./Pictures.css"

class Pictures extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        this.callApi()
            .then(jsondata => this.setState({ pictures: this.getSecureUrls(jsondata) }))
            .catch(err => console.log(err));
    }

    getSecureUrls(jsondata) {
        var tempArray = [];
        for (var i = 0; i < jsondata.length; i++)
            tempArray[i] = jsondata[i].secure_url;
        return tempArray;
    }

    callApi = async () => {
        const response = await fetch('/api/picturedata');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return(
            <div className="App">
                <NavBar/>
                <div class="flex-gallery-container">
                    <img src={this.state.pictures[0]}></img>
                </div>
            </div>
        );
    }
}

export default Pictures;