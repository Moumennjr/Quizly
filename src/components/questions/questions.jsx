import QuestionSide from "../question-side/question-side";
import "./questions.css"
import { useState } from "react";

function Questions({questions,setQuestions}) {

    console.log(questions);

    console.log(questions);
    return (
        <div className="questions-container">
            <header>
                <h3>Questions</h3>
            </header>
            <div className="question-list">
                {questions.map((question, index) => (
                    <QuestionSide key={index} id={index + 1} title={question.question} trueFalse={question.trueFalse}/>
                ))}
                <div className="add">
                    <button type="button" onClick={()=>{
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