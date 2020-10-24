import React from 'react';

class CountryHeader extends React.Component {
    render() {
        return (
            <div className="continent pt-4">
            <h5>{this.props.country.location}</h5>
            </div>
        );
    }
}

export default CountryHeader;