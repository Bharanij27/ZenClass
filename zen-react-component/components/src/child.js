import React from 'react';

function child (props){
        return(
            <div>
                <p>{props.count}</p>
                <button onClick = {props.updateCount}>Increase</button>
                <button onClick = {props.reset}>Reset</button>
            </div>
        )
    }

export default child;