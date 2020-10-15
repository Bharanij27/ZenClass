import React, { Fragment } from 'react';
import Button from './Button';
import Input from './Input';

const Form = (props) => {
    const processData = (event) => {
        event.preventDefault();
        props.submitFunction();
    }

    const changeHandler = (id, value) => {
        props.setUserDetails({
            ...props.userDetails, 
            [id] : value
        })
    }
    
    return(
        <form onSubmit={(e) => processData(e)}>
		    <Input 
                type="email" iconClass = 'fa fa-envelope' 
                id="email" placeholder = "Enter E-mail Id" 
                value = {props.userDetails.email}
                onChangeHandler = {changeHandler}    
            />
            <Input 
                type="password" iconClass = 'fa fa-lock'
                id="password" placeholder = "Enter Password"
                value = {props.userDetails.password}
                onChangeHandler = {changeHandler}    
            />
            {
                !props.isLogin && 
                <Fragment>
                    <Input 
                        type="text" iconClass = 'fa fa-user'
                        id="name" placeholder = "Enter Name"
                        value = {props.userDetails.name}
                        onChangeHandler = {changeHandler}    
                    />
                    <Input 
                        type="text" iconClass = 'fa fa-phone'
                        id="phoneNum" placeholder = "Enter Phone Number"
                        value = {props.userDetails.phoneNum}
                        onChangeHandler = {changeHandler}    
                    />
                </Fragment>                
            }
			<Button
                type = 'submit'
                divClass = "d-flex justify-content-center m-3"
                btnClass = "btn btn-primary"
                value = {props.isLogin ? 'Login' : 'SignUp'}
            />
		</form>
    )
}

export default Form;