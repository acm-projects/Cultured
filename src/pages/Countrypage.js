import React from 'react'

class countryPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newsData: { title: null, url: null },
            recipeData: { image: null, sourceurl: null },
            imgData: { flag: null },
            geoData: {lat: null, lon: null},
            placeData: {name: null}
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
        var search = this.state.newsData.title;
        let response = await fetch('http://localhost:5000/imgAPI/' + search)
            .then(body => body.json())
            .then(body => {
                this.setState({ imgData: { flag:  body.data.value[0].url} })
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callGeoAPI = async (capitol) => {

        let response = await fetch('http://localhost:5000/geoAPI/' + capitol)
            .then(body => body.json())
            .then(body => {
                this.setState({ geoData: { lat: body.data.lat, lon: body.data.lon } })
                this.callPlaceAPI()
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    callPlaceAPI = async () => {
        var lat = this.state.geoData.lat, lon = this.state.geoData.lon;
        let response = await fetch('http://localhost:5000/placeAPI/' + lat + "/" + lon)
            .then(body => body.json())
            .then(body => {
                this.setState({ placeData: { name: body.data[0].name } })
            })
        // if (response.status !== 200) throw Error(body.message);

    };
    componentDidMount() {

        this.callNewsAPI("japan")
              .catch(err => console.log(err));

         this.callRecipeAPI("chinese")
            .catch(err => console.log(err));

         this.callGeoAPI("paris")
              .catch(err => console.log(err))
      }
  
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
                <h5 class="card-title">Country Title</h5>
                <p class="card-text">Hello from Country</p>
              </div>
            </div>
          </div>
        
        
        <div class="col-lg-4">
            <div class="row">
        
        {/*flag*/}
        <div class="col-6 col-2-md">
            <div class=" card m-2">
              <div class="card-body">
                 <img class="card-img-top" src={this.state.imgData.flag} alt="Card image cap"/>
              </div>
            </div>
        </div>
        
        {/*Time*/}
        <div class="col-6 col-2-md">
            <div class=" card m-2">
              <div class="card-body">
                <h5 class="card-title">Time</h5>
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
          <div class="card-body">
            <h5 class="card-title">Fast Facts</h5>
            <p class="card-text">[facts]</p>
          </div>
        </div> 
        
        {/*food*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Food</h5>
               <p class="card-text">{this.state.recipeData.sourceurl}</p>
          </div>
        </div> 
        
        {/*clothing*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Clothes</h5>
            <p class="card-text">Clothes</p>
          </div>
        </div> 
        
        {/*religion*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Religion</h5>
            <p class="card-text">Relgion</p>
          </div>
        </div> 
        
        {/*music*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Music</h5>
            <p class="card-text">music</p>
          </div>
        </div> 
        
        {/*news*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">News</h5>
            <p class="card-text">{this.state.newsData.title}</p>
          </div>
        </div> 
        
        {/*taboo things*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Taboo things</h5>
            <p class="card-text">[text]</p>
          </div>
        </div> 
        
        {/*popular spots*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">Sports</h5>
            <p class="card-text">[text]</p>
          </div>
        </div> 
        
        {/*interesting history*/}
        <div class=" card m-2">
          <div class="card-body">
            <h5 class="card-title">History</h5>
            <p class="card-text">{this.state.placeData.name}</p>
          </div>
        </div> 
        
    </div>
        
        
    {/*buttons*/}
    <div class="row m-0 mt-4">
        {/*previous button*/}
        <div class="col-6">
            <div class="btn btn-outline-light">
                <h3>Previous</h3>
            </div>
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