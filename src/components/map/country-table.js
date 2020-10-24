import React from 'react';
import CountryName from './country-name'
import CountryHeader from './country-header'
import CountryCol from './country-col'
class CountryTable extends React.Component {
    //Render country name if it doesn't conflict with search and category if it isn't the same as the last category
    render() {
        const filterText = this.props.filterText;
        const rows = [];
        var section = [];
        let lastCategory = null;
        //for each country, places into rows
        this.props.countries.forEach((country) => {
            //
            if (country.countryName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                //rows.push(<CountryCol row={section}/>);
                return;
            }
            //if the current location is not the last location
            if (country.location !== lastCategory ) {
                //if there is a section to add to the row
                if (section.length > 0)
                    //add the section
                    rows.push(<CountryCol elements={section} />);   //adds column to list
                section = [];       //clear section array
                section.push(       //push header
                    <CountryHeader country={country} key={this.props.countries.location} />
                );
            }
            //push country to section
            section.push(
                <CountryName country={country} key={country.countryName}/>
            );
            //'iterates' last category
            lastCategory = country.location;
        });
        rows.push(<CountryCol elements={section} />);   //adds column to list
                  //cleans up row collection to catch last row
        
        return (
            
    <div>
                                    
        <div className="container bg-light">                         
            <div className="row">
              {rows}
            </div>
        
        </div>
    </div>
        );
    }
}

export default CountryTable;
