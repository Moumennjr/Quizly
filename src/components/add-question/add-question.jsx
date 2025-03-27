import "./add-question.css";
import QuizSetting from "../quiz-setting/quiz-setting";
import Choice from "../choice/choice";
import QuizPoints from "../quiz-points/quiz-ponits";
import { useState } from "react";

function AddQuestion({id, question, setQuestions }) {
    // const [qst, setQst] = useState(question || { question: "", options: [] });
    // const handleQuestionChange = (e) => {
    //     setQst({ ...qst, question: e.target.value });
    // };

    // console.log(qst.question);

    // const addOption = () => {
    //     setQst({ ...qst, options: [...qst.options, ""] });
    // };

    return (
        <div className="add-question">
            <div className="top">
                <div className="label">
                    <label htmlFor="question">Question</label>
                    <QuizSetting content="Multiple choice" icon="bi bi-list-task" />
                </div>
                <input
                    type="text"
                    placeholder="Question..."
                    name="question"
                    value={question.question}
                    onChange={(e)=>{
                        setQuestions((prev) => {
                            const newQuestions = [...prev];
                            newQuestions[id].question = e.target.value;
                            return newQuestions;
                        });
                    }}
                />
            </div>
            <div className="choices">
                <h3 className="title">Choices</h3>
                <div className="choices-elements">
                    {question.options.map((option, index) => (
                        <Choice key={index} option={option} />
                    ))}
                    <button type="button" id="add-answer" onClick={()=>{
                        setQuestions((prev) => {
                            const newQuestions = [...prev];
                            newQuestions[id].options.push("");
                            return newQuestions;
                        });
                    }}>
                        <i className="bx bx-plus-circle"></i>
                        Add answer
                    </button>
                </div>
            </div>
            <div className="bottom">
                <QuizSetting content="Current order" icon="bi bi-list-task" />
                <QuizPoints content="Points: 1" />
            </div>
        </div>
    );
}

export default AddQuestion;
