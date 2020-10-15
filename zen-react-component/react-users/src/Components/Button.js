import React from 'react';

const Button = (props) => {
    let hasHandler = (e) =>{
        if(props.onClickHandler){
            props.onClickHandler(e);
        }
    }
    return(
        <div className={props.divClass}>
			<button 
                type={props.type} className={props.btnClass} 
                onClick = {(e) => hasHandler(e)}
            >
                {props.value}
            </button>
		</div>
    )
}

export default Button;