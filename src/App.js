import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import WeatherSearch from './components/WeatherSearch'
import {  Routes, Route } from 'react-router-dom'
import ButtonAppBar from './components/NavBar'
import EmailLink from './components/EmailLink'


function App() {
  return (
    <>
    <ButtonAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weatherSearch" element={<WeatherSearch />} />
          <Route path="/emailLink" element={<EmailLink/>}/>
        </Routes>
    </>
  )
}

export default App

