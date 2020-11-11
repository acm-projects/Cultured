import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
                <div>
        
        {/*navbar container*/}
        <nav class="navbar navbar-expand-lg bg-danger fixed-top">
        
            {/*FIXME: expand button is missing*/}
        
            {/*logo*/}
            <a class="navbar-brand logo text-dark" href="/">CULTURED</a>
        
            {/*collapsed navbar button*/}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/*FIXME: we could totally add a button here for country name on country page*/}

            {/*collabsible class*/}
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                {/*other buttons*/}
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0 pr-5">
                    {/*random button*/}
                  <a class="nav-item btn btn-outline-light btn-" href="/Brazil">
                    Visit Random
                  </a>
                </ul>
                {/*search bar
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>*/}

            </div>
        
        </nav>
</div>
        );

    }
    
}

export default Navbar;