import React from "react";
import DragonIcon from "../DragonIcon";
class DragonButton extends React.Component {
    constructor( props) {
        super(props)
        this.addDragon.bind(this)
    }
    
    addDragon = function( ) {
        let dragon = {
            name: this.props.dragonType[0],
            fill1: this.props.dragonType[1][0],
            fill2: this.props.dragonType[1][1],
            fill3: this.props.dragonType[1][2]
        };
        this.props.setDragons(dragon)
    }

    render() {
        return (
            <button className='dragon-button' onClick={() => this.addDragon()}>
                <DragonIcon fill1={this.props.dragonType[1][0]} fill2={this.props.dragonType[1][1]} fill3={this.props.dragonType[1][2]} />
                <p>{this.props.dragonType[0]}</p>
            </button>
        )
    }
}

export default DragonButton;