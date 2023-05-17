import React from 'react'
import Home from './components/Home'
// import WeatherSearch from './components/WeatherSearch'
import { Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import Register from './components/Register';
import WeatherReport from './components/WeatherReport';


function App() {
  return (
    <>
      <Grid container spacing={2} wrap="nowrap">
        <Grid xs="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/weatherSearch" element={<WeatherSearch />} /> */}
            <Route path='/register' element={<Register/>}/>
            <Route path="/weatherReport" element={<WeatherReport/>}/>
          </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export default App

