import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonAppBar() {

    const navigate = useNavigate()


  return (
    <>
    <ToastContainer autoClose={2000} position="bottom-right"/>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"white"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"black",fontSize:"17px",marginLeft:"50px" }}>
            Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}