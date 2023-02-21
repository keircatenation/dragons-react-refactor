import { dragonTypes } from "../../assets/data";
import DragonButton from "../DragonButton";

export default function Sidebar(props) {
    const { theme, setDragons } = props;

    return (
        <aside className={theme}>
            <h2>Add some dragons!</h2>
            {
                dragonTypes.map(( type, index ) => {
                    return <DragonButton key={index} setDragons={setDragons} dragonType={type} />
                })
            }
        </aside>
    )

}