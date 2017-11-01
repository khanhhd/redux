import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={()=>this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// returned valued will become props of container
function mapDispatchToProps(dispatch) {
  // pass aciton to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);