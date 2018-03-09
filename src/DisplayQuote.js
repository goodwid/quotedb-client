import React, { Component } from 'react';
import EditQuote from './EditQuote';

class DisplayQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      showComponent: !this.state.showComponent
    });
  }
  render() {
    return <div>
      <button onClick={this.onButtonClick}>Edit</button>
      <EditQuote show={this.state.showComponent} data={this.props.quote}/>
     {this.props.quote.data.split('\n').map((el, key) => <span key={key}>{el}<br/></span>)}
   </div>
  }
}

export default DisplayQuote;