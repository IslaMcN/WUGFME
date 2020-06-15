import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import { BreakfastForm, LunchForm, DinnerForm } from './components/forms.js';


function App() {
  return(
  <div>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/Breakfast" component={BreakfastForm}/>
      <Route path="/Lunch" component={LunchForm}/>
      <Route path="/Dinner" component={DinnerForm}/>
  </div>
    )
}

export default App;
