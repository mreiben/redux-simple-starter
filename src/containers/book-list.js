import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
//function takes in the state for the entire application. takes in a state
//from redux and returns an object.
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on
// the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to
  // all of our reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch)
}

//this connect function takes a function (mapStateToProps) and a Component
//(BookList) and creates a container.  Container is aware of the state
//contained by redux
//also promotes BookList from a component to a container - it  needs to know
//about this new dispatch method, selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
