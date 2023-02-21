import React from "react";
import { dragonTypes } from "../../assets/data";
import DragonButton from "../DragonButton";

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <aside className={this.props.theme}>
                <h2>Add some dragons!</h2>
                {
                    dragonTypes.map(( type, index ) => {
                        return <DragonButton key={index} setDragons={this.props.setDragons} dragonType={ type } />
                    })
                }
            </aside>
        )
    }
}

export default Sidebar