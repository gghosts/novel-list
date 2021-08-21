import { render } from "@testing-library/react";
import React from "react";

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSearchTerms: "",
    };
  }

  useBookSearchEngine = () => {};

  changebookSearchTerms = (e) => {
    this.setState({
      bookSearchTerms: e.target.value,
    });
  };

  render() {
    let bookSearchResults = [];
    return (
      <div className="BookSearch">
        <h4>Search for books or authors for inspiration</h4>
        <form action="">
          <input
            type="text"
            value=""
            onChange={this.changebookSearchTerms}
            placeholder="Search books or authors for inspiration"
          />
          <button type="submit" onClick={this.useBookSearchEngine}>
            Discover
          </button>
        </form>
        {bookSearchResults}
      </div>
    );
  }
}

export default BookSearch;
