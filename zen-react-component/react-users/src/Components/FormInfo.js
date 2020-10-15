import React, { Fragment } from 'react';

const FormInfo = (props) =>{
    return(
        <Fragment>
            <div className="d-flex justify-content-center links">
				{props.isLogin ? "Don't have an account?" : 'Have an account?' }  
                <a href="#" className="ml-2" onClick={() => props.setIsLogin(!props.isLogin)}>
                    {props.isLogin ? 'Sign-up' : 'Login'}
                </a>
			</div>
			{
                props.isLogin && 
                <div className="d-flex justify-content-center links">
				    <a href='#' onClick={() => props.setReset(true)}>Forgot your password?</a>
			    </div>
                }
        </Fragment>
    )
}

export default FormInfo;