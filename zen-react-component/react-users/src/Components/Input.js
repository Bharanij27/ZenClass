import React from 'react';

const Input = (props) => {
    const changeValue = (e) => {
        props.onChangeHandler(props.id, e.target.value)
    }
    return(
        <div className="input-group mb-3">
			<div className="input-group-append">
				<span className="input-group-text"><i className={props.iconClass}></i></span>
    		</div>
			<input 
                type={props.type}
                id={props.id}
                className="form-control" 
                required ={true} 
                value={props.value}
                onChange = {(e) => changeValue(e)}
                placeholder={props.placeholder}/>
		</div>
    )
}

export default Input;