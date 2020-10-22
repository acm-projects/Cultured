import React from 'react';
import SearchBar from './search-bar'
import CountryTable from './country-table'
import MapChart from "./map-chart";

class SearchableCountryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '' };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange} />
                <MapChart filterText={this.state.filterText} countries={this.props.countries} />
                <CountryTable filterText={this.state.filterText} countries={this.props.countries} />

            </div>
        );
    }
}

export default SearchableCountryTable;