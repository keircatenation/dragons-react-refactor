import { useState, useEffect } from 'react'

export default function Timer(props) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => setTime(prev => prev+1), 1000); 
    
        return () => {
          // setInterval cleared when component unmounts
          clearInterval(interval);
        }
      }, [])

    return (
        <div>You have been on this page for: {Math.floor( time/60 )} minutes and {time %60} seconds</div>
    )

}