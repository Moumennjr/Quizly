import QuestionSide from "../question-side/question-side";
import "./questions.css"

function Questions({ questions, setQuestions }) {


    function deleteQuestion(id) {
        const newQuestions = questions.filter((_, index) => index !== id);
        setQuestions(newQuestions);
    }

    return (
        <div className="questions-container">
            <header>
                <h3>Questions</h3>
            </header>
            <div className="question-list">
                <div className="questions">
                    {questions.map((question, index) => (
                        <QuestionSide key={index} id={index} title={question.question} trueFalse={question.trueFalse} deleteQuestion={deleteQuestion} />
                    ))}
                </div>
                <div className="add">
                    <button type="button" onClick={() => {
                        setQuestions([...questions, {
                            question: "",
                            trueFalse: false,
                            options: [""],
                            answer: [],
                            points: 2
                        }]);
                    }} ><i className='bx bx-plus-circle'></i> Add question</button>
                </div>
            </div>
        </div>
    )
}

export default Questions;