import { Grid } from '@mui/material'
import React from 'react'

function EmailLink() {
    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <div style={{boxShadow:"1px 0px 2px 1px grey",width:"350px",height:"150px",padding:"40px",marginLeft:"420px",marginTop:"100px"}}>
                    <p>Please click the link send to your email</p>
                    <div style={{ display: "flex" }}>
                        <h3>Don't see an email?</h3><p style={{ marginTop: "21px", marginLeft: "5px" }}>Check your spam folder.</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default EmailLink
