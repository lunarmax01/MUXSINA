import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BEY from './BEY.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BEY />
  </StrictMode>,
)
