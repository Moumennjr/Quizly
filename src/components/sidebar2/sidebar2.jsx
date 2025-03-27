import "./sidebar2.css";
import { useState } from "react";
function SideBar2({close, closeSideBar}) {

    const currentPage = window.location.pathname;

    const [closeSide, setCloseSide] = useState(close);


    return (
        <nav className={closeSide ? "sidebar close": "sidebar"}>
            <header>
                <img id="image1" src="/quizly.png" alt="logo" width={143} />
                <i className='bx bx-menu' onClick={()=>{
                    setCloseSide(!closeSide);
                    closeSideBar(!closeSide);
                }}></i>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <li className="search">
                        <i className='bx bx-search-alt-2 icon' id="search"></i>
                        <input type="text" name="search" placeholder="Search..." />
                    </li>
                    <ul>
                        <li className={currentPage === "/home" ? "current-page" : ""}><a href="/home"><i className='bx bx-home-alt icon'></i><span className="text" >Home</span></a></li>
                        <li className={currentPage === "/explore" ? "current-page" : ""}><a href="/explore"><i className='bx bx-compass icon' ></i><span className="text" >Explore</span></a></li>
                        <li className={currentPage === "/create-post" ? "current-page" : ""}><a href="/create-post"><i className="bx bx-plus-circle icon"></i><span className="text" >Create</span></a></li>
                        <li className={currentPage === "/inbox" ? "current-page" : ""}><a href="#"><i className='bx bx-message-square icon'></i><span className="text" >Inbox</span></a></li>
                        <li className={currentPage === "/saved" ? "current-page" : ""}><a href="#"><i className="bx bx-bookmark icon"></i><span className="text" >Saved</span></a></li>
                        <li className={currentPage === "/settings" ? "current-page" : ""}><a href="#"><i className="bx bx-cog icon"></i><span className="text" >Settings</span></a></li>
                    </ul>
                </div>
                <div className="profile">
                    <li><a href="#"><i className='bx bx-user icon'></i><span className="text">Profile</span></a></li>
                </div>

            </div>
        </nav>
    );
}


export default SideBar2;