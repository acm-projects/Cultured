import React from 'react'
import ReactPlayer from "react-player"
import ".\\b.css"
import Next from "../functions/Next";
//import {main, yote} from "../server_obj.js";


class CountryPage extends React.Component{
    
    
    
    constructor(props) {
        super(props);
        this.state = {
            newsData: { title: null, url: null, description: null, provider: null, date: null, title1: null, url1: null, description1: null, provider1: null, date1: null },
            recipeData: { image: null, sourceurl: null, summary: null, title:null, prepTime: null, servings:null},
            imgData: { news: null },
            geoData: {lat: null, lon: null, timezone: null, population1: null, code: null},
            placeData: { name: null, kinds: null, lat: null, lon: null,
                        name1: null, kinds1: null, lat1: null, lon1: null,
                        name2: null, kinds2: null, lat2: null, lon2: null},
            youtubeData: {title: null, id: null},
            generalImgData: {flag: null, location: null},
            countryData: {name: null, capital: null, code3: null, code2: null, location: null, recipieSearchTerm: null, fastFacts: null, sports: null, taboos: null, history: null, religion: null, clothes: null, timezone: null, countryPage: null}
        };
    }

    
    callNewsAPI = async (country) => {
        let response = await fetch("http://localhost:5001/newsAPI/" + country)
              .then(body => body.json())
              .then(body => {
                  this.setState({ newsData: { title: body.data.value[0].title, url: body.data.value[0].url, description: body.data.value[0].description, provider: body.data.value[0].provider.name, date: body.data.value[0].datePublished, title1: body.data.value[1].title, url1: body.data.value[1].url, description1: body.data.value[1].description, provider1: body.data.value[1].provider.name, date1: body.data.value[1].datePublished} })
                  this.callImgAPI();
              })
          // if (response.status !== 200) throw Error(body.message);

    };
    callRecipeAPI = async (cuisine) => {
        let response = await fetch('http://localhost:5001/recipeAPI/' + cuisine)
            .then(body => body.json())
            .then(body => {
                this.setState({ recipeData: { image: body.data.recipes[0].image, sourceurl: body.data.recipes[0].sourceUrl, summary: body.data.recipes[0].summary, title:body.data.recipes[0].title, prepTime: body.data.recipes[0].readyInMinutes, servings: body.data.recipes[0].servings,
                                            
                image1: body.data.recipes[1].image, sourceurl1: body.data.recipes[1].sourceUrl, summary1: body.data.recipes[1].summary, title1:body.data.recipes[1].title, prepTime1: body.data.recipes[1].readyInMinutes, servings1: body.data.recipes[1].servings,

                image2: body.data.recipes[2].image, sourceurl2: body.data.recipes[2].sourceUrl, summary2: body.data.recipes[2].summary, title2:body.data.recipes[2].title, prepTime2: body.data.recipes[2].readyInMinutes, servings2: body.data.recipes[2].servings} })
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callImgAPI = async () => {
       /* var search = this.state.newsData.title;
        let response = await fetch('http://localhost:5001/imgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                this.setState({ imgData: { news:  body.data.value[0].url} })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeoAPI = async (capitol) => {
        let response = await fetch('http://localhost:5001/geoAPI/' + capitol)

        /*let response = await fetch('http://localhost:5001/geoAPI/' + capitol, { mode: "no-cors", headers: {
          "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : true
        }})*/
            .then(body => body.json())
            .then(body => {
                this.setState({ geoData: { lat: body.data.lat, lon: body.data.lon, timezone: body.data.timezone, population1: body.data.population, code: body.data.country} })
                this.callPlaceAPI()
                //this.callYoutubeAPI()
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callPlaceAPI = async () => {
        var lat = this.state.geoData.lat, lon = this.state.geoData.lon;
        let response = await fetch('http://localhost:5001/placeAPI/' + lat + "/" + lon)
            .then(body => body.json())
            .then(body => {
                this.setState({ placeData: { name: body.data[0].name, kinds: body.data[0].kinds, lat: body.data[0].point.lat, lon: body.data[0].point.lon, name1: body.data[1].name, kinds1: body.data[1].kinds, lat1: body.data[1].point.lat, lon1: body.data[1].point.lon, name2: body.data[2].name, kinds2: body.data[2].kinds, lat2: body.data[2].point.lat, lon2: body.data[2].point.lon } })
                //this.callGeneralImgAPILocation()
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callYoutubeAPI = async () => {
    
       /* var lat = this.state.geoData.lat, lon = this.state.geoData.lon;
        let response = await fetch('http://localhost:5001/youtubeAPI/' + lat + '/' + lon)
            .then(body => body.json())
            .then(body => {
                console.log(body);
                this.setState({ youtubeData: { title: body.data.items[0].snippet.title, id: body.data.items[0].id.videoId } })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeneralImgAPIFlag = async (search) => {
        /*
        let response = await fetch('http://localhost:5001/generalImgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                console.log(body);
                var data = body.data.value[0].thumbnailUrl;
                this.setState({ generalImgData: { flag: data } })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeneralImgAPILocation = async () => {
        /*
        var search = this.state.placeData.name;
        let response = await fetch('http://localhost:5001/generalImgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                console.log(body);
                var data = body.data.value[0].thumbnailUrl;
                this.setState({ generalImgData: { flag: this.state.generalImgData.flag, location: data } })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
/*
    displayCountryData = async () => {
      console.log("here 1");
      let response = await fetch('http://localhost:5000/api/hello')
      .then(body => body.json())
      .then(body => {
          console.log(body);
          //var data = body.name;
          this.setState({ countryData: { name: body.information.name, capital: body.information.capital, clothes: body.information.clothes, code2: body.information.code2,
           code3: body.information.code3, countryPage: body.information.countryPage, fastFacts: body.information.fastFacts, history: body.information.history,
          location: body.information.location, recipieSearchTerm: body.information.recipieSearchTerm, religion: body.information.religion, sports: body.information.sports,
          taboos: body.information.taboos, timezone: body.information.timezone } })
      })
       console.log("here 2");
    console.log(response);
    /*this.setState ({
      countryData: {name: body.name}
    })
    console.log(this.state.countryData.name);
    console.log(body); 
    if (response.status !== 200) throw Error(body.message);*/
 //   }



    componentDidMount() {

        this.callNewsAPI(this.props.title)
              .catch(err => console.log(err));

         this.callRecipeAPI(this.props.foodTag)
            .catch(err => console.log(err));

         this.callGeoAPI(this.props.capital)
            .catch(err => console.log(err))
        
    //      this.displayCountryData().catch(err => console.log(err))

        //this.callGeneralImgAPIFlag("canadian flag")
            //.catch(err => console.log(err))

      }
  
//this.props.countries
  render() {
      
      
    return (
      <div>
    <div class="container-fluid  mt-4 ">
        
      
        {/*top row FIXME: format columbs to same height?*/}    
        <div class="row ">
                <div class="col-xl"/>
            {/*country title*/}    
          <div class="col-xl-6">
            <div class="card m-2">
              <div class="card-body">
                <h1 class="card-title">{this.props.title}</h1>
        <h1 class="card-title">{this.state.countryData.name}</h1>
        <p class="card-text">{this.state.countryData.timezone}</p>
        <p class="card-text text-left">{this.state.countryData.fastFacts}</p>
              </div>
            </div>
          </div>
        <div class="col-xl"/>
        </div>
    </div>

    <div class="card-columns col">
        
                <div class="">
            <div class="row">
        
        {/*flag*/}
        <div class="col-6 col-2-md d-flex align-items-stretch">
            <div class=" card m-2">
              <div class="card-body ">
                    <img class="card-img-top border border-dark" src={this.props.flagUrl} alt="Card image cap" />
              </div>
            </div>
        </div>
        
        {/*Time*/}
        <div class="col-6 col-2-md d-flex align-items-stretch">
            <div class=" card m-2">
                <h5 class="card-header">Timezone</h5>
              <div class="card-body">
                <p class="card-text">{this.state.geoData.timezone}</p>
              </div>
            </div>
        </div>
        </div>
          </div>

        {/*fast facts*/}
        <div class=" card m-2">
            <h5 class="card-header">Fast Facts</h5>
          <div class="card-body">
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Country code:</h5>
                    <p class="card-text text-left">{this.state.geoData.code}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Capital:</h5>
                    <p class="card-text text-left">{this.props.capital}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Capital Population:</h5>
                    <p class="card-text text-left">{this.state.geoData.population1}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Area:</h5>
                    <p class="card-text text-left">{this.props.area} km<sup>2</sup></p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Language:</h5>
                    <p class="card-text text-left">{this.props.language}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Currency:</h5>
                    <p class="card-text text-left">{this.props.currency}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Religion:</h5>
                    <p class="card-text text-left">{this.props.religion}</p>
            </div>

          </div>
        </div> 
        
                {/*news*/}
        <div class=" card m-2">
            <h5 class="card-header">News</h5>
          <div class="card-body">
                <div class="card border-secondary mb-3">
        {/*<img class="card-img-top card-img-top-stretch" src={"https://lh3.googleusercontent.com/proxy/f2dPC0AfLkKZcot70wlcx9SER592Ss4gEtAuvNGouM53PmSurcOb2Ps6-4QpMQ189Oi-Xzve6huTWek-SmL_h7Ovr7BB5OhAomNEXZ6kdKKFJKdF7sNQ3A"} alt="Card image cap"/>*/}

                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.newsData.title}</h4>
                        <p class="card-text text-left ">{this.state.newsData.description}</p>
                        <p class="card-text text-left text-muted">Provided by {this.state.newsData.provider} | {this.state.newsData.date}</p>
                        <a class="btn btn-outline-danger" href={this.state.newsData.url}>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        
        <div class="card-body">
                <div class="card border-secondary mb-3">
        {/*<img class="card-img-top card-img-top-stretch" src={"https://lh3.googleusercontent.com/proxy/f2dPC0AfLkKZcot70wlcx9SER592Ss4gEtAuvNGouM53PmSurcOb2Ps6-4QpMQ189Oi-Xzve6huTWek-SmL_h7Ovr7BB5OhAomNEXZ6kdKKFJKdF7sNQ3A"} alt="Card image cap"/>*/}
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.newsData.title1}</h4>
                        <p class="card-text text-left ">{this.state.newsData.description1}</p>
                        <p class="card-text text-left text-muted">Provided by {this.state.newsData.provider1} | {this.state.newsData.date1}</p>
                        <a class="btn btn-outline-danger" href={this.state.newsData.url1}>
                            Read More
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        {/*Cultural facts*/}
        <div class=" card m-2">
            <h5 class="card-header">Culture</h5>
          <div class="card-body">
                <h5 class="card-title">{this.props.culture}</h5>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src={this.props.cultureUrl} allowfullscreen></iframe>
                </div>
          </div>
        </div> 
        
                {/*clothing*/}
        <div class=" card m-2">
            <h5 class="card-header">Clothes</h5>
            <div class="card-body">
                <h5 class="card-title">{this.props.clothes}</h5>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src={this.props.clothesUrl} allowfullscreen></iframe>
                </div>
            </div>
        </div> 
        
        {/*food*/}
        <div class=" card m-2">
            <h5 class="card-header">Food</h5>
          <div class="card-body">
                <div class="card border-secondary mb-3">
                    <img class="card-img-top card-img-top-stretch" src={this.state.recipeData.image} alt="Card image cap"/>
        
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.recipeData.title}</h4>
                        <p class="card-text text-left">Prepare in {this.state.recipeData.prepTime} minutes | Makes {this.state.recipeData.servings} servings</p>
                        <a class="btn btn-outline-danger" href={this.state.recipeData.sourceurl}>
                            Learn to Make It
                        </a>
                    </div>
                </div>
        
                <div class="card border-secondary mb-3">
                    <img class="card-img-top card-img-top-stretch" src={this.state.recipeData.image1} alt="Card image cap"/>
        
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.recipeData.title1}</h4>
                        <p class="card-text text-left">Prepare in {this.state.recipeData.prepTime1} minutes | Makes {this.state.recipeData.servings1} servings</p>
                        <a class="btn btn-outline-danger" href={this.state.recipeData.sourceurl1}>
                            Learn to Make It
                        </a>
                    </div>
                </div>
        
                <div class="card border-secondary mb-3">
                    <img class="card-img-top card-img-top-stretch" src={this.state.recipeData.image2} alt="Card image cap"/>
        
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.recipeData.title2}</h4>
                        <p class="card-text text-left">Prepare in {this.state.recipeData.prepTime2} minutes | Makes {this.state.recipeData.servings2} servings</p>
                        <a class="btn btn-outline-danger" href={this.state.recipeData.sourceurl2}>
                            Learn to Make It
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        
                {/*music*/}
        <div class=" card m-2">
            <h5 class="card-header">Music</h5>
            <div class="card-body">
                <h5 class="card-title">{this.props.music}</h5>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src={this.props.musicUrl} allowfullscreen></iframe>
                </div>
            </div>
        </div> 

        {/*Interesting Locations*/}
        <div class=" card m-2">
            <h5 class="card-header">Interesting Locations</h5>
        <div class="card-body mb-0 mt-0">
                <div class="card border-secondary">
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.placeData.name}</h4>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Latitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lat}</p>
                        </div>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Longitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lon}</p>
                        </div>
                        <p class="card-text text-left text-muted">Tags: {this.state.placeData.kinds}</p>
                    </div>
                </div>
        </div>
        <div class="card-body mb-0 mt-0">
                <div class="card border-secondary">
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.placeData.name1}</h4>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Latitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lat1}</p>
                        </div>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Longitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lon1}</p>
                        </div>
                        <p class="card-text text-left text-muted">Tags: {this.state.placeData.kinds1}</p>
                    </div>
                </div>
        </div>
        <div class="card-body mb-0 mt-0">
                <div class="card border-secondary">
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.placeData.name2}</h4>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Latitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lat2}</p>
                        </div>
                        <div class="row">
                                <h5 class="card-text text-left pr-2 pl-4">Longitude: </h5>
                                <p class="card-text text-left">{this.state.placeData.lon2}</p>
                        </div>
                        <p class="card-text text-left text-muted">Tags: {this.state.placeData.kinds2}</p>
                    </div>
                </div>
        </div>
        </div> 
        
    </div>
        
        
    {/*buttons*/}
    <div class="row m-0 mt-4 pb-4">
        {/*previous button*/}
        <div class="col-6">
            <a class="btn btn-outline-light" href="/">
                <h3>Previous</h3>
            </a>
        </div>
        
        {/*next button*/}
        <div class="col-6">
            <div class="btn btn-outline-light" onClick={ () => Next() } role="button">
                <h3>Next</h3>
            </div>
        </div>
    </div>


</div>
    ); 
  }
  
}

export default CountryPage;