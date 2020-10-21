import React, {Component} from "react";
import "./Footer.css"


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: "unknown",
            nips: 0
        }
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
        return(
            <div className="IP-text">
                your ip is: {this.state.ip}, {this.state.nips} unique IPs has visited this webpage.
            </div>
        );
    }
}

export default Footer;