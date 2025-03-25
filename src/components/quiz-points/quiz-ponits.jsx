function QuizPoints({content}) {

    return (
        <button className="quiz-setting">
            <i className="bi bi-star"></i>
            <span>{content}</span>
            <i className="bi bi-chevron-expand arrow"></i>
        </button>
    )
}

export default QuizPoints;
