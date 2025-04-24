import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componnent/Header' // Ensure path and export are correct
import About from './componnent/pages/About'
import Services from './componnent/pages/Services'
import Contact from './componnent/pages/Contact'
import Footer from './componnent/Footer'
import Home from './componnent/pages/Home' // Ensure path and export are correct

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;