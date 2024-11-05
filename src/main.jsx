import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage/App.jsx'
// import Footer  from './components/Footer/App.jsx'

// Essa parte compila tudo!!!!!
// Basta saber linkar corretamente cada parte!!!!!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Footer /> */}
    <HomePage />
  </StrictMode>
)
