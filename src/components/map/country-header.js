import React from 'react';

class CountryHeader extends React.Component {
    render() {
        return (
            <div className="continent">
                <tr>
                    <th colSpan="1">
                        {this.props.country.location}
                    </th>
                </tr>
            </div>
        );
    }
}

export default CountryHeader;