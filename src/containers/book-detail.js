import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render(){
      if (!this.props.activeBook) {
        return <div> DO NOT HAVE BOOK SELECTED YET </div>
      }
      return (
        <div>
          <h1>{this.props.activeBook.title}</h1>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);