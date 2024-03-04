import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalDataProvider} from './Context/Search'
import App from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalDataProvider>
      <App />
    </GlobalDataProvider>
  </React.StrictMode>,
)
