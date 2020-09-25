import React, { Component } from 'react';

class Offer extends Component {
    render() {  
        return ( 
            <li className = {this.props.class[1]}><span className="fa-li"><i className= {this.props.class[0]}></i></span>{this.props.value}</li>
         );
    }
}
 
export default Offer;