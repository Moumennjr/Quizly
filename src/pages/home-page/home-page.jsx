import SideBar2 from "../../components/sidebar2/sidebar2";
import Notification from "../../components/notification/notification";
import "./home-page.css";
import Post from "../../components/post/post";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function HomePage() {
    return <div className="home-page" >
        <SideBar2 close={false} />
        <div className="posts-sction">
            <div className="create-quizz-section">
                <h3>Turn Ideas into Quizzes, Fun into Learning! 🎓</h3>
                <a href="/create-post" >Create Your Quiz Now</a>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Footer />
        </div>

        <Notification />
    </div>
}

export default HomePage;