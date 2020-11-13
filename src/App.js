import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import About from './about/About'
import Home from './home/Home'
import Work from './work/Work'
import Header from './header/Header'

function App() {
  return (
    <Router>
      <div className='headerCss'>
        <Header />
      </div>
      <div className='bodyCss'>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
