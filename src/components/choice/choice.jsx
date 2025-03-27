import { useState } from "react";
import "./choice.css";
function Choice() {

    const [selected, setSelected] = useState(false);


    return (
        <div className="choice">
            <button className={selected ? "select selected-choice" : "select"} onClick={() => setSelected(!selected)}>
                <span></span>
            </button>
            <input type="text" placeholder="Add choice..." />
            <button className="delete">
                <i className="bi bi-trash"></i>
            </button>
        </div>
    )
}
export default Choice;