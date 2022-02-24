import {useState} from "react";

export function Counter(){
    const [like,setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    return(
        <div className="counter-container">
            <button onClick={() => setLike(like + 1)}  className="bt-sz-lg">👍{like}</button>
            <button onClick={() => setDisLike(disLike + 1)}  className="bt-sz-lg">👎{disLike}</button>
        </div>
    )
}