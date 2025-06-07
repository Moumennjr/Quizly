import "./question-points.css"

function QuestionPoints({content,onValueChange}) {
    
    return (
        <div className="question-points">
            <i className="bi bi-star"></i>
            <label >{content}</label>
            <input type="number" name="point" min={1} onChange={(e)=>{
                const newValue = e.target.value = '' ? 0 :Number(e.target.value);
                onValueChange(newValue);
                }} />
        </div>
    )
}

export default QuestionPoints;
