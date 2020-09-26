import React, { Component } from 'react';

class List extends Component {

    render() {
        return ( 
            <li className = {this.props.class} onClick = {this.props.changeStyle.bind(this)}>
                {this.props.data}
            </li>
         );
    }
}
 
export default List;