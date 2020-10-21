import React, {Component} from 'react'
import NavBar from "../navbar/NavBar"
import "./Pictures.css"
import Footer from "../footer/Footer";

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

    callApi = async () => {
        const response = await fetch('/api/picturedata');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    getSecureUrls(jsondata) {
        var tempArray = [];
        for (var i = 0; i < jsondata.length; i++)
            tempArray[i] = jsondata[i].secure_url;
        return tempArray;
    }

    render() {
        return(
            <div className="App">
                <NavBar />
                <div className="gallery-container">
                    <div className="flex-gallery-container">
                        {this.state.pictures.map((picture, i) =>
                            <div className="picture-container">
                                <div className="flex-picture-container">
                                    <img src={picture} key={i}/>
                                </div>
                            </div>)}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Pictures;