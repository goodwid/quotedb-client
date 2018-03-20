import React, { Component } from 'react';
import EditQuote from './EditQuote';
import './DisplayQuote.css';


class DisplayQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditQuote: false
    };
    this.onEditClick = this.onEditClick.bind(this);
    
  }
  onEditClick() {
    this.setState({
      showEditQuote: !this.state.showEditQuote
    });
  }
 
  render() {
    return (
    <div className="quote">
      <div>
        {this.props.quote.data.split('\n').map((el, key) => <span key={key}>{el}<br/></span>)}
        <button className="quoteButton" onClick={this.onEditClick}>Edit</button>
      </div>
      <EditQuote refs={this.props.quote._id} show={this.state.showEditQuote} data={this.props.quote}/>
      <hr/>
    </div> 
    )
  }
}

export default DisplayQuote;