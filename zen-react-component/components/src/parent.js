import React from 'react';
import Child from './child.js'

class parent extends React.Component{
    
    constructor(){
        super()
        this.state = {count : 0}
    }

    increaseCount = () => {
        let count = this.state.count
        this.setState({count : ++count});
    }

    decreaseCount = () => {
        if(this.state.count > 0){
            let count = this.state.count
            this.setState({count : --count});
        }
    }

    reset = () => {
        if(this.state.count !== 0){
            this.setState({count : 0});
        }
    } 

    render() {
        let count = this.state.count
        return (      
            <Child count = {count} 
            increaseCount = {this.increaseCount}
            decreaseCount = {this.decreaseCount}
            reset = {this.reset}/>    
        );  
    }
}

export default parent;