import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { AppRouter } from './routes/AppRouter.jsx'

import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './context/ThemeContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
