import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="bar">
        
        <div className="logo">
        <p>CULTURED </p>
        </div>
        <p className="navbar-buttons">Visit Random</p>
        <p className="navbar-buttons">Random</p>
        <p>
        <form>
          <label for="search-bar" />
          <input type="text" id="search-bar" name="search-bar" placeholder="Search"/>
        </form>
        </p>
      </div> 
    ); 
  }
  
}

class FrontPage extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="background">
        <div className="welcome">
          <h1>Welcome to Cultured! </h1>
        </div>
        <div className="map">
          <h1> map </h1>
        </div>
        
        <div className="buttons">
          <p className="b">All countries </p>
          <p className="b">Visit Random Country! </p>
        </div>
        
        <div className="dropdown">
          <div className="left-col">
          <form>
          <l for="search-bar" />
          <input type="text" id="search-bar" name="search-bar" placeholder="Search" />
        </form>
          <p>Looking for something specific? Try the search feature! Or select a country to get started! (or something) </p>
          </div>
          <div className="right-col">
          <p>[Listed by continent] </p>
          <p>North America: </p>
          <p>country1</p>
          <p>country2</p>
          <p>country3</p>
          <p>country4</p>
          <p>country5</p>
          <p>country6</p>
          <p>South America: </p>
          <p>country7</p>
          <p>country8</p>
          <p>country9</p>
          <p>country10</p>
          </div>
        </div>
        
        <div className="description">
          <p>Site Description- I'm baby meditation you probably haven't heard of them listicle non tilde glossier jean shorts crucifix butcher pickled chartreuse health goth seitan selvage meh. 8-bit commodo seitan ethical umami scenester ennui aute pariatur selvage. Fugiat dolore ex messenger bag taxidermy squid gluten-free esse pok pok. Skateboard freegan next level, green juice aesthetic sed lomo occupy cillum plaid austin locavore chillwave kinfolk. Readymade brooklyn jianbing cliche unicorn lumbersexual sed vinyl four loko. Nostrud occaecat helvetica, enim gluten-free hella ramps pop-up truffaut lorem iceland chicharrones subway tile waistcoat. Woke hexagon squid, salvia four loko humblebrag tattooed +1 tbh microdosing sartorial elit palo santo. </p>
        </div>
        </div>
        
      {/*
       <div className="footer">
          <p>Copyright</p>
      </div>
      */}
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
      <div className="bar">
        
        <div className="logo">
        <p>CULTURED </p>
        </div>
        <p className="navbar-buttons">Visit Random</p>
        <p className="navbar-buttons">Random</p>
        <p>
        <form>
          <label for="search-bar" />
          <input type="text" id="search-bar" name="search-bar" placeholder="Search"/>
        </form>
        </p>
      </div> 
    ); 
  }
  
}

class FrontPageBS extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="background">
        <div className="welcome">
          <h1>Welcome to Cultured! </h1>
        </div>
        <div className="map">
          <h1> map </h1>
        </div>
        
        <div className="buttons">
          <p className="b">All countries </p>
          <p className="b">Visit Random Country! </p>
        </div>
        
        <div className="dropdown">
          <div className="left-col">
          <form>
          <l for="search-bar" />
          <input type="text" id="search-bar" name="search-bar" placeholder="Search" />
        </form>
          <p>Looking for something specific? Try the search feature! Or select a country to get started! (or something) </p>
          </div>
          <div className="right-col">
          <p>[Listed by continent] </p>
          <p>North America: </p>
          <p>country1</p>
          <p>country2</p>
          <p>country3</p>
          <p>country4</p>
          <p>country5</p>
          <p>country6</p>
          <p>South America: </p>
          <p>country7</p>
          <p>country8</p>
          <p>country9</p>
          <p>country10</p>
          </div>
        </div>
        
        <div className="description">
          <p>Site Description- I'm baby meditation you probably haven't heard of them listicle non tilde glossier jean shorts crucifix butcher pickled chartreuse health goth seitan selvage meh. 8-bit commodo seitan ethical umami scenester ennui aute pariatur selvage. Fugiat dolore ex messenger bag taxidermy squid gluten-free esse pok pok. Skateboard freegan next level, green juice aesthetic sed lomo occupy cillum plaid austin locavore chillwave kinfolk. Readymade brooklyn jianbing cliche unicorn lumbersexual sed vinyl four loko. Nostrud occaecat helvetica, enim gluten-free hella ramps pop-up truffaut lorem iceland chicharrones subway tile waistcoat. Woke hexagon squid, salvia four loko humblebrag tattooed +1 tbh microdosing sartorial elit palo santo. </p>
        </div>
        </div>
        
      {/*
       <div className="footer">
          <p>Copyright</p>
      </div>
      */}
      </div> 
      
    ); 
  }
  
}


function App() {
  return (
      
    <div className="App">     
<Container></Container>
    ReactDOM.render(<NavBarBS />, document.getElementById('navbarbs'));
      ReactDOM.render(<FrontPageBS />, document.getElementById('pagebs'));
      ReactDOM.render(<NavBar />, document.getElementById('navbar'));
      ReactDOM.render(<FrontPage />, document.getElementById('page'));

    </div>

  );
}

export default App;

