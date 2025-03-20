import React from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import {Home} from './pages/Home'
import {Tracker} from './pages/Tracker'
import {Percent} from './pages/Percent'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Layout } from './layout/Layout'

function App() {
 
const router=createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='tracker' element={<Tracker/>}/>
        <Route path='percent' element={<Percent/>}/>
    </Route>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
