import { Button, TextField} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import  { Auth0LockPasswordless } from 'auth0-lock'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'


function Signup() {


  const [username,setUsername] = useState("")


       var passwordlessOptions = {
        
        avatar: null,
        allowedConnections: ['email'],
        passwordlessMethod: 'code',
        auth: {
          redirectUrl: 'https://weather-app-31476.web.app/weatherReport',   
          responseType: 'token id_token',  
          params: {
            scope: 'openid email'               
          }          
        },
        theme: {
            logo: '',
            primaryColor: '#31324F'
          },
          languageDictionary: {
            emailInputPlaceholder: "something@youremail.com",
            title: "Register"
          },
          avatar: null,
      }
      
       var lockPasswordless = new Auth0LockPasswordless(
       'MfGID8U68Q30gl8deGyDjmrzmAuR8pLl',
       'dev-0ps3qa5ma21ow8ve.us.auth0.com',
       passwordlessOptions
      );


      const addUsername = async() =>{
        try{
          const weatherReportRef = collection(db,"weather")
          await addDoc(weatherReportRef,{
           name:username
          })
        }catch(err){
          console.log(err)
        }
      }



    const onSubmit = () => {
      addUsername()
        lockPasswordless.show()
    }

    return (
        <div>
            <Grid container spacing={2} wrap="nowrap">
                <Grid item xs="auto">
                    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",boxShadow:"3px 2px 2px 1px #F4F4F4",padding:"20px",border:"1px solid #F4F4F4" }}>
                        <TextField type="text" size='small' name="username" onChange={(e)=> setUsername(e.target.value)} label="Username"/>
                        <br/>
                        <Button type="submit" onClick={onSubmit} size="small" variant="contained" style={{ marginTop: "20px",width:"224px"}} >Create an Account</Button>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Signup
