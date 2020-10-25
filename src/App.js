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
import countryPage from "./pages/countryPage"
import countryTrash from "./pages/countryTrash"

import './addedClasses.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI = async () => {
        const response = await fetch('http://localhost:5000/newsAPI');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
};
    componentDidMount() {
        this.callAPI()
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => console.log(err));
    }
render(){
  return (
      <div className="App">
      
      
          <h1>Country Page</h1>
          <p>{this.state.apiResponse}</p>
      
            
    <div className="bg-color align-center full-height">
      {/*renders navbar*/}

    
    <div className="">
      
    {/*routing information*/}
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={frontPage} />
            <Route path="/Country" exact component={countryPage} />
            <Route path="/yeet" exact component={countryTrash} />
            <Route path="/Atlantis" exact component={countryPage} />
            <Route path="/Wakanda" exact component={countryTrash} />
            <Route path="/Narnia" exact component={countryPage} />
            <Route path="/Alagaesia" exact component={countryTrash} />
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