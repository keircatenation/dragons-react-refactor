import React from 'react';
import { useState, useEffect } from 'react'

// export default function Timer(props) {
//     const [time, setTime] = useState(0);
//     useEffect(() => {
//         let interval = setInterval(() => setTime(prev => prev+1), 1000); 
    
//         return () => {
//           // setInterval cleared when component unmounts
//           clearInterval(interval);
//         }
//       }, [])

//     return (
//         <div>You have been on this page for: {Math.floor( time/60 )} minutes and {time %60} seconds</div>
//     )

// }

class Timer extends React.Component{
  constructor(props) {
    super(props)
    this.state = { time:0, interval:0 }
    this.setTime = this.setTime.bind(this);
  }
  setTime() {
    this.setState(prev => ( { time: prev.time + 1 } ))
  }
  componentDidMount() {
    const interval = setInterval(() => this.setTime(), 1000);
    this.setState( prev => ( { ...prev, interval } ) )
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return(
      <div>You have been on this page for: {Math.floor( this.state.time/60 )} minutes and {this.state.time %60} seconds</div>
    )
  }
}

export default Timer