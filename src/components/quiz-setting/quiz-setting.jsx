import { useRef,useEffect, useState } from "react";
import "./quiz-setting.css";

function QuizSetting({ content, icon, settings, handleChange }) {

  const dropRef = useRef(null);
  const [contentS, setContentS] = useState(content);
  const [drop, setDrop] = useState(false);
  const [setting, setSetting] = useState('');
  useEffect(() => {
    if(!drop) return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setDrop(false);
            }
        }

        const handleClickOutside = (event) => {
            if(dropRef.current && !dropRef.current.contains(event.target)) {
                setDrop(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        }
  },[drop]);

  useEffect(() => {
    if (setting != '' && handleChange) {
      handleChange(setting);
    }
  },[setting]);

  return (
    <div className="quiz-setting-container">
      <button className="quiz-setting" onClick={() => {
        setDrop(!drop);
      }} >
        <i className={icon}></i>
        <span>{contentS}</span>
        <i className="bi bi-chevron-down arrow"></i>
      </button>
      <ul className={drop ? "droped" : ""} ref={dropRef} >

        {
          (settings && settings.length > 0) && settings.map((item, index) => (
            <li key={index} onClick={() => {
              setContentS(item);
              setSetting(()=>{
                return settings[index];
              })
              setDrop(false);
            }}>
              {item}
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default QuizSetting;