import "./question-side.css"
function QuestionSide({ id, title, trueFalse }) {

    return (
        <div className="Question-side">
            <div className="question-title">
                <span>{id}</span>
                <h4>{title}</h4>
            </div>
            <div className="choice-delete">
                <span>{trueFalse ? <i className="bi bi-list-check"></i> : <i className="bi bi-list-task"></i>} {trueFalse ? 'True false' : 'Multiple choice'} </span>
                <i className="bi bi-trash delete"></i>
            </div>
        </div>
    )
}

export default QuestionSide;