import { useEffect, useState } from "react";
import "./filters.css";
function Filters() {

    const [closeFilter, setCloseFilter] = useState(true);

    function dropDownD() {
        const dropdownD = document.querySelector('.difficulty .dropdown');
        const dropdownC = document.querySelector('.category .dropdown');
        dropdownC.classList.remove('droped');
        dropdownD.classList.toggle('droped');
    }
    function dropDownC() {
        const dropdownD = document.querySelector('.difficulty .dropdown');
        const dropdownC = document.querySelector('.category .dropdown');
        dropdownD.classList.remove('droped');
        dropdownC.classList.toggle('droped');
    }

    return (
        <div className={closeFilter ? "filter close-filter" : "filter"}>
            <header>
            <i className='bx bx-slider slider' onClick={()=>{
                setCloseFilter(false);
            }} ></i>
                <i className='bx bx-x close' onClick={()=>{
                    setCloseFilter(true);
                }} ></i>
                <h3>Filter & Find Faster</h3>
            </header>
            <div className="menu">
                <div className="filter-types">
                    <div className="sorted type">
                        <span className="title">Sort by</span>
                        <div className="buttons">
                            <button className="selected">Latest</button>
                            <button>Popular</button>
                        </div>
                    </div>

                    <div className="date type">
                        <section className="top">
                            <span className="title">Date range</span>
                            <span className="reset">Reset</span>
                        </section>
                        <section className="dates-section">
                            <div className="date-input from">
                                <span>From</span>
                                <input type="date" />
                            </div>
                            <div className="date-input to">
                                <span>To</span>
                                <input type="date" />
                            </div>
                        </section>
                        <div className="buttons">
                            <button>Today</button>
                            <button>Week</button>
                            <button>Month</button>
                        </div>
                    </div>


                    <div className="category type">
                        <section className="top">
                            <span className="title">Category</span>
                            <span className="reset">Reset</span>
                        </section>
                        <div className="dropdown">
                            <button onClick={dropDownC}>
                                <i className='bx bx-chevron-down'></i>
                            </button>
                            <span>All categories</span>
                            <ul>
                                <li onClick={dropDownC}>Easy</li>
                                <li onClick={dropDownC}>Medium</li>
                                <li onClick={dropDownC}>Hard</li>
                                <li onClick={dropDownC}>Easy</li>
                                <li onClick={dropDownC}>Medium</li>
                                <li onClick={dropDownC}>Hard</li>
                            </ul>
                        </div>

                    </div>
                    <div className="difficulty type">
                        <section className="top">
                            <span className="title">Difficulty</span>
                            <span className="reset">Reset</span>
                        </section>
                        <div className="dropdown">
                            <button onClick={dropDownD} >
                                <i className='bx bx-chevron-down'></i>
                            </button>
                            <span>All difficulties</span>
                            <ul>
                                <li onClick={dropDownD}>Easy</li>
                                <li onClick={dropDownD}>Medium</li>
                                <li onClick={dropDownD}>Hard</li>
                            </ul>
                        </div>
                    </div>

                    <div className="created type">
                        <section className="top">
                            <span className="title">Created by</span>
                            <span className="reset">Reset</span>
                        </section>
                        <div className="buttons">
                            <button className="selected">Everyone</button>
                            <button>Following</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button id="reset-all">Reset All</button>
                    <button id="apply-filters">Apply Filters(3)</button>
                </div>
            </div>
        </div>

    )
}

export default Filters;