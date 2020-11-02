import React from 'react'

class countryPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newsData: { title: null, url: null },
            recipeData: { image: null, sourceurl: null },
            imgData: { news: null },
            geoData: {lat: null, lon: null},
            placeData: { name: null },
            youtubeData: {title: null, id: null},
            generalImgData: {flag: null, location: null}
        };
    }
    callNewsAPI = async (country) => {
        let response = await fetch("http://localhost:5000/newsAPI/" + country)
              .then(body => body.json())
              .then(body => {
                  this.setState({ newsData: { title: body.data.value[0].title, url: body.data.value[0].url } })
                  this.callImgAPI();
              })
          // if (response.status !== 200) throw Error(body.message);

    };
    callRecipeAPI = async (cuisine) => {
        let response = await fetch('http://localhost:5000/recipeAPI/' + cuisine)
            .then(body => body.json())
            .then(body => {
                this.setState({ recipeData: { image: body.data.recipes[0].image, sourceurl: body.data.recipes[0].sourceUrl } })
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
                this.setState({ geoData: { lat: body.data.lat, lon: body.data.lon } })
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
                this.setState({ placeData: { name: body.data[0].name } })
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
        <div class="row">
            {/*country title*/}    
          <div class="col-lg-4">
            <div class="card m-2">
              <div class="card-body">
                <h1 class="card-title">Country Title</h1>
              </div>
            </div>
          </div>
        
        
        <div class="col-lg-4">
            <div class="row">
        
        {/*flag*/}
        <div class="col-6 col-2-md">
            <div class=" card m-2">
              <div class="card-body">
                    <img class="card-img-top" src={this.state.generalImgData.flag} alt="Card image cap" />
        <img class="card-img-top" src={"        https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png"} alt="Card image cap" />
              </div>
            </div>
        </div>
        
        {/*Time*/}
        <div class="col-6 col-2-md">
            <div class=" card m-2">
                <h5 class="card-header">Time[zone ahaha]</h5>
              <div class="card-body">
                <p class="card-text">00:00</p>
              </div>
            </div>
        </div>

            </div>
          </div>
        
        {/*weather*/}
          <div class="col-lg-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">Weather</h5>
              </div>
            </div>
          </div>
        </div>
    </div>

        
    <div class="card-columns col">

        {/*fast facts*/}
        <div class=" card m-2">
            <h5 class="card-header">Fast Facts</h5>
          <div class="card-body">
            <h5 class="card-title">Fast Facts</h5>
            <p class="card-text text-left">text</p>
          </div>
        </div> 
        
        {/*food*/}
        <div class=" card m-2">
            <h5 class="card-header">Food</h5>
          <div class="card-body">
                <div class="card border-secondary mb-3">
                    <img class="card-img-top" src={"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Card image cap"/>
                    <div class="card-body text-dark">
                        <p class="card-text text-left">{this.state.recipeData.image}</p>
                        <p class="card-text text-left">Recipe Description here?</p>
                        <a class="btn btn-outline-danger" href={this.state.recipeData.sourceurl}>
                            Read More
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        {/*clothing*/}
        <div class=" card m-2">
            <h5 class="card-header">Clothes</h5>
          <div class="card-body">
            <h5 class="card-title">Clothes</h5>
            <p class="card-text text-left">Clothes</p>
          </div>
        </div> 
        
        {/*religion*/}
        <div class=" card m-2">
            <h5 class="card-header">Religion</h5>
          <div class="card-body">
            <h5 class="card-title">Religion</h5>
            <p class="card-text text-left">Relgion</p>
          </div>
        </div> 
        
        {/*music*/}
        <div class=" card m-2">
            <h5 class="card-header">Music</h5>
          <div class="card-body">
            <h5 class="card-title">Music</h5>
            <p class="card-text text-left">music</p>
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
                        <p class="card-text text-left">{this.state.newsData.title}</p>
                        <a class="btn btn-outline-danger" href={this.state.newsData.url}>
                            Read More
                        </a>
                    </div>
                </div>
          </div>
        </div> 
        
        {/*Common Practices*/}
        <div class=" card m-2">
            <h5 class="card-header">Common Practices</h5>
          <div class="card-body">
            <h5 class="card-title">Taboo things</h5>
            <p class="card-text text-left">[text]</p>
          </div>
        </div> 
        
        {/*taboo things*/}
        <div class=" card m-2">
            <h5 class="card-header">Cultural Taboos</h5>
          <div class="card-body">
            <h5 class="card-title">Taboo things</h5>
            <p class="card-text text-left">[text]</p>
          </div>
        </div> 
        
        {/*popular spots*/}
        <div class=" card m-2">
             <h5 class="card-header">Sports</h5>           
          <div class="card-body">
            <h5 class="card-title">Sports</h5>
            <p class="card-text text-left">[text]</p>
          </div>
        </div> 
        
        {/*interesting history*/}
        <div class=" card m-2">
            <h5 class="card-header">Historical Locations</h5>
          <div class="card-body">
            <h5 class="card-title">History</h5>
                        <p class="card-text text-left">{this.state.placeData.name}</p>
                        <img class="card-img-top" src={this.state.generalImgData.location} alt="Card image cap" />
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