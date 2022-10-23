import logo from "./logo.svg";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <img src={logo} className="React-logo" alt="logo" />
          <span>
            <a
              href="https://github.com/Folashade633/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              {" "}
              Open-source code{" "}
            </a>{" "}
            by {""}
            <a
              href="https://www.linkedin.com/in/folashade-joachim-9822a089/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              Folashade Joachim{" "}
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
