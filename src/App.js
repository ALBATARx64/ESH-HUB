import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Contact from './pages/Contact';
import Docs from './pages/Docs';
import Navbar from './components/Navbar'
import TopModal from './components/TopModal';

function App() {
  return (
    <Router>
      {/* <TopModal /> */}
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Docs />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
