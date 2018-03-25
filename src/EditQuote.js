import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './EditQuote.css';
import qs from './quoteServer.js';

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
    qs.edit(this.state.quite._id, this.state.quote)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  deleteData() {
    ReactDOM.findDOMNode(this).style.display = 'none';
    qs.delete(this.state.quote._id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    let quote = this.state.quote;
    let style = this.props.show ? {} : {display: 'none'};
    return <div style={style}>
      <span className="label">Quote data: </span><textarea className="edittext" refs="data" defaultValue={quote.data} onChange={this.handleDataChange}/><br/>
      <span className="label">Movie: </span><input refs="movie" defaultValue={quote.movie} onChange={this.handleMovieChange}/><br/>
      <button onClick={this.submitData}>Submit Changes</button>
      <button onClick={this.deleteData}>Delete entry</button>
    </div>
  }
}

export default EditQuote;