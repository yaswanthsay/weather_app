import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material'
import search from '../images/search.png'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import sun from '../images/sun.png'
import rain from '../images/rain.png'
import 'react-toastify/dist/ReactToastify.css';

function WeatherSearch() {


    const [location, setLocation] = useState("")
    const [weatherDetails, setWeatherDetails] = useState([])
    const [condition, setCondition] = useState([])
    const [weatherData, setWeatherData] = useState([])

    const weatherSearch = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96dba0b37d42afbbf502e620f330a94e`)
            .then((res) => {
                console.log(res.data)
                setWeatherDetails(res.data)
                setCondition(res.data.weather)
            })
            .catch((err) => {
                toast.error("Invalid location or Network error")
                console.error(err)
            })
    }

    {
        condition.map((weatherCondition) => {
            setTimeout(() => {
                setWeatherData(weatherCondition.description)
            }, 0.5)
        })
    }


    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div>
                <ToastContainer autoClose="2000" position='bottom-right' />
            </div>
            <Grid container spacing={2} wrap="nowrap">
                <Grid xs="auto">
                    <p style={{ color: "#3F76DC", fontSize: "18px" }}>Are you looking for weather report?</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} wrap='nowrap'>
                <Grid xs="auto">
                <img src={sun} alt="sun" style={{width:"50px",position:"relative",top:"30px",zIndex:"-1"}}/>
                    <div style={{ display: "flex", borderRadius: "5px", boxShadow: "1px 0px 2px 2px #E6E6E6", width: "270px", backgroundColor: "white",position:"relative",zIndex:"2" }}>
                        <img src={search} alt='search' onClick={weatherSearch} style={{ width: "20px", height: "20px", cursor: "pointer",marginLeft:"10px",marginTop:"11px" }} />
                        <TextField
                            type="text"
                            style={{ border: "1px solid white", backgroundColor: "white",marginLeft:"46px" }}
                            label="Add location here" name='location'
                            size="small"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <img src={rain} alt="rain" style={{width:"50px",marginLeft:"240px",position:"relative",marginTop:"-30px"}}/>
                </Grid>
            </Grid>
            <Grid container item={2} wrap='nowrap'>
                <Grid xs="auto">
                    <div style={{boxShadow: "1px 2px 0px 1px grey", border: "1px solid #F0F0F0", width: "300px", padding: "20px", borderRadius: "10px" ,zIndex:"2",marginTop:"30px",marginLeft:"-32px",position:"relative",backgroundColor:"white"}}>
                        <p style={{ color: weatherDetails?.main?.temp ? "blue" : "black"}}>Temperature : {Math.round(weatherDetails?.main?.temp ? weatherDetails?.main?.temp - 273.15 : "")}°C</p>
                        <p style={{ color: weatherDetails?.main?.humidity ? "blue" : "black"}}>Humidity : {Math.round(weatherDetails?.main?.humidity ? weatherDetails?.main?.humidity : "")}%</p>
                        <p style={{ color: weatherDetails?.wind?.speed ? "blue" : "black"}}>Wind Speed : {Math.round(weatherDetails?.wind?.speed ? weatherDetails?.wind?.speed : "")} km/h</p>
                        <p style={{ color: weatherDetails?.main?.temp  ? "blue" : "black"}}>Weather condition : {weatherData}</p>
                    </div>
                    </Grid>
            </Grid>
        </div>
    )
}

export default WeatherSearch
