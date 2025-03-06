import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import B2BContextProvider from './contexts/B2BContext.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <B2BContextProvider>
        <App />
      </B2BContextProvider>
    </BrowserRouter>
  
)
