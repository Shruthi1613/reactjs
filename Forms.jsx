import React from 'react';
import Nav12 from './Nav12';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home';
 import Login from './Login';
 import Signup1 from './Signup1';
import About from './About';
import PagenotFound from './PagenotFound';

const App = () => {
  return (
    <Router>
      <Nav12/>
        <Routes>
              {<Route path='/' element={<Home/>}/>}
              {<Route path="/login" element={<Login />}/> }
              {<Route  path="/Signup1" element={<Signup1   />}/>}
              { <Route path="/aboutus" element={<About />} />}
              {<Route path='*' element={<PagenotFound />}/>}

        </Routes>
    </Router>
  )
}

export default App
