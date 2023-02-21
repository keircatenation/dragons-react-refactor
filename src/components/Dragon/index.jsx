// import { useState } from "react";
import React from "react";
import DragonIcon from "../DragonIcon";

// export default function Dragon(props) {
//     const { fill1, fill2, fill3, name } = props;
//     const [clicks, setClicks] = useState(0);
//     return (
//         <button onClick={() => setClicks(prev => prev+1)} className='dragon'>
//             <p>{name} | clicks: {clicks}</p>
//             <DragonIcon fill1={fill1} fill2={fill2} fill3={fill3} />
//         </button>
//     )

// }

class Dragon extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicks: 0 }
        this.addClick.bind(this);
    }
    addClick = function() {
        this.setState( prev => { clicks: prev.clicks + 1 } )
    }

    render() {
        return (
            <button onClick={this.addClick} className='dragon'>
                <p>{this.props.name} | clicks: {this.state.clicks}</p>
                <DragonIcon fill1={this.props.fill1} fill2={this.props.fill2} fill3={this.props.fill3} />
            </button>
        )
    }
}

export default Dragon;