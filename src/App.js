import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './Components/Form/Form'

class App extends Component {
  state = {
  }

async getData() {
  let url = 'https://jobs.github.com/positions.json?description=python&location=new+york';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        datos: data
      })
    }
  )
  .catch(error => {
      console.log(error)
  })
}


componentDidMount () {

  this.getData();
}

  render () {
    return (
      <BrowserRouter >
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

export default App;

