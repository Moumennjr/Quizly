import AddQuestion from '../../components/add-question/add-question';
import Questions from '../../components/questions/questions';
import QuestionPoints from '../../components/question-points/question-points';
import QuizSetting from '../../components/quiz-setting/quiz-setting';
import SideBar2 from '../../components/sidebar2/sidebar2'
import { useRef, useEffect, useState } from 'react';
import "./create-post-page.css"
import TotalPoints from '../../components/total-points/total-points';

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
        points: 0
    },]);

    const [imagePopUp, setImagePopup] = useState(false);

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

    const [childrenPoints, setChildrenPoints] = useState([]);

    const popupRef = useRef(null);

    const handleChildrenPointsChange = (index, newVlue) => {
        const updatedPoints = [...childrenPoints];
        updatedPoints[index] = newVlue;
        setChildrenPoints(updatedPoints);
    }

    const addChildPoints = () => {
        setChildrenPoints([...childrenPoints, 0]);
    }

    const total = childrenPoints.reduce((sum, val) => sum + Number(val), 0);

    useEffect(() => {
        addChildPoints();

    }, [questions]);

    useEffect(() => {
          
        if(!imagePopUp) {
            document.body.style.overflow = ''; 
            return;
        }else {
            document.body.style.overflow = 'hidden';
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setImagePopup(false);
            }
        }

        const handleClickOutside = (event) => {
            if(popupRef.current && !popupRef.current.contains(event.target)) {
                setImagePopup(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [imagePopUp]);

    return (
        <div  >
            {
                imagePopUp && <div className="image-popup">
                    <div className="popup-content" ref={popupRef}>
                        <h3>Upload Quiz Image</h3>
                        <div className='frame' >
                            < i class='bi bi-card-image' ></i> 
                            <p>Drop your image here, or <label htmlFor="img">browse</label></p>
                            
                            <input type="file" id="img" accept="image/*" style={{display:"none"}} />
                        </div>
                    </div>
                </div>
            }
            <div className={sideBar ? "create-page" : "create-page closed-bar"} >

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
                                <button onClick={() => { setImagePopup(true) }} ><i className="bi bi-pencil-square"></i></button>
                                <button><i className="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <QuizSetting content="Add category" icon="bi bi-grid" settings={["Froentend", "Backend", "Fullstack", "Design"]} />
                        <QuizSetting content="select difficulty" icon="bi bi-speedometer2" settings={["Easy", "Medium", "Hard"]} />
                        <TotalPoints content="Total points: " value={total} />
                        <QuestionPoints content="Pass points: " />
                    </div>
                </div>
                <div className="questions">
                    {questions.map((_, index) => {
                        return <AddQuestion key={index} id={index} questions={questions} setQuestions={setQuestions} onValueChange={handleChildrenPointsChange} />
                    })}
                </div>
                <button id='add-question' onClick={() => {
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
                <Questions questions={questions} setQuestions={setQuestions} />
            </div>
        </div>
    )
}

export default CreatePostPage;