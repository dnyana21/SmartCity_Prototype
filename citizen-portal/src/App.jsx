import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Complaint from './pages/Complaint'
import Track from './pages/Track'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
