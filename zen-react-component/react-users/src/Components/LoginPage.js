import React, { useEffect, useState } from 'react';
import FormContainer from './FormContainer';
import { useHistory } from 'react-router-dom';//
import Reset from './Reset';

const LoginPage = (props) => {
    let details = {
        email:'',
        password:'',
        name : '',
        phoneNum : ''
    }
    let history = useHistory();//
    localStorage.setItem('userDetails-jwt', JSON.stringify(null))
    const [isLogin, setIsLogin] = useState(true);
    const [reset, setReset] = useState(false);
    const [userDetails, setUserDetails] = useState(details);

    const fetchData = async(data, urlparams) => {
        let apiCall = await fetch(`https://hall-booking-api.herokuapp.com/users/${urlparams}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let result = await apiCall.json();
        return result;
    }
    const validateUser = async () => {
        try {
            let result = await fetchData(userDetails, '');
            if(result.status !== 200) alert(result.message);
            else{
                localStorage.setItem('userDetails-jwt', JSON.stringify(result.token));
                history.push('/user')
            }
        } catch (error) {
            console.log(error);   
        }
    }

    const forgetPassword = async(e) => {
        e.preventDefault();
        let result = await fetchData({email : userDetails.email}, 'sendMail');
        resetForm();
        if(result.status !== 200) {
            setIsLogin(false)
            alert(result.message);
        }
        else {
            alert('Password send to mail');
        }
    }

    const resetForm = () => {
        setIsLogin(true);
        setReset(false);
        setUserDetails(details);
    }

    const StoreUserDetails = async () => {
        let result = await fetchData(userDetails, 'newUser');
        if(result.status === 200) alert('Your Account is Created...Please Login');
        else alert('Already existing user...Please Login');
        setIsLogin(true);
    }

    useEffect(() => {
        setUserDetails(details)
    }, [isLogin]);

    return(
        <div className="container">
		    <div className="justify-content-center form-center">
			    {!reset ? <FormContainer 
                    isLogin={isLogin} 
                    setIsLogin={setIsLogin}
                    userDetails = {userDetails}
                    setUserDetails = {setUserDetails}
                    submitFunction = {isLogin ? validateUser : StoreUserDetails}
                    setReset = {setReset}
                />
                :
                <Reset
                    userDetails = {userDetails}
                    resetForm = {resetForm}
                    forgetPassword = {forgetPassword}
                    setUserDetails = {setUserDetails}
                />
            }
		    </div>
	    </div>
    )
}

export default LoginPage;