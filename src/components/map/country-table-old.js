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
                    <CountryHeader className="col-md p-2 m-2" country={country} key={this.props.countries.location} />
                );
            }
            rows.push(
                <CountryName country={country} key={country.countryName}/>
            );
            lastCategory = country.location;
        });
        return (
            
            
            <div>
                    <div className="container bg-white">
        
            <div className="row">
        
                {/*Form Block FIXME not centered in mobile*/}
                <div className="col-md mt-5">
                    <form class="form-inline">
                      <div class="form-inline mx-sm-3 mb-2">
                        <label for="countryInput" class="sr-only">Search Country by Name</label>
                        <input type="plain-text" class="form-control" id="countryInput" placeholder="Search Country by Name"></input>
                                <div id="countrysearch" class="form-text text-muted">Just type a country name to search our site!</div>
                      </div>
                        {/*FIXME: might be redundant, also not centered
                        <button type="submit" class="btn btn-danger mb-2 mx-sm-3">Search</button>*/}
                    </form>
                </div>
                            <div className="col-md p-2 m-2">
                    <tbody>{rows}</tbody>
                </div>
            
                <tbody>{rows}</tbody>
        
                {/*Countries FIXME make this functional*/}
                <div className="col-md p-2 m-2">
                    <h5>North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Not North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Or Is It North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                </div>
                <div className="col-md p-2 m-2">
                    <h5>Nah it is not North America</h5>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
                    <div class="btn btn-outline-danger m-1">Country</div>
            <tbody>{rows}</tbody>
            <table>
                    <thead>
                        <tr>
                            <th>Countries</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                </div>
            </div>
        </div>
                
            </div>
        );
    }
}

export default CountryTable;
