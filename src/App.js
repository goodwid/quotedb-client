import React, { Component } from 'react';
import './App.css';

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
          {this.state.quotes.map(item => <DisplayQuote key={item._id} data={item}/>)}
        </div>
      </div>
    );
  }
}

function DisplayQuote(props) {
  return <div>
    {props.data.data.split('\n').map((el, key) => <span key={key}>{el}<br/></span>)}
  </div>
}

export default App;

// return <li key={item._id}>
//               { 
//                 item.data
//                 .split('\n')
//                 .map(el => <span>{el}<br/></span>)
//               }
//             </li>