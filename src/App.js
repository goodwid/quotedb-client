import React, { Component } from 'react';
import './App.css';
import DisplayQuote from './DisplayQuote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/quotedb/v1/quotes')
      .then(results => results.json())
      .then(data => {
        let quotes = data;
        this.setState({quotes});
      });
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>Quotes are here: </p>
          {this.state.quotes.map(item => <DisplayQuote key={item._id} quote={item}/>)}
        </div>
      </div>
    );
  }
}

export default App;
