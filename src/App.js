import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import Delivery from './component/Delivery';

const App = () => {
  return (
    <Router>
      <nav>
        {/* <Switch>  */}
        <Link to="/">Home</Link>
        <Link to="/delivery/step1">Delivery</Link>
        {/* </Switch> */}
      </nav>
      <Route exact path = "/">
        <h2 className='homeTitle'>Home</h2>
      </Route>
      <Route exact path="/delivery/:step" component={Delivery}/>
    </Router>
  );
}

export default App;