import React from 'react'

import Map from "../components/map/Map"

class frontPage extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div >
        
        {/*Header*/}
        <div className="row pt-5 mb-3 pb-4 pt-3">
            <div className="col text-light text-center">
                <h1>Welcome to Cultured! </h1>
            </div>
        </div>
        
        <Map />
        
        <div className="container-md  align-center text-center">
        
        {/*Header*/}

        

        <div className="container bg-light">
        
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus bibendum ligula quis faucibus. Aliquam erat volutpat. Pellentesque ut condimentum ipsum. Donec nibh ante, bibendum eu consequat laoreet, fringilla ut justo. Aliquam tempus nisi eu dolor tincidunt pretium. Fusce a dolor vel lacus pharetra euismod vitae a nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eget quam et velit finibus dignissim vitae eu magna. Nulla sem purus, consectetur ac libero non, egestas posuere augue. Cras sit amet metus non elit auctor malesuada. Morbi id dui viverra, interdum ante laoreet, lacinia metus. </p>
        </div>
        
      </div>
        </div>
      
        </div>
    ); 
  }
  
}

export default frontPage