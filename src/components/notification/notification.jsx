import { useEffect, useState } from "react";
import MsgNot from "./message-notification/msg-not";
import "./notification.css";
function Notification() {
    const [notif, setNotif] = useState("contact");
    const [closeNot, setCloseNot] = useState(true);
    const [translateX, setTranslateX] = useState(0);
    useEffect(() => {
        switch (notif) {
            case 'contact':
                setTranslateX(0);
                break;
            case 'activity':
                setTranslateX(33);
                break;
            case 'class':
                setTranslateX(66);
                break;
            default:
                setTranslateX(0)
        }
    }, [notif])

    return (
        <div className={closeNot ? "notification-container close-notif" : "notification-container"}  >
            <header>
                <div className="notif-icon" onClick={() => {
                    setCloseNot(false)
                }}>
                    <span className="nbr-not">{8}</span>
                    <i className='bx bx-bell'  ></i>
                </div>

                <i className='bx bx-x close' onClick={() => {
                    setCloseNot(true)
                }} ></i>
                <h3>Notification</h3>
            </header>
            <div className="notif-type">
                <button className={notif === "contact" ? "notif-selected" : ""} onClick={() => { setNotif("contact") }}  >Contacts</button>
                <button className={notif === "activity" ? "notif-selected" : ""} onClick={() => { setNotif("activity") }} >Activity</button>
                <button className={notif === "class" ? "notif-selected" : ""} onClick={() => { setNotif("class") }} >Classes</button>
            </div>
            <div className="overflow">
                <div className="content" style={{ transform: `translateX(-${translateX}%)` }}>
                    <div className="notification">
                        <MsgNot image="person.png" username="Username" msg="3 new massages" />
                        <MsgNot image="person.png" username="Username" msg="1 new message" />
                        <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                        <MsgNot image="person.png" username="Username" msg="3 new massages" />
                        <MsgNot image="person.png" username="Username" msg="1 new message" />
                        <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                        <MsgNot image="person.png" username="Username" msg="3 new massages" />
                        <MsgNot image="person.png" username="Username" msg="1 new message" />
                        <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                    </div>
                    <div className="notification">
                        <MsgNot image="person.png" username="Username" msg="3 new massages" />
                        <MsgNot image="person.png" username="Username" msg="1 new message" />
                        <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                    </div>
                    <div className="notification">
                        <MsgNot image="person.png" username="Username" msg="3 new massages" />
                        <MsgNot image="person.png" username="Username" msg="1 new message" />
                        <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;