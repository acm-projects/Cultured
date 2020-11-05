import React from 'react';

//renders a group into a row

class CountryCol extends React.Component {
    //Renders column
    render() {
        return (
            <div className="col-md p-2 m-2">
              {this.props.elements}
                </div>
            );
    }
}

export default CountryCol;

