import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Back from "./componenets/Back.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <Back
        lineColor="#fff"
        backgroundColor="rgb(0, 0, 0)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={40}
        friction={0.9}
        tension={0.01}
        maxCursorMove={150}
        xGap={12}
        yGap={36}
      />
      <App />
    </div>
  </StrictMode>,
)
