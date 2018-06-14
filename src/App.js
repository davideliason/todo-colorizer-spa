import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Colorizer from './Colorizer';
import ToDo from './ToDo';

const Book = ({match}) => {
   return (
      <div>
        <p>{ match.params.bookID}</p>
      </div>
    );
}

const Books = ({match}) => {
  return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/scifi`}>scifi</Link>
          </li>
          <li>
            <Link to={`${match.url}/mystery`}>mystery</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:bookID`} component={Book} />
      </div>  
    );
}


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
        <li style={itemStyle}>
          <Link to="/books" component={Books}>Books</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/colorizer" component={Colorizer} />
      <Route path="/todo" component={ToDo} />
      <Route path="/books" component={Books} />
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