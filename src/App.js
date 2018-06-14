import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={itemStyle}>
          <Link to="/colorizer">Colorizer</Link>
        </li>
        <li style={itemStyle}>
          <Link to="/todo">ToDo</Link>
        </li>
      </ul>
    </div>
  </Router>
  )

const listStyle = {
  listStyleType: "none"
}

const itemStyle = {
  display: "inline",
  padding: 20
}

export default App;