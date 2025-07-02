import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import HistoryProvider from './contexts/HistoryProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistoryProvider>
      <RouterProvider router={router}></RouterProvider>
    </HistoryProvider>
  </StrictMode>,
)