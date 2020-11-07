import React from 'react'
import ReactPlayer from "react-player"
import ".\\b.css"

class countryPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newsData: { title: null, url: null, description: null, provider: null, date: null },
            recipeData: { image: null, sourceurl: null, summary: null, title:null, prepTime: null, servings:null},
            imgData: { news: null },
            geoData: {lat: null, lon: null, timezone: null, population1: null, code: null},
            placeData: { name: null, kinds: null, lat: null, lon: null,
                        name1: null, kinds1: null, lat1: null, lon1: null,
                        name2: null, kinds2: null, lat2: null, lon2: null},
            youtubeData: {title: null, id: null},
            generalImgData: {flag: null, location: null}
        };
    }
    callNewsAPI = async (country) => {
        let response = await fetch("http://localhost:5000/newsAPI/" + country)
              .then(body => body.json())
              .then(body => {
                  this.setState({ newsData: { title: body.data.value[0].title, url: body.data.value[0].url, description: body.data.value[0].description, provider: body.data.value[0].provider.name, date: body.data.value[0].datePublished} })
                  this.callImgAPI();
              })
          // if (response.status !== 200) throw Error(body.message);

    };
    callRecipeAPI = async (cuisine) => {
        let response = await fetch('http://localhost:5000/recipeAPI/' + cuisine)
            .then(body => body.json())
            .then(body => {
                this.setState({ recipeData: { image: body.data.recipes[0].image, sourceurl: body.data.recipes[0].sourceUrl, summary: body.data.recipes[0].summary, title:body.data.recipes[0].title, prepTime: body.data.recipes[0].readyInMinutes, servings: body.data.recipes[0].servings } })
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callImgAPI = async () => {
       /* var search = this.state.newsData.title;
        let response = await fetch('http://localhost:5000/imgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                this.setState({ imgData: { news:  body.data.value[0].url} })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeoAPI = async (capitol) => {

        let response = await fetch('http://localhost:5000/geoAPI/' + capitol)
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
        let response = await fetch('http://localhost:5000/placeAPI/' + lat + "/" + lon)
            .then(body => body.json())
            .then(body => {
                this.setState({ placeData: { name: body.data[0].name, kinds: body.data[0].kinds, lat: body.data[0].point.lat, lon: body.data[0].point.lon, name1: body.data[1].name, kinds1: body.data[1].kinds, lat1: body.data[1].point.lat, lon1: body.data[1].point.lon, name2: body.data[2].name, kinds2: body.data[2].kinds, lat2: body.data[2].point.lat, lon2: body.data[2].point.lon } })
                //this.callGeneralImgAPILocation()
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callYoutubeAPI = async () => {
    
       /* var lat = this.state.geoData.lat, lon = this.state.geoData.lon;
        let response = await fetch('http://localhost:5000/youtubeAPI/' + lat + '/' + lon)
            .then(body => body.json())
            .then(body => {
                console.log(body);
                this.setState({ youtubeData: { title: body.data.items[0].snippet.title, id: body.data.items[0].id.videoId } })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeneralImgAPIFlag = async (search) => {
        /*
        let response = await fetch('http://localhost:5000/generalImgAPI/' + search)
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
        let response = await fetch('http://localhost:5000/generalImgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                console.log(body);
                var data = body.data.value[0].thumbnailUrl;
                this.setState({ generalImgData: { flag: this.state.generalImgData.flag, location: data } })
            })*/
        // if (response.status !== 200) throw Error(body.message);

    };
    componentDidMount() {

        this.callNewsAPI("japan")
              .catch(err => console.log(err));

         this.callRecipeAPI("chinese")
            .catch(err => console.log(err));

         this.callGeoAPI("seatle")
            .catch(err => console.log(err))

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
                <h1 class="card-title">Country Title</h1>
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
              <div class="card-body">
                    <img class="card-img-top" src={this.state.generalImgData.flag} alt="Card image cap" />
        <img class="card-img-top" src={"        https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png"} alt="Card image cap" />
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
                    <h5 class="card-text text-left pr-2 pl-4">Capital:</h5>
                    <p class="card-text text-left">[capital]</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Country code:</h5>
                    <p class="card-text text-left">{this.state.geoData.code}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">Population: [capital or country??]</h5>
                    <p class="card-text text-left">{this.state.geoData.population1}</p>
            </div>
            <div class="row">
                    <h5 class="card-text text-left pr-2 pl-4">PLEASE someone else come up with some stuff</h5>
                    <p class="card-text text-left">please</p>
            </div>

          </div>
        </div> 
        
        {/*food*/}
        <div class=" card m-2">
            <h5 class="card-header">Food</h5>
          <div class="card-body">
                <div class="card border-secondary mb-3">
                    <img class="card-img-top" src={"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Card image cap"/>
                    <p>{this.state.recipeData.image}</p>
        
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.recipeData.title}</h4>
                        <p class="card-text text-left">Prepare in {this.state.recipeData.prepTime} minutes | Makes {this.state.recipeData.servings} servings</p>
                        <a class="btn btn-outline-danger" href={this.state.recipeData.sourceurl}>
                            Learn to Make It
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        {/*clothing*/}
        <div class=" card m-2">
            <h5 class="card-header">Clothes</h5>
            <div class="card-body">
                <h5 class="card-title">Learn to wear [clothes]</h5>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vMCS6gT8SzQ" allowfullscreen></iframe>
                </div>
            </div>
        </div> 
        
        {/*music*/}
        <div class=" card m-2">
            <h5 class="card-header">Music</h5>
            <div class="card-body">
                <h5 class="card-title">[a description of music]</h5>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Wqn-7ZkYUYM" allowfullscreen></iframe>
                </div>
            </div>
        </div> 
        
        {/*news*/}
        <div class=" card m-2">
            <h5 class="card-header">News</h5>
          <div class="card-body">
                <div class="card border-secondary mb-3">
                    <img class="card-img-top" src={"https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg"} alt="Card image cap"/>
                    <img class="card-img-top" src={this.state.imgData.news} alt="Card image cap"/>
                    <div class="card-body text-dark">
                        <h4 class="card-title text-left">{this.state.newsData.title} [this has index 0... can we get more?]</h4>
                        <p class="card-text text-left ">{this.state.newsData.description}</p>
                        <p class="card-text text-left text-muted">Provided by {this.state.newsData.provider} | {this.state.newsData.date}</p>
                        <a class="btn btn-outline-danger" href={this.state.newsData.url}>
                            Read More
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        {/*Cultural facts*/}
        <div class=" card m-2">
            <h5 class="card-header">Cultural Facts</h5>
          <div class="card-body">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sewhedyC0F0" allowfullscreen></iframe>
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
            <div class="btn btn-outline-light">
                <h3>Next</h3>
            </div>
        </div>
    </div>


</div>
    ); 
  }
  
}

export default countryPage