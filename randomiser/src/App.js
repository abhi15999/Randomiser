import React, { Component } from 'react'
import Navbar1 from './components/Navbar1';
// import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Body from './components/Body'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        {/* <Buttons/> */}
        <Body/>
        <Footer/>
      </div>
    )
  }
}
