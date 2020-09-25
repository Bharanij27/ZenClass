import React from 'react';
import Child from './child.js'

class parent extends React.Component{
    
    constructor(){
        super()
        this.state = {count : 0}
    }

    updateCount = () => {
        let count = this.state.count
        this.setState({count : ++count});
    }

    decreaseCount = () => {
        let count = this.state.count
        this.setState({count : --count});
    }

    reset = () => {
        this.setState({count : 0});
    } 

    render() {
        let count = this.state.count
        return (      
            <Child count = {count} updateCount = {this.updateCount} reset = {this.reset}/>    
        );  
    }
}

export default parent;