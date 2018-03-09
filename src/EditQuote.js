import React, { Component } from 'react';

class EditQuote extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props)
    this.state = {
      show: props.show,
      quote: props.data
    };
    console.log('state: ', this.state)
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  handleDataChange(e) {
    let newQuote = this.state.quote;
    newQuote.data = e.target.value;
    this.setState({quote: newQuote})
    console.log('handledChange:', this.state.quote);
  }
  handleMovieChange(e) {
    let newQuote = this.state.quote;
    newQuote.movie = e.target.value;
    this.setState({quote: newQuote})
    console.log('handlemChange:', this.state.quote);
  }
  submitData() {
    this.setState({show: false});
    console.log('Submit Data:' ,this.state.quote);
  }
  render() {
    let quote = this.state.quote;
    if (this.props.show || this.state.show)
      return <div>
        <textarea refs="data" defaultValue={quote.data} onChange={this.handleDataChange}/><br/>
        <input refs="movie" defaultValue={quote.movie} onChange={this.handleMovieChange}/><br/>
        <button onClick={this.submitData}>Submit Changes</button>
      </div>
    else return <div></div>
  }
}

export default EditQuote;