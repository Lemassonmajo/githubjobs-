import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'

class App extends Component {
  state = {
    description : "",
    location : "",
    fullTime : false,
    dataArray : [],
    uniqueLocations : []
  }
  getData() {
    let url = `https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}&full_time=${this.state.fullTime}&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(newdata => {
        let totalData = []
        if (newdata.length === 50) {
          newdata.forEach(element => {
            totalData.push(element)
          });
          var pageIndex = 2
          this.extradata(totalData, pageIndex)
        }
        //we set the state here so the user has already information to work with
        this.setState({
          data: newdata
        })
      }
    )
    .catch(error => {
        console.log(error)
    })
  }

  extradata(totalData, pageIndex) {
    let url = `https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}&full_time=${this.state.fullTime}&page=${pageIndex}`;
    pageIndex += 1
    fetch(url)
      .then(response => response.json())
      .then(newdata => {
        newdata.forEach(element => {
          totalData.push(element)
        });
        if (newdata.length === 50) {
          this.extradata(totalData, pageIndex)
        }
        else {
          this.setState({
            data: totalData
          })
          this.getLocationList(totalData)
        }
      }
    )
    .catch(error => {
        console.log(error)
    })
  }



  componentDidMount () {
    this.getData();
  }

  filterData = (data) => {
    this.setState({
      description : data.description,
      location : data.location,
      fullTime : data.fullTime 
    }, () => {
      this.getData()
    })
  }

  getLocationList(data) {
    let locations = []
    data.forEach(element => {
        locations.push(element.location)
    });
    let uniqueLocations = Array.from(new Set(locations))
    this.setState({uniqueLocations})
  }
  
  render () {
    return (
      <BrowserRouter >
          <Switch>
            <Route path="/">
              <Home
                filterData={this.filterData}
                data={this.state.data}
                uniqueLocations={this.state.uniqueLocations}
              />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

