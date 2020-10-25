import React from 'react'
import HeaderView from "../HistoryFunction"
import { Button } from 'react-bootstrap';
import appClass from '../App'
import { useHistory } from 'react-router-dom';

class frontPage extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div >
        
        <div className="container-md bg-light align-center text-center">
        
        {/*Header*/}
        <div className="row pt-5 mb-3 pb-4 pt-3">
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
                <a class="btn btn-danger mt-3 mb-3" href="/Country" role="button">
                    <h3> Visit Random! </h3>
                </a>
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

                    {/* US */}
                    <a class="btn btn-outline-danger m-1" href="/UnitedStates" role="button">
                        <h5>United States</h5>
                    </a>

                    {/* <a class>
                        <button onClick={ () => appClass.addItem("/UnitedStates") } variant="btn btn-outline-danger m-1">
                            <h5>United States</h5>
                        </button>
                    </a> */}
                    
                    {/* function us() {
                        
                        <button onClick={ () => history.push("/UnitedStates") } variant="btn btn-outline-danger m-1">
                            <h5>United States</h5>
                        </button>
                    } */}

                    {/* Canada */}
                    <a class="btn btn-outline-danger m-1" href="/Canada" role="button">
                        <h5>Canada</h5>
                    </a>

                    {/* Tried to call the function in the App class but returns an empty arraylist */}
                    {/* <a class>
                        <button onClick={ () => appClass.addItem("/Canada") } variant="btn btn-outline-danger m-1">
                            <h5>Canada</h5>
                        </button>
                    </a> */}

                    {/* <a class>
                        <button onClick={ () => HeaderView("/Canada") } variant="btn btn-outline-danger m-1">
                            <h5>Canada</h5>
                        </button>
                    </a> */}


                    <div class="btn btn-outline-danger m-1">Mexico</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>


                <div className="col-md p-2 m-2">
                    <h5>Not North America</h5>

                    {/* Japan */}
                    <a class="btn btn-outline-danger m-1" href="/Japan" role="button">
                        <h5>Japan</h5>
                    </a>

                    <div class="btn btn-outline-danger m-1">South Korea</div>
                    <div class="btn btn-outline-danger m-1">China</div>
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
      
        </div>
    ); 
  }
  
}

export default frontPage