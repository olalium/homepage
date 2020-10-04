import React, {Component} from 'react'
import { post, get } from 'axios';
import NavBar from "../navbar/NavBar"
import "./FacePredictionDemo.css"

class FacePredictionDemo extends Component {
    constructor() {
        super();
        this.state = {
            image1: '',
            image2: '',
            errortext: '',
            jobstatus: '',
            id: ''
        };
        this.onFileChange = this.onFileChange.bind(this)
        this.onFormSubmit  = this.onFormSubmit.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkJobStatus() {
        const url = 'http://127.0.0.1:5000/api/predict/status/' + this.state.id;
        get(url).then(res => {
                this.setState({
                    jobstatus: res.data.status
                })
            })
    }

    callApi() {
        const url = 'http://127.0.0.1:5000/api/predict'
        const formData = new FormData();
        formData.append('image1', this.state.image1)
        formData.append('image2', this.state.image2)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let res = post(url, formData,config)
        return res
    }


    onFileChange(e) {
        if (e.target.id === '0') {
            this.setState({
                image1: e.target.files[0],
                errortext: ''
            })
        } else if (e.target.id === '1') {
            this.setState({
                image2: e.target.files[0],
                errortext: ''
            })
        }
    }

    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        if (this.state.image1 === '' || this.state.image2 === '') {
            this.setState( {
                errortext: 'please choose files to upload'
            })
            return
        } else {
            try {
                this.callApi()
                    .then( res => {
                        this.setState({
                            id: res.data.id
                        })
                        this.timerID = setInterval(
                            () => this.checkJobStatus(),
                            1000
                        );
                    })
                
            } catch (e) {
                this.setState( {
                    errortext: 'something went wrong'
                })
            }
        }
    }

    render() {
        return(
            <div className="App">
                <NavBar/>
                <form onSubmit={this.onFormSubmit}>
                    <input type='file' onChange={this.onFileChange} id='0' />
                    <input type='file' onChange={this.onFileChange} id='1' />
                    <button type='submit'>Upload</button>
                </form>
                <div className='ErrorText'>{this.state.errortext}</div>
                <div className='JobStatus'>{this.state.jobstatus}</div>
            </div>
        );
    }
}

export default FacePredictionDemo;