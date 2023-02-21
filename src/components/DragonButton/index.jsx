import React from "react";
import DragonIcon from "../DragonIcon";
class DragonButton extends React.Component {
    constructor( props) {
        super(props)
    }

    render() {
        return (
            <button key={this.props.key} className='dragon-button' onClick={() => this.props.addDragon(this.props.dragonIndex)}>
                <DragonIcon fill1={this.props.fill1} fill2={this.props.fill2} fill3={this.props.fill3} />
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default DragonButton;