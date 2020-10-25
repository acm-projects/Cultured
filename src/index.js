import 'bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import $ from 'jquery';
import Popper from 'popper.js';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link } from 'react-router-dom'
import history from './Browser'
import frontPage from './pages/Frontpage';



ReactDOM.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

//   <Provider store={store}>
//   <Router history={history}>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//       <Route exact path="/" component={frontPage} />
//       <Route path="/Country" component={countryPage} />
//     </div>
//   </Router>
// </Provider>,

  <React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
  
);

// ReactDOM.render(
//   //   <Router history={history}>
//   //   <App />
//   // </Router> ), holder)
  
//     // <Router history={history}>
//     //   <React.StrictMode>
//     //     <App />
//     //   </React.StrictMode>
//     // </Router>,
//     // document.getElementById('root')
  
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
