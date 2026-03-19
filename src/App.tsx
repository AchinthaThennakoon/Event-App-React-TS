import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Loginpage } from './pages/Loginpage'
import { RegisterPage } from './pages/RegisterPage'

function App() {

  return (
      <div>
        <Router>
            <Routes>
              <Route path="/login" element={<Loginpage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
      </div>
  )
}

export default App
