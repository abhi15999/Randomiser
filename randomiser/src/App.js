import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Buttons/>
      </div>
    )
  }
}
