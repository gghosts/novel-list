import { render } from "@testing-library/react";
import React from "react";
const cors = require('cors');

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSearchTerms: "",
      bookSearchReturnValues: [],
    };
  }

  useBookSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      bookSearchReturnValues: [],
    });

    const pointerToThis = this;
    var url = "http://openlibrary.org/search/";
    var params = {
      action: "query",
      list: "search",
      srsearch: this.state.bookSearchTerms,
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        //console.log(reponse);
        for (var key in response.query.search) {
        }
      });
  };

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
            value={this.state.bookSearchTerms || ""}
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
