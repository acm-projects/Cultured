import React, { Component } from 'react';
//import './App.css';
import SearchableCountryTable from './searchable-country-table'


class Map extends Component {
    render() {
        //https://www.worldatlas.com/countries
        const COUNTRIES = [{ location: "North America", countryName: "USA", countryCode: "USA", countryPage: "https://en.wikipedia.org/wiki/United_States" },
            , { location: "North America", countryName: "Canada", countryCode: "CAN", countryPage: "https://en.wikipedia.org/wiki/Canada" }
            , { location: "North America", countryName: "Mexico", countryCode: "MEX", countryPage: "https://en.wikipedia.org/wiki/Mexico" }
            , { location: "Africa", countryName: "Nigeria", countryCode: "NGA", countryPage: "https://en.wikipedia.org/wiki/Nigeria" }
            , { location: "Africa", countryName: "Uganda", countryCode: "UGA", countryPage: "https://en.wikipedia.org/wiki/Uganda" }
            , { location: "South America", countryName: "Brazil", countryCode: "BRA", countryPage: "https://en.wikipedia.org/wiki/Brazil" }
            , { location: "Europe", countryName: "Romania", countryCode: "ROU", countryPage: "https://en.wikipedia.org/wiki/Romania"}
            , {location: "Asia", countryName: "Japan", countryCode: "JPN", countryPage: "https://en.wikipedia.org/wiki/Japan"}];
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <div id="colorlib-main">
                        <SearchableCountryTable countries={COUNTRIES} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;