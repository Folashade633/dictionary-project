import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1 className="Dictionary-header">DICTIONARY</h1>
      <h4>What word would you like to look up?</h4>
      <form onSubmit={search}>
        <div>
          <span className="fa fa-search form-control-search"></span>
          <input
            type="Search"
            onChange={handleKeywordChange}
            className="form-control"
            placeholder="Search for a word here"
          />
        </div>
      </form>

      <Results results={results} />
    </div>
  );
}
