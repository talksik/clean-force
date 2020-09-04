import React from 'react';

// Styles
import './home.scss';

// Routing
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// Routed Components
import Dashboard from '../dashboard';

export default function Home() {
  return (
    <BrowserRouter>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact
      <Route path="/contact/:id">
        <Contact />
      </Route>
      <Route path="/contact">
        <AllContacts />
      </Route>{' '}
      */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <ComponentSelection />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

class ComponentSelection extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="nav">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/start">
                Get Started
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/docs">
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/pricing">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>

        <div class="pages">
          <div class="card">
            <div class="card-header">Rameelo</div>
          </div>
          <div class="card"></div>
        </div>
      </div>
    );
  }
}
