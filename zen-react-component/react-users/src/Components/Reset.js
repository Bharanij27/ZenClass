import React from 'react';
import Button from './Button';
import Input from './Input';

const Reset = (props) => {
    const resetPassword = () => {

    }

    const changeHandler = (id, value) => {
        props.setUserDetails({
            ...props.userDetails, 
            [id] : value
        })
    }

    return(
        <form onSubmit={(e) => resetPassword(e)}>
            <Input
                type="email" iconClass = 'fa fa-envelope' 
                id="email" placeholder = "Enter E-mail Id" 
                value = {props.userDetails.email}
                onChangeHandler = {changeHandler}    
            />
            <Button
                type = 'submit'
                divClass = "d-flex justify-content-center m-3"
                btnClass = "btn btn-primary"
                onClickHandler = {props.forgetPassword}
                value = 'Sent Password'
            />
            <div className="d-flex justify-content-center links">
            Remember Now? <a href='#' className="ml-1" onClick={props.resetForm}> Login </a>
			</div>
        </form>
    )
}

export default Reset;