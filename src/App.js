import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
      <HashRouter basename='./'>
          <div>
              <p>There we are</p>
          </div>
      </HashRouter>
  );
}

export default App;
