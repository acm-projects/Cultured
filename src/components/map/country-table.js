import React from 'react';
import CountryName from './country-name'
import CountryHeader from './country-header'
class CountryTable extends React.Component {
    //Render country name if it doesn't conflict with search and category if it isn't the same as the last category
    render() {
        const filterText = this.props.filterText;
        const rows = [];
        let lastCategory = null;
        this.props.countries.forEach((country) => {
            if (country.countryName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (country.location !== lastCategory) {
                rows.push(
                    <CountryHeader country={country} key={this.props.countries.location} />
                );
            }
            rows.push(
                <CountryName country={country} key={country.countryName}/>
            );
            lastCategory = country.location;
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Countries</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default CountryTable;
