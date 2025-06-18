import "./profile.css"
import Sidebar2 from "../../components/sidebar2/sidebar2"
import Post from "../../components/post/post"
import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
function Profile() {

    const [postType, setPostType] = useState("your quizzes");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulate loading data
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay
    }, [postType]);


    return (
        <div className="profile-container">
            <Sidebar2 close={false} />
            <div className="all">
                <div className="information">
                    <img src="./user2.png" alt="profile image" />
                    <div className="name-description">
                        <div className="name">
                            <h2 itemProp="name">Lebgaa Rabah</h2>
                            <button>Edit Profile</button>
                        </div>
                        <div className="stats">
                            <span itemProp="QuizzesCount">50 Quizzes</span>
                            <span itemProp="followerCount">20 Followers</span>
                            <span itemProp="followingCount">15 Followings</span>
                        </div>
                        <section aria-label="User Description">
                            <p>Description ipsum dolor sit amet consectetur. Vel ullamcorper egestas faucibus mauris. Pellentesque viverra habitant
                                lacinia tincidunt. </p>
                        </section>
                    </div>
                </div>
                <div className="down">
                    <nav className="quizzes" role="navigation" aria-label="Quiz Sections">
                        <button className={postType === "your quizzes" ? "selected" : ""} onClick={() => {
                            setPostType("your quizzes");
                        }} ><i className="bi bi-list-task"></i>Your quizzes</button>
                        <button className={postType === "saved quizzes" ? "selected" : ""} onClick={() => {
                            setPostType("saved quizzes");
                        }} ><i className="bi bi-bookmark"></i>Saved quizzes</button>
                    </nav>



                    {
                        loading ?
                            <div className="loading">
                                <img src="./bouncing-circles.svg" alt="Loading..." width={70} />
                            </div>
                            :
                            postType === "your quizzes" ?
                                <section className="quizz-posts" role="region" aria-label="Your Quizzes">
                                    <Post />
                                    <Post />
                                    <Post />
                                </section> :
                                <section className="quizz-posts" role="region" aria-label="Your Quizzes">
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                </section>
                    }
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Profile;