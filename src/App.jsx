import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/Newproject';
import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (

    <Router>
      <Container>
        <Navbar />
        <Routes customClass='min-height'>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <p>footer</p>
      </Container>
    </Router>
  );
}

export default App;
