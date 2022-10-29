import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What word would you like to look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <span className="fa fa-search form-control-search"></span>
              <input
                type="Search"
                onChange={handleKeywordChange}
                className="form-control"
                placeholder="Search for a word here"
                defaultValue={props.defaultKeyword}
                autoFocus={true}
              />
            </div>
          </form>
          <div className="hint">
            {" "}
            suggested words: love, peace, victory, bold, courage....
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
