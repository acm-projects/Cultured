import React from 'react';

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI = async () => {
        const response = await fetch('http://localhost:7000/newsAPI');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
};
    componentDidMount() {
        this.callAPI()
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => console.log(err));
    }
render(){
  return (
      <div className="">
          <h1>Country Page</h1>
          <p>{this.state.apiResponse}</p>
    </div>
  );
}
}


export default ApiCall;