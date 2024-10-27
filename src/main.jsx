import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar'
import Cards from './components/cards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Cards />
  </StrictMode>,
)
