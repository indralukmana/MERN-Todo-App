import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
          <h2>MERN Todo App</h2>
        </div>
      </Router>
    );
  }
}

export default App;
