import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import { BreakfastForm, LunchForm, DinnerForm, NoGos } from './components/forms.js';
import Register from './components/auth/Register';


function App() {
  return(
  <div>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/Breakfast" component={BreakfastForm}/>
      <Route path="/Lunch" component={LunchForm}/>
      <Route path="/Dinner" component={DinnerForm}/>
      <Route path="/NoGos" component={NoGos}/>
      <Route path="/Register" component={Register}/>
  </div>
    )
}

export default App;
