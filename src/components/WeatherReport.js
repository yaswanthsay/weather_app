import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material'
import search from '../images/search.png'
import axios from 'axios'
import sun from '../images/sun.png'
import rain from '../images/rain.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

function WeatherSearch() {

     
    const [location, setLocation] = useState("")
    const [temp, setTemp] = useState("")
    const [humidity, sethumidity] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [condition, setCondition] = useState([])
    const [weatherData, setWeatherData] = useState("")



    const weatherReport = async () => {

        const weatherReportRef = collection(db, "weather");

        try {
            await addDoc(weatherReportRef, {
                location:location,
                temperature:  temp ,
                humidity:  humidity ,
                windSpeed: windSpeed ,
                weatherCondition: weatherData 
            })
        } catch (err) {
            toast.error(err.message)
        }

    }

    const weatherSearch = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96dba0b37d42afbbf502e620f330a94e`)
            .then((res) => {
                console.log(res.data)
                setTemp(res.data.main.temp)
                sethumidity(res.data.main.humidity)
                setWindSpeed(res.data.wind.speed)
                setCondition(res.data.weather)

                    weatherReport()

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
                    <img src={sun} alt="sun" style={{ width: "50px", position: "relative", top: "30px", zIndex: "-1" }} />
                    <div style={{ display: "flex", borderRadius: "5px", boxShadow: "1px 0px 2px 2px #E6E6E6", width: "270px", backgroundColor: "white", position: "relative", zIndex: "2" }}>
                        <img src={search} alt='search' onClick={weatherSearch} style={{ width: "20px", height: "20px", cursor: "pointer", marginLeft: "10px", marginTop: "11px" }} />
                        <TextField
                            type="text"
                            style={{ border: "1px solid white", backgroundColor: "white", marginLeft: "46px" }}
                            label="Add location here" name='location'
                            size="small"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <img src={rain} alt="rain" style={{ width: "50px", marginLeft: "240px", position: "relative", marginTop: "-30px" }} />
                </Grid>
            </Grid>
            <Grid container item={2} wrap='nowrap'>
                <Grid xs="auto">
                    <div style={{ boxShadow: "1px 2px 0px 1px grey", border: "1px solid #F0F0F0", width: "300px", padding: "20px", borderRadius: "10px", zIndex: "2", marginTop: "30px", marginLeft: "-32px", position: "relative", backgroundColor: "white" }}>
                        <p style={{ color: temp ? "blue" : "black" }}>Temperature : {temp ? (Math.round(temp - 273.15)) : "0"} °C</p>
                        <p style={{ color: humidity ? "blue" : "black" }}>Humidity : {humidity ? humidity : "0"} %</p>
                        <p style={{ color: windSpeed ? "blue" : "black" }}>Wind Speed : {windSpeed ? windSpeed : "0"} km/h</p>
                        <p style={{ color: temp ? "blue" : "black" }}>Weather condition : {temp ? weatherData : ""}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WeatherSearch
