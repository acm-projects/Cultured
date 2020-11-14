import React from 'react'
import Next from "../functions/Next";
import Map from "../components/map/Map"
//import "CulturedLogo.png"
import img from './logo.png'

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
                <a class="btn btn-danger mt-3 mb-3" onClick={ () => Next() } role="button">
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
        <div className="container pl-5 pr-5 pt-5 pb-3 bg-white rounded">

            <p>Cultured is a web app that aims to fully immerse the user in the culture of a country of their choosing. Users can look up a country of their choosing in the front page, then click on the country to find out more information about it. If the user doesn't know which country to visit (or can't choose one), they can click on the random button and we’ll choose a country for you! Each country has its own page, so users can get fast facts about the country, the time zone, recipes for local food, national news, traditional attire, cultural education and popular tourist spots in the country. Information on these country pages is very up-to-date, and we're looking to add user authentication (via a login page), a translation feature to the country page so the user can learn more about the language spoken in particular cultures, and sponsored link revenue in the future.</p>
            <div className="">
                <img class="img-fluid logo" src={img}/>
            </div>
                        

        </div>
        
      </div>
        </div>
      
        </div>
    ); 
  }
  
}

export default frontPage