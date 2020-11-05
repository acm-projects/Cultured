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
import frontPage from "./pages/Frontpage"
import countryPage from "./pages/Countrypage"
import countryTrash from "./pages/countryTrash"

import './addedClasses.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        
        /*
        // assuming data is like [{path:'/', name:'Home'}, {path: '/page1', name: 'Page 1'}, ...] 

        <Route component={App}>
          {data.map((obj, i) => { <Route name={obj.name} path={obj.path} component={Page}/> }
        </Route>
        */

  return (
      <div className="App">
      
            
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
            {/* <Route path="/yeet" exact component={countryTrash} />
            <Route path="/Atlantis" exact component={countryPage} />
            <Route path="/Wakanda" exact component={countryTrash} />
            <Route path="/Narnia" exact component={countryPage} />
            <Route path="/Alagaesia" exact component={countryTrash} /> */}
            <Route path="/UnitedStates" exact component={countryPage} />
            <Route path="/Canada" exact component={countryPage} />
            <Route path="/Mexico" exact component={countryPage} />
            <Route path="/Nigeria" exact component={countryPage} />
            <Route path="/Uganda" exact component={countryPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
    </div>
      
    </div>
  );
}
}

export default App;