import { useState } from "react";
import DragonIcon from "../DragonIcon";

export default function Dragon(props) {
    const { fill1, fill2, fill3, name } = props;
    const [clicks, setClicks] = useState(0);
    return (
        <button onClick={() => setClicks(prev => prev+1)} className='dragon'>
            <p>{name} | clicks: {clicks}</p>
            <DragonIcon fill1={fill1} fill2={fill2} fill3={fill3} />
        </button>
    )

}