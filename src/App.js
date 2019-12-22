import React from 'react';
import { BrowserRouter as Router , Route, Switch, NavLink } from 'react-router-dom';
import Home from './containers/pages/Home';
import Profile from './containers/pages/Profile';
import logo from './assets/images/logo.png';

function App() {
  return (
    <Router>
      <div>
        <div className='header'> 
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar'> 
          <div className="container">
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active"> Liste des offres </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' activeClassName="active"> Mon profil </NavLink>
                </li>
            </ul>
          </div>
        </div>
        <div className='main'>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
  
    {/*   <div className="container">
        <div className='main'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>*/}
    </Router> 
  );
}

export default App;
