import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { auth,googleProvider } from '../config/firebase';
import {sendSignInLinkToEmail,signInWithPopup} from 'firebase/auth'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Login() {


    const [email,setEmail] = useState("")

    const navigate = useNavigate()

    const actionCodeSettings = {
        url: 'https://weather-app-31476.web.app/weatherSearch',
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
        <div>
                <div>
                    <ToastContainer autoClose={2000} position="bottom-right"/>
                </div>
                <Grid container spacing={2} wrap='nowrap'>
                    <Grid xs="auto" >
                        <div style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>
                        <h4 style={{ marginLeft: "84px" }}>Login</h4>
                        <br />
                        <TextField type="email" size='small' label="Email" name='email' onChange={(e)=> setEmail(e.target.value)}/>
                        <br />
                        <Button variant='contained' type="submit" size='small' style={{ width: "223px",marginTop:"20px" }} onClick={login}>Login</Button>
                        <p style={{marginLeft:"95px"}}>OR</p>
                        <Button type="submit" variant="contained" size="small" style={{ width: "223px",backgroundColor:"white",color:"black" }} onClick={signInWithGoogle}> Sign up with Google</Button>
                        </div>
                    </Grid>
                    </Grid>
        </div>
    )
}

export default Login
