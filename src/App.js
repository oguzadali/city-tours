import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar'
import TourList from './components/tourlist/TourList'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <TourList></TourList>
      </React.Fragment>
    )
  }
}
