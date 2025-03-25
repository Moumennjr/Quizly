import Questions from '../../components/questions/questions';
import QuizPoints from '../../components/quiz-points/quiz-ponits';
import QuizSetting from '../../components/quiz-setting/quiz-setting';
import SideBar2 from '../../components/sidebar2/sidebar2'
import "./create-post-page.css"
function CreatePostPage() {

    return (
        <div className="create-page">
            <SideBar2 close={true} />
            <div className="description">
                <div className="top">
                    <div className="name-desc">
                        <div className='title-cont'>
                            <label htmlFor="title">Quiz title</label>
                            <input type="text" id="title" placeholder='Quiz name...' />
                        </div>
                        <div className="desc-cont">
                            <label htmlFor="description">Description</label>
                            <textarea rows={6} id="description" placeholder='Quiz description...'></textarea>
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
            <Questions />
        </div>
    )
}

export default CreatePostPage;