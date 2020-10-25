import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import frontPage from "./Frontpage";

import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import appClass from '../App';

import { getVisited } from '../Browser';

var myVisited = require('../Browser');
var visited = myVisited.visited;

// import { visited } from '../HistoryFunction';
// import { visited } from '../App';

function NextFunction() {
    // function handleClick(e) {
    //   e.preventDefault();
    
    // //   if (currentPath == "/UnitedStates") {

    // //     return  <Route path="/UnitedStates" exact component={usPage} />
    // //     }
    // //      else if (<span> {location.pathname} </span> == ("/next")) {
    // //     return visited.pop();
    // //     }
    // }
  
    // return (
    //   // <a href="#" onClick={handleClick}>
    //   //   Click me
    //   // </a>
    //   <Route path="/" exact component={frontPage} />
    // );

    // return <Route path="/" exact component={frontPage} />
    // alert ("You clicked me");

  //   return (
      

      
  //     <div className="bg-color align-center full-height">
  //       {/*renders navbar*/}
  //       {/* ReactDOM.render(<Navbar/>, document.getElementById('root')); */}
      
  //     <div className="">
        
  //     {/*routing information*/}
  //       <Router>
  //         <main>
  //         <Route path="/" exact component={frontPage} />
  //         </main>
  //     </Router>
  //   </div>
  //   </div>
  // );
  // let history = useHistory();
  // let path = 'newPath';
  // history.push(<Route path="/" exact component={frontPage} />);

  // return window.location.href=<Route path="/" exact component={frontPage} />

  // visited.pop();
  // return window.location.href=('http://localhost:3000/UnitedStates');
  // alert(visited.length);

  // const location = useLocation();

  // let history = useHistory();

  // function handleClick() {

  //   history.push("/UnitedStates");
  // }

  // return (
  //   <Button type="button" onClick={handleClick}>
  //     Go home
  //   </Button>
  // )
    // history.push(location.pathname);
    // alert(history.location.pathname);
    // alert(history.length);
    // alert(history.location.pathname);

    // Displays an empty arraylist or initialized value
    alert(getVisited());
    // return window.location.href=('http://localhost:3000/UnitedStates');
}


export default NextFunction