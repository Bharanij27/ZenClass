import React, { Component } from 'react';
import Sound from './sound'
import Timer from './timer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { time : 5 }
    }

    componentDidMount(){
        let timer = setInterval(() => {
            this.setState(prevState => ({time : prevState.time - 1}));
            if(this.state.time === 0) clearInterval(timer);
        }, 1000);
    }

    render() { 
        return (
            <div className = "App-header">
                {this.state.time !== 0 ? <Timer time = {this.state.time}/> : <Sound/>}
            </div>
        );
    }
}
 
export default Main;