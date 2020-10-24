import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render() {
        return (
        <div  className="container align-center text-center">
            <div className="text-light">
                Type the name of a particular country, or hit the Visit Random button to get started!
                <div>
                <div className="row">
                    <div className="col-md"/>
                        <div className="col col-md-6">
                            <form>
                              <div class="form-group">
                                <label></label>
                                <input type="text" class="form-control" placeholder="Search Country by Name" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                              </div>
                            </form>
                        </div>
                        <div className="col-md"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SearchBar;
