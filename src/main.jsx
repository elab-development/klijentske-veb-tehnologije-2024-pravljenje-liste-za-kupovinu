import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { KorpaProvider } from './utils/data';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <KorpaProvider>
      <App />
    </KorpaProvider>
  </React.StrictMode>,
)
