import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import ForRiders from './pages/ForRiders'
import ForDrivers from './pages/ForDrivers'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ForRiders />} />
          <Route path="/drivers" element={<ForDrivers />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

