import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container, Row, Col, NavBar, Button, Form} from 'react-bootstrap';

class FrontPage extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div >
        {/*Header*/}
        <div className="row culture-red mb-3 pb-4 pt-3">
            <div className="col text-center">
                <h1>Welcome to Cultured! </h1>
            </div>
        </div>
        
        {/*map*/}
        <div className="row">
            <div className="col text-center">
                <div className="map">
                  <h1> map </h1>
                </div>
            </div>
        </div>
        
        {/*control buttons*/}
        <div className="row mt-4 mb-4">
            {/*alignment column*/}
            <div className="col-md-2">
            </div>
        
            {/*left button*/}
            <div className="col-6   col-md-4 text-center">
                <div className="btn btn-danger mt-3 mb-3">
                  <h3> All Countries </h3>
                </div>
            </div>
        
            {/*right button*/}
            <div className="col-6   col-md-4 text-center">
                <div className="btn btn-danger mt-3 mb-3">
                  <h3> Visit Random! </h3>
                </div>
            </div>
        
            {/*alignment column*/}
            <div className="col-md-2">
            </div>
        </div>
        
        {/*flavor line*/}
        <div className="culture-red mr-5 ml-5 mb-4">
            <div className="flavor-line">
            </div>
        </div>
        
        {/*dropdown box FIXME implementation animation?? FIXME clean up later with Cards or something*/}
        <div className="container bg-white">
        
            <div className="row">
        
                {/*Form Block FIXME not centered in mobile*/}
                <div className="col-md mt-5">
                    <form class="form-inline">
                      <div class="form-inline mx-sm-3 mb-2">
                        <label for="countryInput" class="sr-only">Search Country by Name</label>
                        <input type="plain-text" class="form-control" id="countryInput" placeholder="Search Country by Name"></input>
                                <div id="countrysearch" class="form-text text-muted">Just type a country name to search our site!</div>
                      </div>
                        {/*FIXME: might be redundant, also not centered
                        <button type="submit" class="btn btn-danger mb-2 mx-sm-3">Search</button>*/}
                    </form>
                </div>
        
                {/*Countries FIXME make this functional*/}
                <div className="col-md p-2 m-2">
                    <h5>North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Not North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Or Is It North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Nah it is not North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
            </div>
        </div>
        
        {/*flavor line*/}
        <div className="culture-red mr-5 ml-5 mb-4 mt-4">
            <div className="flavor-line">
            </div>
        </div>
        
        {/*description*/}
        <div className="container p-5 bg-white">
            <p>Site Description- I'm baby meditation you probably haven't heard of them listicle non tilde glossier jean shorts crucifix butcher pickled chartreuse health goth seitan selvage meh. 8-bit commodo seitan ethical umami scenester ennui aute pariatur selvage. Fugiat dolore ex messenger bag taxidermy squid gluten-free esse pok pok. Skateboard freegan next level, green juice aesthetic sed lomo occupy cillum plaid austin locavore chillwave kinfolk. Readymade brooklyn jianbing cliche unicorn lumbersexual sed vinyl four loko. Nostrud occaecat helvetica, enim gluten-free hella ramps pop-up truffaut lorem iceland chicharrones subway tile waistcoat. Woke hexagon squid, salvia four loko humblebrag tattooed +1 tbh microdosing sartorial elit palo santo. </p>
        </div>
        
      </div>
      
    ); 
  }
  
}

class NavBarBS extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        
<div>
        
        {/*navbar container*/}
        <nav class="navbar navbar-expand-lg bg-danger fixed-top">
        
            {/*FIXME: expand button is missing*/}
        
            {/*logo*/}
            <a class="navbar-brand logo text-dark" href="#">CULTURED</a>
        
            {/*collapsed navbar button*/}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/*FIXME: we could totally add a button here for country name on country page*/}

            {/*collabsible class*/}
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                {/*other buttons*/}
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0 pr-5">
                    {/*random button*/}
                  <li class="nav-item btn btn-outline-light btn-">
                    <a>Visit Random</a>
                  </li>
                </ul>

                {/*search bar*/}
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        
        </nav>
</div>
    ); 
  }
  
}

function App() {
  return (
      
      //{/*FIXME: this render situation is not working properly, only supposed to call one render??*/}
      //{/*the text of the render command is appearing in the webpage*/}
     // {/*https://reactjs.org/docs/rendering-elements.htm*/}
    <div className="App">     
    ReactDOM.render(<NavBarBS />, document.getElementById('navbarbs'));
    <div className="container-md bg-light align-center text-center">
        

      ReactDOM.render(<FrontPage />, document.getElementById('page'));
        
    </div>

    
    
    


    </div>

  );
}

export default App;

