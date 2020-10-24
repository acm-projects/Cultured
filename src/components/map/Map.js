import React, { Component } from 'react';
//import './App.css';
import SearchableCountryTable from './searchable-country-table'
import COUNTRIES from './map-constants'

class Map extends Component {
    render() {
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