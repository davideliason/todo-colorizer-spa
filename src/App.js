import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Colorizer from './Colorizer';
import ToDo from './ToDo';


const App = () => (
  <Router>
    <div>
      <ul style={listStyle,navStyle}>
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


      <Route exact path="/" component={Home} />
      <Route path="/colorizer" component={Colorizer} />
      <Route path="/todo" component={ToDo} />
    </div>
  </Router>
  )
const navStyle = {
  backgroundColor: "yellow",
  padding: 20
}

const listStyle = {
  listStyleType: "none"
}

const itemStyle = {
  display: "inline",
  padding: 20
}



export default App;