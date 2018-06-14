import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Colorizer from './Colorizer';
import ToDo from './ToDo';

const StarWarsItem = ({match}) => {
   return (
      <div>
        <p>{ match.params.starwarsID}</p>
      </div>
    );
}

const StarWars = ({match}) => {
  return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/Characters`}>Characters</Link>
          </li>
          <li>
            <Link to={`${match.url}/Ships`}>Ships</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:starwarsID`} component={StarWarsItem} />
      </div>  
    );
}


const App = () => (
  <Router>
    <div>
      <ul style={styles.listStyle, styles.navStyle}>
        <li style={styles.itemStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={styles.itemStyle}>
          <Link to="/colorizer">Colorizer</Link>
        </li>
        <li style={styles.itemStyle}>
          <Link to="/todo">ToDo</Link>
        </li>
        <li style={styles.itemStyle}>
          <Link to="/starwars" component={StarWars}>StarWars</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/colorizer" component={Colorizer} />
      <Route path="/todo" component={ToDo} />
      <Route path="/starwars" component={StarWars} />
    </div>
  </Router>
  )

const styles = {
  navStyle : {
  backgroundColor: "yellow",
  padding: 20,
  margin: 0
   },
  listStyle : {
     listStyleType: "none"
   }, 
   itemStyle : {
      display: "inline",
      padding: 20
    },
  
}

export default App;