import React, {Component} from 'react'
import NavBar from "../navbar/NavBar";
import './Documentation.css';

class Documentation extends Component {
    render() {
        return(
            <div className="App">
                <NavBar/>
                <div className="MainText">This homepage was created using React, Express and the Cloudinary API. More info soon..</div>
            </div>
        );
    }
}

export default Documentation;
