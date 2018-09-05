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
        fetch('/api/picturedata')
            .then(results => {
                console.log("data", results.json());
            });
    }

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