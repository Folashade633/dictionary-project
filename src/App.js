import logo from "./logo.svg";
import icon from "./icon.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={icon} className="icon" alt="Dictionary-icon" />
        </header>
        <main>
          <Dictionary defaultKeyword="peace" />
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
            <a
              href="https://www.linkedin.com/in/folashade-joachim-9822a089/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              by Folashade Joachim{" "}
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
