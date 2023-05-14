import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'

function EmailLink() {
    return (
        <Grid container spacing={2} wrap="nowrap">
            <Grid xs="auto">
                <div style={{boxShadow:"1px 0px 2px 1px grey",width:"350px",height:"150px",padding:"40px",position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <p>Please click the link send to your email</p>
                    <div style={{ display: "flex" }}>
                        <h3>Don't see an email?</h3><p style={{marginLeft:"5px",marginTop:"21px"}}>Check your spam folder.</p>
                    </div>
                </div>
        </Grid>
        </Grid>
    )
}

export default EmailLink
