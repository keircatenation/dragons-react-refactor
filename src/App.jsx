import React from 'react'
import { useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Timer from './components/Timer'
import './App.css'
import { themes, dragonTypes } from './assets/data'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      dragons:[]
    }
    this.setDragons = this.setDragons.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  setDragons(newDragon) {
    let newDragons = [...this.state.dragons, newDragon]
    this.setState( prev => ( {...prev, dragons: newDragons} ) )
  }
  setTheme(theme) {
    this.setState( prev => ({...prev, theme: theme}) )
  }
  render() {
    return (
      <>
        <header className={this.state.theme}>
          Header!
          <Timer />
          <select name='theme' id='theme-select' onChange={event => this.setTheme(event.target.value)}>
            {
              themes.map((themeSelection, index) => {
                return (
                  <option value={themeSelection} key={themeSelection + index}>{themeSelection}</option>
                )
              })
            }
          </select>
        </header>
        <Main theme={this.state.theme} dragons={this.state.dragons} />
        <Sidebar theme={this.state.theme} setDragons={this.setDragons} />
        <Footer theme={this.state.theme} />
      </>
    )
  }
}

export default App
