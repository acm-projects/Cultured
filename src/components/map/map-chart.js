import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Sphere,
    ZoomableGroup
} from "react-simple-maps";

import './map.css';

//Map URL
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
//Array of country codes for highlighted countries
let highlighted = [
    ""
];


class MapChart extends React.Component {
    render() {
        //If country name conflicts with search, remove it from highlighted, else add it to highlighted
        this.props.countries.forEach((country) => {
            if (country.countryName.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                highlighted = highlighted.filter(code => code !== country.countryCode);
            }
            else {
                highlighted.push(country.countryCode);
            }
        });
        return (
            //See react simple maps for documentation
            //<svg width="500" height="700" viewbox="0 0 1200 675" transform="translate(0 -0)">
            //width="1000" height="700" viewbox="0 0 0 0" transform="translate(0 -0)">
                <ComposableMap 
            projectionConfig={{ rotate: [-10, 0, 0], scale: 100}}
            width="600" height="300" className="worldMap"
            >
                    <Sphere stroke="#DDD" />
                    <Graticule stroke="#DDD" />
                    <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const isHighlighted =
                                    highlighted.indexOf(geo.properties.ISO_A3) !== -1;
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isHighlighted ? "#eb3636" : "#adaaa6"}
                                        onClick={() => console.log(geo.properties.ISO_A3)}
                                    />
                                );
                            })
                        }
                        </Geographies>
                    </ComposableMap>
              
        );
    };
}


export default MapChart;
