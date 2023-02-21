import DragonIcon from "../DragonIcon";
export default function DragonButton(props) {
    const { fill1, fill2, fill3, name, addDragon, dragonIndex } = props;
    // console.log(key, name)
    return (
        <button className='dragon-button' onClick={() => addDragon(dragonIndex)}>
            <DragonIcon fill1={fill1} fill2={fill2} fill3={fill3} />
            <p>{name}</p>
        </button>
    )

}