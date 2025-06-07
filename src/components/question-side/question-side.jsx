import "./question-side.css"
function QuestionSide({ id, title, trueFalse, deleteQuestion}) {


    return (
        <div className="Question-side">
            <div className="question-title">
                <h4><span id="id">{id + 1}</span> <span id="title">{title ? title : <span style={{color:"#939393"}} >Title...</span>}</span></h4>
            </div>
            <div className="choice-delete">
                <span>{trueFalse ? <i className="bi bi-list-check"></i> : <i className="bi bi-list-task"></i>} {trueFalse ? 'True false' : 'Multiple choice'} </span>
                <i className="bi bi-trash delete" onClick={() => {
                    console.log(id);
                    deleteQuestion(id);
                }} ></i>
            </div>
        </div>
    )
}

export default QuestionSide;