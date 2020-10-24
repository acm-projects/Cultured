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
                <a class="btn btn-outline-danger m-1" onClick={this.handleClick} role="button">
                    {this.props.country.countryName}
                </a>
            );
    }
}

export default CountryName;