import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Telaprincipal from './Componentes/Telaprincipal.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <Telaprincipal />
  </StrictMode>,
)
