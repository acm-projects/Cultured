// import { BrowserHistory } from 'react-history'

// var BrowserHistory = require('react-history').BrowserHistory

// let tempCountries = ["America", "Canada", "Japan", "Korea", "France", "Italy"];
// var found = new Array();

// const App = React.createClass({
//     render() {
//       return (
//         <History>
//           {({ history, action, location }) => (
//             <p>The current URL is {location.pathname}{location.search}{location.hash}. You arrived at this URL via a {action} action.</p>
//           )}
//         </History>
//       )
//     }
//   })

// import { createBrowserHistory } from 'history';
// export default createBrowserHistory();

// import ReactDOM from 'react-router-dom';
// import history from './history';
// import App from './App';
// import {Router} from "react-router";

// ReactDOM.render(
//     <Provider store={store}>
//     <Router history={history}>
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/login">Login</Link></li>
//         </ul>
//         <Route path="/" exact component={frontPage} />
//         <Route path="/Country" exact component={countryPage} />
//         <Route path="/yeet" exact component={countryTrash} />
//         <Route path="/Japan" exact component={japanPage} />
//         <Route path="/Canada" exact component={canadaPage} />
//         <Route path="/UnitedStates" exact component={usPage} />
//       </div>
//     </Router>
//   </Provider>,
//    document.getElementById("root")
// );

// ReactDOM.render (
//     <Router history={history}>
//         <App />
//     </Router>
// )

// export default function nav(loc) {
//     history.push(loc);
// }

// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/Japan");
//   }

//   function handleClick() {
//       history.push("Canada");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

// import React from 'react'
// import { useHistory } from 'react-router-dom';
// import japanPage from "./pages/japanPage"

// function HistoryFunction() {

//     let history = useHistory();

//     return(
//         <div>
//             <h1>Next</h1>
//             <button
//             onClick={() => history.push("./pages/japanPage")}
//             >TEMPORARY</button>
//         </div>
//     )
// }


// export default HistoryFunction

import { useLocation } from 'react-router-dom'
import React, { Component } from 'react';
// import visited from "./App"
import { useHistory } from 'react-router-dom';
// import { createBrowserHistory } from 'history'
// import history from './Browser'
// import visited from './Browser';
import { pushFunc } from './Browser'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
import countryPage from './pages/Countrypage';

  // Global
// global.visited = [];

var myVisited = require('./Browser');
var visited = myVisited.visited;

function HeaderView(countryRoute) {

    // var pageArr = [usPage, japanPage, canadaPage];
    // var dicCountryCode = {"/UnitedStates": 0, "/Japan" : 1, "/Canada" : 2};

    // const location = useLocation();

    // var currentPath = (location.pathname);
    // let history = useHistory();
    // history.push(countryRoute)
    // history.push(location.pathname);

    alert("Ini"+ global.visited);

    // visited.push(countryRoute);

    alert("length"+global.visited.length);
    pushFunc(countryRoute);
    // alert("currentPath"+currentPath);
    alert("length"+global.visited.length);

    // I can see the value here but not in the NextFunction
    alert("all"+global.visited);

    
    // alert(history.location.pathname);
    // alert(history.length);
    
    // for (var i = 0; i < history.length; i++) {

    //   alert(history.go(i));
    // }
    // history.push('/UnitedStates');
    // alert(history);


    // history.push("/UnitedStates");
    // alert(history);

    // var currentPath = (location.pathname);

    // alert(global.visited);

    // global.visited.push(currentPath);

    // // alert(global.visited);
    // alert(global.visited);

  // alert(visited.length);

  // global.visited[0] = "/UnitedStates";
  // global.visited[1] = "/Japan";

  return  <Route path="/:currentPath" exact component={countryPage} />
  // return global.location.href=('http://localhost:3000/UnitedStates');


}

export default HeaderView
// export { visited };
// export default { value: [] }