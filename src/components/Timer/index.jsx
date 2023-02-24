import { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { time:0 }
    this.interval = null;
  }
  componentDidMount() {
    console.log('mounted!')
    this.interval = setInterval(() => {
      this.setState( {time: this.state.time + 1} )
    }, 1000); 
  }
  // componentDidUpdate() {
  //   console.log('updated!')
  // }
  componentWillUnmount() {
    console.log('unmounted!')
    clearInterval(this.interval);
  }
  render() {
    return <div>You have been on this page for: {Math.floor( this.state.time/60 )} minutes and {this.state.time %60} seconds</div>
  }
}

export default Timer

// export default function Timer() {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     let interval = setInterval(() => setTime(prev => prev+1), 1000); 

//     return () => {
//       // setInterval cleared when component unmounts
//       clearInterval(interval);
//     }
//   }, [])

//   return (
//     <div>You have been on this page for: {Math.floor( time/60 )} minutes and {time %60} seconds</div>
//   )

// }