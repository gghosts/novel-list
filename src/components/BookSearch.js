import { render } from "@testing-library/react";
import React from "react";

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
    var url = "http://openlibrary.org/search.json?q=${bookSearchTerms}";
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
        //console.log(response.query.search[0].title);
        for (var key in response.query.search) {
          pointerToThis.state.bookSearchReturnValues.push({
            queryResultPageFullURL: 'no link',
            queryResultBookTitle: response.query.search[key].title,
            queryResultBookAuthor: response.query.search[key].author,
            queryResultBookSubject: response.query.search[key].subject,
          });
        }
      })
        .then(
          function (response) {
            for(var key2 in pointerToThis.state.bookSearchReturnValues) {
              let title = pointerToThis.state.bookSearchReturnValues[key2];
              let pageID = page.queryResultpageTitle;
              let urlForRetrievingPageTitleURLByPageTitle = "http://openlibrary.org/search.json?q={bookSearchTerms}";

              fetch(urlForRetrievingPageTitleURLByPageTitle)
              .then (
                function (response) {
                  return response.json();
                }
              )
                .then (
                  function (response) {
                    page.queryResultPageFullURL = response.query.title[pagetitle].fullurl;

                    pointerToThis.forceUpdate();
                  }

                )
            }
          }
        )
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
