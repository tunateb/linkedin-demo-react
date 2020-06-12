import React from 'react'
import './LeftSideBar.scss'
import { Link } from "react-router-dom";


function LeftSideBar() {


    return (
        <div className="sidebar-left">
            <div className="sidebar-links" >
                <ul>
                    <li><i className="fas fa-link"></i><Link className="nav-link" to="/">CONNECTIONS</Link></li>
                    <li><i className="far fa-dot-circle"></i><Link className="nav-link" to="/user">USER LIST</Link></li>
                    <li><i className="fas fa-archive"></i><Link className="nav-link" to="/">TEAMMATES</Link></li>
                    <li><i className="fas fa-user-friends"></i><Link className="nav-link" to="/">GROUPS</Link></li>
                    <li><i className="far fa-file"></i><Link className="nav-link" to="/">PAGES</Link></li>
                    <li><i className="fas fa-hashtag"></i><Link className="nav-link" to="/">HASHTAGS</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar;