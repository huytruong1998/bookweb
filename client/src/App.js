import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    </Router>
  );
}

export default App;
