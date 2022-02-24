import {useState} from "react";

export function AddColor(){

    const [color, setColor] = useState("orange");
    const styles = {
        fontSize: "24px",
        background: color

    };

    const [colorList, setColorList] = useState(["orange", "crismon", "red"]);

    return(
        <div>
            <div className="add-color">
                <input onChange={(event) => setColor(event.target.value)}
                  style={styles}
                  placeholder='Enter a color'
                  />
                  <button onClick={() => setColorList([...colorList, color])}
                   className="btn-bg">Add Color</button>
            </div>
            {colorList.join()}
            {colorList.map(clr => <ColorBox color = {clr}/>)}
        </div>
    )
}

function ColorBox({color}){
    const styles ={
        backgroundColor: color,
        height:"35px",
        width:"300px",
        marginTop:"10px"
        
    }
}