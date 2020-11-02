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
        
        
        {/*right button*/}
            <div className="text-center">
                <a class="btn btn-danger mt-3 mb-3" href="/Country" role="button">
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
            <p>Cultured is a virtual experience that immerses you in the culture of countries around the world...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus bibendum ligula quis faucibus. Aliquam erat volutpat. Pellentesque ut condimentum ipsum. Donec nibh ante, bibendum eu consequat laoreet, fringilla ut justo. Aliquam tempus nisi eu dolor tincidunt pretium. Fusce a dolor vel lacus pharetra euismod vitae a nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eget quam et velit finibus dignissim vitae eu magna. Nulla sem purus, consectetur ac libero non, egestas posuere augue. Cras sit amet metus non elit auctor malesuada. Morbi id dui viverra, interdum ante laoreet, lacinia metus.</p>
        </div>
        
      </div>
        </div>
      
        </div>
    ); 
  }
  
}

export default frontPage