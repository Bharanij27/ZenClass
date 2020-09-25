import React from 'react';

function child (props){
        return(
            <div>
                <button onClick = {props.IncreaseCount}>+</button>
                <button onClick = {props.decreaseCount}>-</button>
                <p>{props.count}</p>
                <button onClick = {props.reset}>Reset</button>
            </div>
        )
    }

export default child;