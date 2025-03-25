import QuestionSide from "../question-side/question-side";
import "./questions.css"

function Questions() {

    return (
        <div className="questions-container">
            <header>
                <h3>Questions</h3>
            </header>
            <div className="question-list">
                <QuestionSide id={1} title = "Question title" trueFalse={false} />
                <QuestionSide id={2} title = "Question title" trueFalse={true} />
                <QuestionSide id={3} title = "Question title" trueFalse={false} />
                <div className="add">
                    <button><i className='bx bx-plus-circle'></i> Add question</button>
                </div>
            </div>
        </div>
    )
}

export default Questions;