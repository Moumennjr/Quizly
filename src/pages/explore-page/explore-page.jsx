import Filters from "../../components/filters/filters";
import SideBar2 from "../../components/sidebar2/sidebar2";
import "./explore-page.css"
function ExplorePage() {


    return (
        <div className="explore-page">
            <SideBar2 close={true} />
            <div className="explore">
                <div className="grid-elements">
                    <div className="item"><img src="./quiz-post1.jpg" alt="" /></div>
                    <div className="item"><img src="./Quiz with Friends.png" alt="" /></div>
                    <div className="item"><img src="./Unleash Your Curiosity.png" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./Nerd.jpg" alt="" /></div>
                    <div className="item"><img src="./quiz-post1.jpg" alt="" /></div>
                    <div className="item"><img src="./Quiz with Friends.png" alt="" /></div>
                    <div className="item"><img src="./Unleash Your Curiosity.png" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./Nerd.jpg" alt="" /></div>
                    <div className="item"><img src="./quiz-post1.jpg" alt="" /></div>
                    <div className="item"><img src="./Quiz with Friends.png" alt="" /></div>
                    <div className="item"><img src="./Unleash Your Curiosity.png" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./Nerd.jpg" alt="" /></div>
                    <div className="item"><img src="./quiz-post1.jpg" alt="" /></div>
                    <div className="item"><img src="./Quiz with Friends.png" alt="" /></div>
                    <div className="item"><img src="./Unleash Your Curiosity.png" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./question.jpg" alt="" /></div>
                    <div className="item"><img src="./Nerd.jpg" alt="" /></div>
                </div>
            </div>
            <Filters />
        </div>
    )
}

export default ExplorePage;