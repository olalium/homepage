import React, {Component} from 'react'
import NavBar from "../navbar/NavBar";
import './MoneyMaker.css';
import Footer from "../footer/Footer";

class MoneyMaker extends Component {i
    constructor(props) {
        super(props);
        this.state = {
            numTicks: 0, 
            tickIncrementSecond: 0.000, 
            moneyMade: 0.000
        };
        this.handleIncomeChange = this.handleIncomeChange.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            numTicks: Math.round((this.state.numTicks + 0.1)*100) / 100,
            moneyMade: Math.round(this.state.numTicks*this.state.tickIncrementSecond*100) / 100
        });
    }
    
    handleIncomeChange(event) {
        const numericalInput = event.target.value.replace(/\D/, '');
        this.setState({tickIncrementSecond: Math.round(numericalInput / 1900 / 60 / 60*100) / 100});
    }

    render() {
        return(
            <div className="App">
                <NavBar/>
                <div className="annualIncome">
                    <div className="annualIncomeText">Annual income: </div>
                    <input className="annualIncomeInput" type="text" value={this.state.annualIncome} onChange={this.handleIncomeChange} />
                </div>
                <p>income per second: {this.state.tickIncrementSecond}</p>
                <p>seconds passed: {this.state.numTicks}</p>
                <p>money made: {this.state.moneyMade}</p>
                <Footer/>
            </div>
        );
    }
}

export default MoneyMaker;
