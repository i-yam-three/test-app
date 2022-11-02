import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home/Home.Page'

function Main() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}

export default Main