import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import WeatherSearch from './components/WeatherSearch'
import { Routes, Route } from 'react-router-dom'
import EmailLink from './components/EmailLink'
import Grid from '@mui/material/Unstable_Grid2';


function App() {
  return (
    <>
      <Grid container spacing={2} wrap="nowrap">
        <Grid xs="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/weatherSearch" element={<WeatherSearch />} />
            <Route path="/emailLink" element={<EmailLink />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export default App

