import AddQuestion from '../../components/add-question/add-question';
import Questions from '../../components/questions/questions';
import QuizPoints from '../../components/quiz-points/quiz-ponits';
import QuizSetting from '../../components/quiz-setting/quiz-setting';
import SideBar2 from '../../components/sidebar2/sidebar2'
import Footer from '../../components/footer/footer';
import { useState } from 'react';
import "./create-post-page.css"

function CreatePostPage() {
    const [sideBar, setSideBar] = useState(false);
    const [quizDesc, setQuizDesc] = useState({
        title: "",
        description: "",
    });
    const [questions, setQuestions] = useState([{
        question: "",
        trueFalse: false,
        options: [""],
        answer: [],
        points: 2
    },]);
    const handleCloseSideBar = (data) => {
        setSideBar(data);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuizDesc((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={sideBar ? "create-page" : "create-page closed-bar"}>
            <SideBar2 close={false} closeSideBar={handleCloseSideBar} />
            <div className="description">
                <div className="top">
                    <div className="name-desc">
                        <div className='title-cont'>
                            <label htmlFor="title">Quiz title</label>
                            <input type="text" placeholder='Quiz name...' onChange={handleChange} value={quizDesc.title} name='title' />
                        </div>
                        <div className="desc-cont">
                            <label htmlFor="description">Description</label>
                            <textarea rows={6} placeholder='Quiz description...' onChange={handleChange} value={quizDesc.description} name='description'></textarea>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/inovex.jpg" />
                        <div className="icons">
                            <button><i className="bi bi-pencil-square"></i></button>
                            <button><i className="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <QuizSetting content="Add category" icon="bi bi-grid" />
                    <QuizSetting content="select difficulty" icon="bi bi-speedometer2" />
                    <QuizPoints content="Total points:  20" />
                    <QuizPoints content="Pass points:  10" />
                </div>
            </div>
            <div className="questions">
                {questions.map((question, index) => {
                    return <AddQuestion key={index} id={index} question={question} setQuestions={setQuestions} />
                })}
            </div>
            <button id='add-question' onClick={()=>{
                setQuestions([...questions, {
                    question: "",
                    trueFalse: false,
                    options: [""],
                    answer: [],
                    points: 2
                }]);
            }} >
                <i className='bx bx-plus-circle'></i>
                Add question
            </button>
            <div className="preview-publish">
                <button id="publish" >Publish</button>
                <button>Preview</button>
            </div>
            <Footer />
            <Questions questions={questions} setQuestions={setQuestions} />
        </div>
    )
}

export default CreatePostPage;