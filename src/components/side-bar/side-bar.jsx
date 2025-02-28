import { useState } from "react";
import "./side-bar.css";
import { Link } from "react-router-dom"

function SideBar() {

    const [close, setclose] = useState(true);
    function closeSideBar(close){
        const sidebar = document.getElementById('sidebar');
        if(close){
            sidebar.classList.add("reduced");
        }else{
            sidebar.classList.remove("reduced");
        }
    }

    


    return (
        <div className="side-bar-container" id="sidebar" >
            <i className ='close bx bx-chevron-left' onClick={()=>{setclose(!close);closeSideBar(close);}} ></i>
            <div className="elements">
                <div className="logo">
                    <Link to="/"><img src={!close ? "/logo.png" : "/Quizly.png"} alt="" width={100} /></Link>
                </div>
                <Link to="/home" id="home" ><i className='bx bx-home-alt-2'></i><span>Home</span></Link>
                <Link to="#" ><i className='bx bx-compass'></i><span>Explore</span></Link>
                <Link to="#" ><i className='bx bx-plus-circle'></i><span>Create</span></Link>
                <Link to="#" ><i className='bx bx-message-rounded-minus'></i><span>Inbox</span></Link>
                <Link to="#" ><i className='bx bx-bookmark' ></i><span>Saved</span></Link>
                <Link to="#" ><i className='bx bx-cog' ></i><span>Settings</span></Link>
            </div>
            <div className="profile">
                <Link to="#" id="profile"><i className='bx bx-user' ></i>Profile</Link>
            </div>
        </div>
    )
}

export default SideBar;