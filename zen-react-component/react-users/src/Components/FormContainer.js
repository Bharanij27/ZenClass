import React, { Fragment } from 'react';
import Form from './Form';
import FormInfo from './FormInfo';

const FormContainer = (props) => {
    return(
        <Fragment>
			<Form 
				isLogin = {props.isLogin} 
				submitFunction = {props.submitFunction}
				userDetails = {props.userDetails}
                setUserDetails = {props.setUserDetails}
				/>
			<FormInfo isLogin = {props.isLogin} setIsLogin = {props.setIsLogin} setReset = {props.setReset} />
        </Fragment>
    )
}

export default FormContainer;