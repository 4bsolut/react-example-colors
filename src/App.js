import "./styles.css";
import { useState } from "react";

export default function App(props) {
  const [color, updateColor] = useState("background:#000");
  const setColor = (ev) => {
    updateColor(ev.target.value);
  };
  return (
    <div className="App">
      <main Style={color}></main>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s4">
              <button
                onClick={setColor}
                value="background:#c62828"
                Style="background:#c62828;width:100%"
                className="waves-effect waves-light btn-large"
              >
                &nbsp;
              </button>
            </div>
            <div className="col s4">
              <button
                onClick={setColor}
                value="background:#6a1b9a"
                Style="background:#6a1b9a;width:100%"
                className="waves-effect waves-light btn-large"
              >
                &nbsp;
              </button>
            </div>
            <div className="col s4">
              <button
                onClick={setColor}
                value="background:#c5cae9"
                Style="background:#c5cae9;width:100%"
                className="waves-effect waves-light btn-large"
              >
                &nbsp;
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
