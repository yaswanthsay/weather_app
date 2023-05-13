import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import search from '../images/search.png'
import axios from 'axios'
import sun from "../images/sun.png"
import rain from '../images/rain.png'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function WeatherSearch() {


    const [location,setLocation] = useState("")
    const [weatherDetails,setWeatherDetails] = useState([])
    const [condition,setCondition] = useState([])
    const [weatherData,setWeatherData] = useState([])

    const weatherSearch = () =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52bfe680dd947ee47a133753b13766d5`)
        .then((res)=>{
            console.log(res.data)
         setWeatherDetails(res.data)
         setCondition(res.data.weather)
        })
        .catch((err)=>{
            toast.error("Invalid location or Network error")
           console.error(err)
        })
    }

    {condition.map((weatherCondition)=>{
        setTimeout(()=>{
            setWeatherData(weatherCondition.description)
        },0.5)
    })}


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs>
                    <div>
                        <ToastContainer autoClose="2000" position='bottom-right'/>
                    </div>
                   <div style={{marginTop:"100px",marginLeft:"500px"}}>
                   <p style={{color:"#3F76DC",marginLeft:"13px",fontSize:"18px"}}>Are you looking for weather report?</p>
                   <img src={sun} alt="rain" style={{width:"50px",position:"relative",top:"32px",zIndex:"-1"}}/>
                    <div style={{ display: "flex",borderRadius:"5px",boxShadow:"1px 0px 2px 2px #E6E6E6",width:"300px",backgroundColor:"white"}}>
                        <img src={search} alt='search' onClick={weatherSearch} style={{ width: "20px", height: "20px",cursor:"pointer",marginTop:"10px",marginLeft:"40px"}} />
                        <TextField 
                        type="text" 
                        style={{marginLeft:"20px",border:"1px solid white",backgroundColor:"white"}} 
                        label="Add location here" name='location' 
                        size="small" 
                        onChange={(e)=>setLocation(e.target.value)}
                        />
                    </div>
                    <img src={rain} alt="sun" style={{width:"50px",marginLeft:"250px",zIndex:"-2",marginTop:"-30px"}}/>
                    </div>
                     <div style={{boxShadow:"1px 2px 0px 1px grey",border:"1px solid #F0F0F0",width:"300px",padding:"20px",marginLeft:"478px",marginTop:"20px",borderRadius:"10px"}}>
                        <p>Temperature : {Math.round(weatherDetails?.main?.temp ? weatherDetails?.main?.temp-273.15  : "")}°C</p>
                        <p>Humidity : {Math.round(weatherDetails?.main?.humidity ? weatherDetails?.main?.humidity : "")}%</p>
                        <p>Wind Speed : {Math.round(weatherDetails?.wind?.speed ? weatherDetails?.wind?.speed : "")} km/h</p>
                       <p>Weather condition : {weatherData}</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default WeatherSearch
