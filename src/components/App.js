import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from './PigPen'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs
  }

  sortHogsByName = () => {
    let newHogsArray = [...this.state.hogs]

    newHogsArray.sort((a,b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })

    this.setState({
      hogs: newHogsArray
    })
  }

  sortHogsByWeight = () => {
    let newHogsArray = [...this.state.hogs]
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    newHogsArray.sort((a,b) => {
      if (a[weight] < b[weight])
        return -1;
      if (a[weight] > b[weight])
        return 1;
      return 0;
    })

    this.setState({
      hogs: newHogsArray
    })
  }

  filterHogsByGrease = () => {
    let newHogsArray = [...this.state.hogs].filter((hog) => {
      return hog.greased === true
    })

    this.setState({
      hogs: newHogsArray
    })
  }

  hideHog = (hogIndex) => {
  let newHogsArray = [...this.state.hogs].splice(hogIndex)
  debugger
  // this.setState({
  //   hogs:
  // })

  }


  render() {
    return (
      <div className="App">
        < Nav />
        <div className="filterButtonContainer">
          <button onClick={this.sortHogsByName}>Sort Hogs by Name</button>
          <button onClick={this.sortHogsByWeight}>Sort Hogs by Weight</button>
          <button onClick={this.filterHogsByGrease}>Filter Hogs by Grease!</button>
        </div>
        < PigPen hideHog={this.hideHog} hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
