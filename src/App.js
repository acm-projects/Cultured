//https://github.com/acmutd/web-dev-workshop
import React from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Component } from 'react'
//import components
import Navbar from "./components/Navbar"
import frontPage from "./pages/Frontpage"
import countryPage from "./pages/Countrypage"
import countryTrash from "./pages/countryTrash"
// import japanPage from "./pages/japanPage"
// import canadaPage from "./pages/canadaPage"
// import usPage from "./pages/usPage"
import HistoryFunction from "./HistoryFunction"
import HeaderView from "./HistoryFunction"
import next from "./pages/NextFunction"
// import visited from "./Browser"

import './addedClasses.css';

// declare var visited;
// var visited = []

// var visited = ["South Korea"];
// var myVisited = require('./Browser');
// var visited = myVisited.visited;

/***********************************Class******************************* */
// class App extends Component {

//   // static visited;

//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   inputValue: '',
//     //   items: [],
//     // };

//     window.visited = ["Korea"];
//   }

//   static addItem = (param) => {
//     alert(param);
//     // var items = this.state.items;
//     // items.push(this.state.inputValue);

//  Push Works
//     window.visited.push(param);

//     // this.setState({
//     //   items
//     // });
//     // alert(this.items);

//     return <Route path="/:currentPath" exact component={countryPage} />
//   }
    
//   static getVisited() {

// Returns only the initialized value
//     let items = this.state.items;
//     return items;
//   }

//   static nextFunction() {

// Displays only the initialized value
//     let items = this.state.items;
//     alert(items);
//   }

//   render() {
//     return (
  
//     <div className="bg-color align-center full-height">
//       {/*renders navbar*/}
//       ReactDOM.render(<Navbar/>, document.getElementById('root'));
    
//     <div className="">
      
//     {/*routing information*/}
//       <Router>
//         <main>
//           <Switch>
//             <Route path="/" exact component={frontPage} />
//             <Route path="/Country" exact component={countryPage} />
//             <Route path="/yeet" exact component={countryTrash} />

//             {/* Debug1 ********************************************************************/}
//             {/* <Route path="/Japan" exact component={HeaderView("/Japan")} />
//             <Route path="/Canada" exact component={HeaderView("/Canada")} />
//             <Route path="/UnitedStates" exact component={HeaderView("/UnitedStates")} /> */}
//             {/* End Debug1 *********************************************************************/}

//             <Route path="/Japan" exact component={countryPage} />
//             <Route path="/Canada" exact component={countryPage} />
//             <Route path="/UnitedStates" exact component={countryPage} />
//             {/* <Route path="/Next" exact component={HeaderView}/> */}
//             <Redirect to="/" />
//           </Switch>
//         </main>
//       </Router>
//     </div>
//     </div>
//   );
// }
// }
/***********************************Class******************************* */

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

            {/* Debug1 ********************************************************************/}
            {/* <Route path="/Japan" exact component={HeaderView("/Japan")} />
            <Route path="/Canada" exact component={HeaderView("/Canada")} />
            <Route path="/UnitedStates" exact component={HeaderView("/UnitedStates")} /> */}
            {/* End Debug1 *********************************************************************/}

            <Route path="/Japan" exact component={countryPage} />
            <Route path="/Canada" exact component={countryPage} />
            <Route path="/UnitedStates" exact component={countryPage} />
            {/* <Route path="/Next" exact component={HeaderView}/> */}
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
    </div>
  );
}

export default App;
// export default {
//   value: 0
// };