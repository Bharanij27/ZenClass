import React from 'react';

function child (props){
        return(
            <div>
                <button onClick = {props.increaseCount}>+</button>
                <button onClick = {props.decreaseCount} disabled = {!props.count}>-</button>
                <p>{props.count}</p>
                <button onClick = {props.reset} disabled = {!props.count}>Reset</button>
            </div>
        )
    }

export default child;