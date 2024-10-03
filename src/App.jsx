import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
