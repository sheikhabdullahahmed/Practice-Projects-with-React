import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CoinContextProvider from './Context/Contextfile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
  </StrictMode>,
)
