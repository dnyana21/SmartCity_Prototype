import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'
import Complaints from './pages/Complaints'
import MapView from './pages/MapView'
import Officers from './pages/Officers'
import Leaderboard from './pages/Leaderboard'

function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AdminLayout>
  )
}

export default App
