import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";


function App() {
  return(
  <div>
      <Route exact path="/" component={LandingPage}/>
  </div>
    )
}

export default App;
