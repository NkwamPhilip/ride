import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './presentation/layouts'
import { ForRiders, ForDrivers, AboutUs, TermsAndConditions, PrivacyPolicy, ComingSoon } from './presentation/pages'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ForRiders />} />
          <Route path="/drivers" element={<ForDrivers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

