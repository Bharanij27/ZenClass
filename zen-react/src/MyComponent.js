import React from 'react';

class MyComponent extends React.Component{
    
    constructor(){
        super()
        this.state = {count : 0}
    }

    changeCount = () => {
        let newCount = this.state.count;
        this.setState({count : ++newCount});
    }

    render() {
        return (      
            <div>                
              <p>{this.state.count}</p>
              <button onClick = {this.changeCount}>Click Me</button>      
            </div>    
        );  
    }
}

export default MyComponent;