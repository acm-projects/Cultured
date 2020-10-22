//this one exists for debugging by tearing a component apart

import React from 'react'

class countryTrash extends React.Component{
  constructor(props){
    super(props);
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
                <img class="card-img-top" src="..." alt="Card image cap"/>
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
            <p class="card-text">Food</p>
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
            <p class="card-text">news</p>
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
            <p class="card-text">[text]</p>
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

export default countryTrash