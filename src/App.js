import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Components/Index';
import Navbar from './Components/Navbar';
import Lyrics from './Components/tracks/Lyrics';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/lyrics/:id' component={Lyrics} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
