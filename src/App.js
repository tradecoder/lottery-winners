import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './components/signup.component';
import Login from './components/login.component';
import Logout from './components/logout.component';

function App() {
  return (
    <Router>
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/logout/" component={Logout}/>
    </Router>
  );
}

export default App;
