import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Axios from './pages/Axios'
import FetchApi from './pages/FetchApi'
import Query from "./pages/Query"
import NotFound from './pages/NotFound'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-5 flex flex-wrap-reverse gap-5 justify-center'>
      <Link to={"/"} >Fetch API</Link>
      <Link to={"/axios"} >Axios</Link>
      <Link to={"/query"} >Query</Link>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<FetchApi />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/query' element={<Query />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
