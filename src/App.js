import React from "react";
import "@atlaskit/css-reset";
import Header from "./Header";
import Footer from "./Footer";
import MoreResources from "./MoreResources";
import RegionalMap from "./RegionalMap";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Tracker from "./Tracker";

// import App from "./App";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <div className="nav-links">
          <Link to="/tracker">Tracker</Link>
          <Link to="/regionalmap">Map your Zone</Link>
          <Link to="/moreresources">More Resources</Link>
        </div>
        <div>
          <Router>
            <Route path="/tracker" component={Tracker} />
            <Route exact path="/" component={Tracker} />
            <Route path="/moreresources" component={MoreResources} />
            <Route path="/regionalmap" component={RegionalMap} />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
