import React, { Component } from 'react';

function Timer(props){
    return (
        <div>
           <h3>Timer </h3> 
           <h2>{props.time}</h2>
        </div>
    );
}
 
export default Timer;