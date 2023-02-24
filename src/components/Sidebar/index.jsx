import { dragonTypes } from "../../assets/data";
import DragonButton from "../DragonButton";
import { Component } from "react";

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <aside className={this.props.theme}>
                <h2>Add some dragons!</h2>
                {
                    dragonTypes.map(( type, index ) => {
                        return <DragonButton key={index} setDragons={this.props.setDragons} dragonType={type} />
                    })
                }
            </aside>
        )
    }
}

export default Sidebar;

// export default function Sidebar(props) {
//     const { theme, setDragons } = props;

//     return (
//         <aside className={theme}>
//             <h2>Add some dragons!</h2>
//             {
//                 dragonTypes.map(( type, index ) => {
//                     return <DragonButton key={index} setDragons={setDragons} dragonType={type} />
//                 })
//             }
//         </aside>
//     )
// }