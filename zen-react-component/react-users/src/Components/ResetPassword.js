import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const ResetPassword = () => {
    let history = useHistory();

    let token = JSON.parse(localStorage.getItem('userDetails-jwt'));
    if(!token) history.push('/');

    let details = {
        password : '',
        confrimPass : ''
    }
    
    let [formValue, setFormValue] = useState(details);

    const changeHandler = (id, value) => {
        setFormValue({...formValue, [id] : value})
    }

    const processData = async (e) =>{
        e.preventDefault();
        
        if(formValue.password != formValue.confrimPass) alert('Both Password Should be same');
        else if(!formValue.password.trim().length) alert('Password must not be whitespace');
        else{
            let apiCall = await fetch('https://hall-booking-api.herokuapp.com/users/updatePass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password : formValue.password,
                    token : token
                })
            })
            debugger
            let result = await apiCall.json();
            if(result.status === 200){
                alert('Password Changed Sucessfully')
                history.push('/user')
            }
            else{
                alert(result.message)
            }
        }
    }

    return(
        <div className="container">
		    <div className="justify-content-center form-center">
                <form onSubmit={(e) => processData(e)}>
                    <Input 
                        type="password" iconClass = 'fa fa-lock' 
                        id="password" placeholder = "Enter Password" 
                        value = {formValue.password}
                        onChangeHandler = {changeHandler}    
                    />
                    <Input 
                        type="password" iconClass = 'fa fa-lock'
                        id="confrimPass" placeholder = "Confrim Password"
                        value = {formValue.confrimPass}
                        onChangeHandler = {changeHandler}    
                    />
                    <Button
                        type = 'submit'
                        divClass = "d-flex justify-content-center m-3"
                        btnClass = "btn btn-primary"
                        value = 'Reset Password'
                    />
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;