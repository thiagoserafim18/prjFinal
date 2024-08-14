import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/Newproject';

function App() {
  return (

    <Router>
      <div>
        <link to="/">Home</link>
        <link to="/company">Empresa</link>
        <link to="/contact">Contato</link>
        <link to="/newproject">Novo Projeto</link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newproject' element={<NewProject />} />
      </Routes>
      <p>footer</p>
    </Router>
  );
}

export default App;
