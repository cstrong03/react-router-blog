import React, { Component } from 'react';
import './App.css';
import About from './components/About'
import Homepage from './components/Homepage'
import FavoriteFood from './components/FavoriteFood'
import FavoriteMovie from './components/FavoriteMovie'
import MainBlog from './components/MainBlog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class App extends Component{
  render(){
    return(
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/favoritefood">FavoriteFood</Link>
              </li>
              <li>
                <Link to="/favoritemovie">FavoriteMovie</Link>
              </li>
              <li>
                <Link to="/mainblog">MainBlog</Link>
              </li>
              <li>
                <Link to="/">Homepage</Link>
              </li>
            </ul>

            <hr />


            <Route path="/about" component={About} />
            <Route path="/favoritefood" component={FavoriteFood} />
            <Route path="/favoritemovie" component={FavoriteMovie} />
            <Route exact path="/" component={Homepage} />
            <Route path="/mainblog" component={MainBlog} />

          </div>
        </Router>

    )
  }
}

export default App
