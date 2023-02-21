import DragonIcon from "../DragonIcon";
export default function DragonButton(props) {
    const { dragonType, setDragons } = props;
    // console.log(key, name)
    const addDragon = () => {
        let dragon = {
            name: dragonType[0],
            fill1: dragonType[1][0],
            fill2: dragonType[1][1],
            fill3: dragonType[1][2]
        };
        setDragons( prev => [...prev, dragon] )
    }
    
    return (
        <button className='dragon-button' onClick={() => addDragon()}>
            <DragonIcon fill1={dragonType[1][0]} fill2={dragonType[1][1]} fill3={dragonType[1][2]} />
            <p>{dragonType[0]}</p>
        </button>
    )

}