import React, { useEffect, useState } from 'react';
import ButtonWrapper from '../HigherOrderComponents/ButtonWrapper';

const Button = (props) => {
console.log(props);
    return(
        <button className="btn btn-primary" id="btn1" onClick={props.callFunc} style={props.styles.button}>Drag Me</button>
    )
}

export default ButtonWrapper(Button);