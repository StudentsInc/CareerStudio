
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthenticationViews from './pages/AuthenticationViews';
import Forgot from './pages/Forgot';
import LeftSide from './pages/LeftSide';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <LeftSide /> {/* Render the LeftSide component */}
        <div className="flex-1 md:mr-72"> {/* Adjust the spacing with margin left */}
          <Switch>
            <Route exact path="/" component={AuthenticationViews} />
          <Route path="/forgot" component={Forgot} />
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
);