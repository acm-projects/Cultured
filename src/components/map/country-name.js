import React from 'react';


class CountryName extends React.Component {
    //On button click, if country page is defined go to page
    handleClick = () => {
        if (this.props.country.countryPage !== undefined) {
            window.location.href = this.props.country.countryPage;
        }
       
    }
    //Renders button with country name in it
    render() {
        return (
            <div>
                <button className="countrySearchName" onClick={this.handleClick}>{this.props.country.countryName}</button>
            </div>
            );
    }
}

export default CountryName;