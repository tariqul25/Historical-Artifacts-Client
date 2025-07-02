import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
=======
import App from './App.jsx'
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
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