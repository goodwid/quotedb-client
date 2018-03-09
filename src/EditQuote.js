import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EditQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      quote: props.data
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.deleteData = this.deleteData.bind(this);
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
    let id = this.state.quote._id;
    let body = JSON.stringify(this.state.quote);
    let options = {
      method: 'PUT',
      body,
      headers: new Headers({
        'Content-Type':'application/json'
      })
    };
    fetch(`http://localhost:9000/api/quotedb/v1/quotes/${id}`, options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  deleteData() {
    ReactDOM.findDOMNode(this).style.display = 'none';
    let id = this.state.quote._id;
    let options = {
      method: 'DELETE'
    };
    fetch(`http://localhost:9000/api/quotedb/v1/quotes/${id}`, options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    let quote = this.state.quote;
    let style = this.props.show ? {} : {display: 'none'};
    return <div style={style}>
      <textarea refs="data" defaultValue={quote.data} onChange={this.handleDataChange}/><br/>
      <input refs="movie" defaultValue={quote.movie} onChange={this.handleMovieChange}/><br/>
      <button onClick={this.submitData}>Submit Changes</button>
      <button onClick={this.deleteData}>Delete entry</button>
    </div>
  }
}

export default EditQuote;