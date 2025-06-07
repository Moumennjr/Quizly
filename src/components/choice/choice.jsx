import { useState } from "react";
import "./choice.css";
function Choice({id,questionId, option, deleteOption, setQuestions}) {

    const [selected, setSelected] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuestions((prev) => {
            const newQuestions = [...prev];
            newQuestions[questionId] = {
                ...newQuestions[questionId],
                options: newQuestions[questionId].options.map((opt, index) => (index === id ? opt = value : opt)),
            };
            return newQuestions;
        });
    }


    return (
        <div className="choice">
            <button className={selected ? "select selected-choice" : "select"} onClick={() => setSelected(!selected)}>
                <span></span>
            </button>
            <input type="text" placeholder="Add choice..."  onChange={handleChange} value={option} />
            <button className="delete">
                <i className="bi bi-trash" onClick={()=>{
                    deleteOption(id);
                }}></i>
            </button>
        </div>
    )
}
export default Choice;