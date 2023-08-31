import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component
import HomePage from './Home'; // Import your page components
import DestinationsPage from './Destinations';
import ForumPage from './Forum';
// import AboutUsPage from './AboutUsPage';
// import ContactPage from './ContactPage';
// import ProfilePage from './ProfilePage';
// import AccountPage from './AccountPage';
// import DashboardPage from './DashboardPage';
// Import other page components

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/начало">
            <HomePage />
          </Route>
          <Route path="/дестинации">
            <DestinationsPage />
          </Route>
          <Route path="/форум">
            <ForumPage />
          </Route>
          <Route path="/за-нас">
            <AboutUsPage />
          </Route>
          <Route path="/контакти">
            <ContactPage />
          </Route>
        
          {/* Add routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
