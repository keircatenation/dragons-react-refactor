import { Component } from "react";
import DragonIcon from "../DragonIcon";

class DragonButton extends Component {
    constructor(props) {
        super(props)
        this.addDragon = this.addDragon.bind(this);
    }
    addDragon() {
        let dragon = {
            name: this.props.dragonType[0],
            fill1: this.props.dragonType[1][0],
            fill2: this.props.dragonType[1][1],
            fill3: this.props.dragonType[1][2]
        };
        this.props.setDragons( dragon )
    }
    render() {
        return (
            <button className='dragon-button' onClick={this.addDragon}>
                <DragonIcon fill1={this.props.dragonType[1][0]} fill2={this.props.dragonType[1][1]} fill3={this.props.dragonType[1][2]} />
                <p>{this.props.dragonType[0]}</p>
            </button>
        )
    }
}

export default DragonButton

// export default function DragonButton(props) {
//     const { dragonType, setDragons } = props;
//     // console.log(key, name)
//     const addDragon = () => {
//         let dragon = {
//             name: dragonType[0],
//             fill1: dragonType[1][0],
//             fill2: dragonType[1][1],
//             fill3: dragonType[1][2]
//         };
//         setDragons( prev => [...prev, dragon] )
//     }
    
//     return (
//         <button className='dragon-button' onClick={() => addDragon()}>
//             <DragonIcon fill1={dragonType[1][0]} fill2={dragonType[1][1]} fill3={dragonType[1][2]} />
//             <p>{dragonType[0]}</p>
//         </button>
//     )

// }