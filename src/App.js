import React, { useState } from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import { BreakfastForm, LunchForm, DinnerForm, NoGos } from './components/forms.js';
import Register from './components/auth/Register';
import Login from './components/auth/Login.js';
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/dashboard'
import DashboardContext from './contexts/DashboardContext.js';
import {UserTest} from './data.js';


function App() {
  const [dashboard] = useState(UserTest)
  return(
  <DashboardContext.Provider value={{dashboard}}>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/Breakfast" component={BreakfastForm}/>
      <Route path="/Lunch" component={LunchForm}/>
      <Route path="/Dinner" component={DinnerForm}/>
      <Route path="/NoGos" component={NoGos}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Login" component={Login}/>
      <PrivateRoute path="/Dashboard" component={Dashboard}/>
  </DashboardContext.Provider>
    )
}

export default App;
