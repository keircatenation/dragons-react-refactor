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
                        let name = type[0];
                        let fills = type[1];
                        return <DragonButton name={name} key={index} dragonIndex={index} setDragons={this.setDragons} fill1={fills[0]} fill2={fills[1]} fill3={fills[2]} dragonType={ type } />
                    })
                }
            </aside>
        )
    }
}

export default Sidebar