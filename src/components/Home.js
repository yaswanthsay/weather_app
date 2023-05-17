import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {


    const getAccess = () => {
        axios.post("https://{yourDomain}/passwordless/start", {
            "Content-Type": "application/json",
            "method": "post",
            "client_id": "{yourClientID}",
            "client_secret": "{yourClientSecret}", // For Regular Web Applications
            "connection": "email|sms",
            "email": "{email}", //set for connection=email
            "phone_number": "{phoneNumber}", //set for connection=sms
            "send": "link|code", //if left null defaults to link
            "authParams": { // any authentication parameters that you would like to add
                "scope": "openid",     // used when asking for a magic link
                "state": "{yourState}"  // used when asking for a magic link, or from the custom login page
            }
    })
}
 

return (
    <>
        <Grid container spacing={2} wrap='nowrap'>
            <Grid xs="auto" >
                <h4 style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>You can retrieve weather information for a specific location.
                    <Link to={isAuthenticated ? "/weatherReport" : "/register"} style={{ textDecoration: "none" }}><span style={{ color: "violet", cursor: "pointer" }}> Click here</span></Link>
                </h4>
            </Grid>
        </Grid>
    </>
)
}

export default Home
