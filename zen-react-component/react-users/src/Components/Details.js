import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Info from './Info';

const Details = () => {
    let [userInfo, setUserInfo] = useState({});
    let history = useHistory();
    
    let token = JSON.parse(localStorage.getItem('userDetails-jwt'));
    if(!token) history.push('/');

    useEffect(() => {
        async function fetchData(){
            try {
                    let apiCall = await fetch('https://hall-booking-api.herokuapp.com/users/userDetails',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({token : token})
                    });
                    let result = await apiCall.json();
                    if(result.status === 404){
                        alert('User Detail not found');
                        history.push('/');
                    }
                    setUserInfo(result.userDetail);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="container">
            <Button 
                type = "text"
                divClass = "d-flex justify-content-end m-5"
                btnClass = "btn btn-primary"
                value = 'LogOut'
                onClickHandler = {() => history.push('/')}
            />
            <div className="justify-content-center m-5">
                <Info title = "Name" value= {userInfo.name}/>
                <Info title = "Emai-Id" value= {userInfo.email}/>
                <Info title = "Phone Number" value= {userInfo.phoneNum}/>
                <Button 
                type = "text"
                divClass = "d-flex justify-content-start m-5"
                btnClass = "btn btn-primary"
                value = 'Reset Password'
                onClickHandler = {() => history.push('/newPass')}
            />
            </div>
        </div>
    )
}

export default Details;