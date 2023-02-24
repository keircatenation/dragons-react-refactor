import { Component } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Timer from './components/Timer'
import './App.css'
import { themes } from './assets/data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      dragons: []
    }
    this.setDragons = this.setDragons.bind(this)
    this.handleThemeChange = this.handleThemeChange.bind(this)
  }
  setDragons(newDragon) {
    let newDragons = [...this.state.dragons, newDragon]
    this.setState( prev => {
      return ({
        ...prev,
        dragons: newDragons
      })
    } )
  }
  handleThemeChange(value) {
    this.setState( prev => ( {
      ...prev,
      theme: value
    } ) )
  }
  render() {
    return (
      <>
        <header className={this.state.theme}>
          Header!
          <Timer />
          <select name='theme' id='theme-select' onChange={event => this.handleThemeChange(event.target.value)}>
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


// function App() {
//   const [theme, setTheme] = useState(themes[0])
//   const [dragons, setDragons] = useState([]);

//   function handleThemeChange(val) {
//     setTheme(val);
//   }
//   return (
//     <>
//       <header className={theme}>
//         Header!
//         <Timer />
//         <select name='theme' id='theme-select' onChange={event => handleThemeChange(event.target.value)}>
//           {
//             themes.map((themeSelection, index) => {
//               return (
//                 <option value={themeSelection} key={themeSelection + index}>{themeSelection}</option>
//               )
//             })
//           }
//         </select>
//       </header>
//       <Main theme={theme} dragons={dragons} />
//       <Sidebar theme={theme} setDragons={setDragons} />
//       <Footer theme={theme} />
//     </>
//   )
// }

export default App
