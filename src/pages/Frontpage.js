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
        <div className="pt-5 pt-3">
            <div className="col text-light text-center">
                <h1>Welcome to Cultured! </h1>
            </div>
        </div>
        
        
        {/*random button*/}
            <div className="text-center">
                <a class="btn btn-danger mt-3 mb-3" href="/Nigeria" role="button">
                    <h4> Visit Random! </h4>
                </a>
            </div>
        
                {/*flavor line*/}
        <div className="culture-red mr-5 ml-5 mb-4 mt-4">
            <div className="flavor-line">
            </div>
        </div>
        

        <div class="container-xl">
        <Map />
        </div>
        
        <div className="container-md  align-center text-center">        

        <div className="container mt-3 pb-3">


        
        {/*description*/}
        <div className="container pl-5 pr-5 pt-3 pb-3 bg-white rounded">
            <p>Cultured is a virtual experience that immerses you in the culture of countries around the world.</p>
            <p></p>
        </div>
        
      </div>
        </div>
      
        </div>
    ); 
  }
  
}

export default frontPage