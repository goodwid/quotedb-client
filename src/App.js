import React, { Component } from 'react';
import './App.css';
import DisplayQuote from './DisplayQuote';
import AddQuote from './AddQuote';
import qs from './quoteServer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      showAddQuote: false
    };
    this.onAddClick = this.onAddClick.bind(this);
  }
  componentDidMount() {
    qs.getAll()
      .then(data => {
        let quotes = data;
        this.setState({quotes});
      });
  }
  onAddClick() {
    this.setState({
      showAddQuote: !this.state.showAddQuote
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>Quotes are here: </p>
          {this.state.quotes.map(item => <DisplayQuote key={item._id} quote={item}/>)}
        </div>
        <button onClick={this.onAddClick}>Add Quote</button>
        <AddQuote show={this.state.showAddQuote}/>
      </div>
    );
  }
}

export default App;
