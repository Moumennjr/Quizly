import "./add-question.css";
import QuizSetting from "../quiz-setting/quiz-setting";
import Choice from "../choice/choice";
import QuestionPoints from "../question-points/question-points";
import { useState } from "react";
function AddQuestion({ id, questions, setQuestions, onValueChange }) {

    const [questionType, setQuestionType] = useState("Multiple choice");
    const [answer, setAnswer] = useState(null);

    function nbrQquestions(lenght) {
        const nbr = [1];
        let i;
        for (i = 1; i < lenght; i++) {
            nbr.push(i + 1);
        }

        return nbr;
    }

    function deleteOption(choiceId) {
        setQuestions((prev) => {
            return prev.map((q, questionIndex) =>
                questionIndex === id
                    ? { ...q, options: q.options.filter((option, index) => index !== choiceId) }
                    : q
            );
        });
    }

    function handleChange(points) {
        onValueChange(id, points);
    }

    function handleQuestionTypeChange(newType) {
        setQuestionType(newType);
    }
    return (
        <div className="add-question">
            <div className="top">
                <div className="label">
                    <label htmlFor="question">Question {id + 1} </label>
                    <QuizSetting content="Multiple choice" icon="bi bi-list-task" settings={["Multiple choice", "True False"]} handleChange={handleQuestionTypeChange} />
                </div>
                <div className="question">
                    <input
                        type="text"
                        placeholder="Question..."
                        name="question"
                        value={questions[id].question}
                        onChange={(e) => {
                            setQuestions((prev) => {
                                const newQuestions = [...prev];
                                newQuestions[id].question = e.target.value;
                                return newQuestions;
                            });
                        }}
                    />
                    {
                        questionType === "True False" &&
                        <div className="true-false">
                            <button onClick={()=>{setAnswer(true)}}  style={{color: answer === true && "#28a745", borderColor: answer === true && "#28a745"}} ><i className="bi bi-check2" style={{fontSize:"1.9rem"}} ></i> </button>
                            <button onClick={()=>{setAnswer(false)}} style={{color: answer === false && '#dc3545', borderColor: answer === false && "#dc3545"}} ><i className="bi bi-x-lg"></i> </button>

                        </div>
                    }
                </div>
            </div>
            {
                questionType === "Multiple choice" && 
                <div className="choices">
                    <h3 className="title">Choices</h3>
                    <div className="choices-elements">
                        {questions[id].options.map((option, index) => (
                            <Choice key={index} id={index} questionId={id} option={option} deleteOption={deleteOption} setQuestions={setQuestions} />
                        ))}
                        <button type="button" id="add-answer" onClick={() => {
                            setQuestions((prev) => {
                                const newQuestions = [...prev];
                                newQuestions[id] = {
                                    ...newQuestions[id],
                                    options: [...newQuestions[id].options, ""],
                                };
                                return newQuestions;
                            });

                        }}>
                            <i className="bx bx-plus-circle"></i>
                            Add answer
                        </button>
                    </div>
                </div>
            }
            <div className="bottom">
                <QuizSetting content="Current order" icon="bi bi-list-task" settings={nbrQquestions(questions.length)} />
                <QuestionPoints content="Points:" onValueChange={handleChange} />
            </div>
        </div>
    );
}

export default AddQuestion;
