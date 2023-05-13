import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { auth,googleProvider } from '../config/firebase';
import {sendSignInLinkToEmail,signInWithPopup} from 'firebase/auth'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Login() {


    const [email,setEmail] = useState("")

    const navigate = useNavigate()

    const actionCodeSettings = {
        url: 'https://weather-app-31476.web.app/weather',
        handleCodeInApp: true,
      };

  const login = async () => {
    try{
       const data = await sendSignInLinkToEmail(auth,email,actionCodeSettings)
       navigate("/emailLink")
       console.log(data)
    }catch(err){
       console.error(err.message)
       toast.error(err.message)
    }
  }

  const signInWithGoogle = async() =>{
    try{
        await signInWithPopup(auth,googleProvider)
        navigate("/weatherSearch")
    }catch(err){
        console.error(err.message)
    }
  }

    return (
        <>
            <div style={{ marginTop: "70px", marginLeft: "500px" }}>
                <div>
                    <ToastContainer autoClose={2000} position="bottom-right"/>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <h4 style={{ marginLeft: "84px" }}>Login</h4>
                        <br />
                        <TextField type="email" size='small' label="Email" name='email' onChange={(e)=> setEmail(e.target.value)}/>
                        <br />
                        <Button variant='contained' type="submit" size='small' style={{ marginTop: "20px", width: "223px" }} onClick={login}>Login</Button>
                        <p style={{marginLeft:"100px"}}>OR</p>
                        <Button type="submit" variant="contained" size="small" style={{ marginTop: "20px", width: "223px",backgroundColor:"white",color:"black" }} onClick={signInWithGoogle}> Sign up with Google</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Login
