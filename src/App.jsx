import { Routes, Route } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Home from './views/Home'
import InputName from './views/InputName'
import InputLogo from './views/InputLogo'

function App() {
  return (
      <div className="min-h-screen grid place-items-center p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input-name" element={<InputName />} />
          <Route path="/input-logo" element={<InputLogo />} />
        </Routes>
        <ToastContainer position="top-right" />

      </div>
  )
}

export default App
