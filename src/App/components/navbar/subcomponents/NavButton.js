import {Link} from "react-router-dom";
import React, {Component} from "react";
import "./NavButton.css"


class NavButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="NavButton">
                <Link to= {this.props.link}>
                    <button className="NavButton">
                        {this.props.name}
                    </button>
                </Link>
            </div>
        );
    }
}

export default NavButton;