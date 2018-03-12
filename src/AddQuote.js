import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  handleDataChange(e) {
    let newQuote = this.state.quote;
    newQuote.data = e.target.value;
    this.setState({quote: newQuote})
  }
  handleMovieChange(e) {
    let newQuote = this.state.quote;
    newQuote.movie = e.target.value;
    this.setState({quote: newQuote})
  }
  submitData() {
    ReactDOM.findDOMNode(this).style.display = 'none';
    let body = JSON.stringify(this.state.quote);
    let options = {
      method: 'POST',
      body,
      headers: new Headers({
        'Content-Type':'application/json'
      })
    };
    fetch('http://localhost:9000/api/quotedb/v1/quotes/', options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  render() {
    let style = this.props.show ? {} : {display: 'none'};
    return <div style={style}>
    <textarea refs="data" onChange={this.handleDataChange}/><br/>
    <input refs="movie" onChange={this.handleMovieChange}/><br/>
    <button onClick={this.submitData}>Submit Changes</button>
  </div>
  }
}

export default AddQuote