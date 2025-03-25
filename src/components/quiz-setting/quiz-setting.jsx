import "./quiz-setting.css";

function QuizSetting({content, icon}) {
  return (
    <button className="quiz-setting">
        <i className={icon}></i>
        <span>{content}</span>
        <i className="bi bi-chevron-down arrow"></i>
    </button>
  );
}

export default QuizSetting;