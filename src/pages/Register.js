import { useState } from 'react';
import Form from '../components/Form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Register = () =>{
    const navigate = useNavigate();
    const [error, setError] = useState();
    const address = 'http://localhost:4000/api/register'; 

    function userDetails(username,password){
        const data = {
            'username':username,
            'password':password,
            'email':username,
        };


        axios.post(address, data).then(res =>{
            if(res.data === "error"){
                setError('Username has already been taken');
            }else{
                localStorage.setItem('username',username)
                navigate('/profile', { replace: true })
            }
            
        })
        
    }

    function reset(){
        setError(null)
    }

    return(
        <div className='grid grid-main justify-center w-full h-full items-center'>
            <div className='col-span-8 flex flex-col justify-center'>
                <div className='my-5 text-center text-5xl'>Welcome!</div>
                <div className='w-full my-10 h-[1px] bg-[gray]'></div>
                <Form
                    userDetails={userDetails}
                    reset={reset}
                    error={error}
                    name='Register'/>
            </div>
        </div>
        
    )
}


export default Register;