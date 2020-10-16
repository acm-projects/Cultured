//https://github.com/acmutd/web-dev-workshop
import React from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//import components
import Navbar from "./components/Navbar"
import frontPage from "./pages/frontPage"
import countryPage from "./pages/countryPage"
import countryTrash from "./pages/countryTrash"

import './addedClasses.css';


function App() {
    
  return (
      

      
    <div className="bg-color align-center full-height">
      {/*renders navbar*/}
      ReactDOM.render(<Navbar/>, document.getElementById('root'));
    
    <div className="">
      
    {/*routing information*/}
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={frontPage} />
            <Route path="/Country" exact component={countryPage} />
            <Route path="/yeet" exact component={countryTrash} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
    </div>
  );
}

export default App;