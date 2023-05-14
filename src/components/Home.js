import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Grid container spacing={2} wrap='nowrap'>
                <Grid xs="auto" >
                        <h4 style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>You can retrieve weather information for a specific location.
                            <Link to="/login" style={{ textDecoration: "none" }}><span style={{ color: "violet", cursor: "pointer" }}> Click here</span></Link>
                        </h4>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
