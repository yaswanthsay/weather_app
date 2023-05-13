import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs>
                    <div style={{marginTop:"200px",marginLeft:"350px"}}>
                    <h4>You can retrieve weather information for a specific location.
                        <Link to="/login" style={{textDecoration:"none"}}><span style={{ color: "violet", cursor: "pointer" }}> Click here</span></Link>
                        </h4>
                        </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
